var selectedBuildings = [];
var dropdownBuildings = [];
var editBlock = null;
//needs a function that goes through each block in User.blocks and retrieves chart data from that object.
var blocksChartData = [];

angular.module('blockController', [])
    .controller('blockController', function($route, $scope, $http, $location, $timeout, Building, Block, GetBlockByID) {
        //this is to clear the selection
        selectedBuildings = [];
        $scope.maxValues = [];
        $scope.medValues = [];
        $scope.minValues = [];
        /*
        This is the function for removing from the dropdown
        and adding to the selection list group
         */
        $scope.selection = function(building) {
            selectedBuildings.push(building);
            var index = dropdownBuildings.indexOf(building);
            if (index > -1) {
                dropdownBuildings.splice(index, 1);
            }
            $scope.buildings = dropdownBuildings;
            $scope.selectedBuildings = selectedBuildings;
            $scope.buildingSelection = "";
        };

        /*
        This is the function for removing from the selection list group
        and adding the building back to the dropdown menu
         */
        $scope.removeBuilding = function(building) {
            dropdownBuildings.push(building);
            var index = selectedBuildings.indexOf(building);
            if (index > -1) {
                selectedBuildings.splice(index, 1);
            }
            $scope.buildings = dropdownBuildings;
            $scope.selectedBuildings = selectedBuildings;
            $scope.buildingSelection = "";
        };

        /*
        A service call to retrieve all user blocks from API
        INPUT: the block that was selected from DOM
        OUTPUT: loads the $scope variable userBlocks with API data
        */
        Block.get()
            .success(function(data) {
                $scope.userBlocks = data;
            });

        /*
        A service call to delete a specific block when prompted
        INPUT: the block that was selected from DOM
        OUTPUT: reloads current page to show updated user blocks
        */
        $scope.DeleteBlock = function(block){
            Block.delete({_id : block._id})
                .success(function() {
                    $route.reload();
                });
        };

        /*
        A function called on ng-init of title H4 in create-block.html
        Sets scope variables depending on if user is creating or editing
        Sets title heading and submit button text
        */
        $scope.getTitle = function(){
            if(editBlock == null){
                $scope.title = "Create Block";
                $scope.buttontext = "Create";
            }
            else{
                $scope.title = "Update Block";
                $scope.buttontext = "Update";
            }
        };

        /*
        This function is called on ng-click of the create block button in blocks.html
        makes sure that our edit variable is null to indicate we are creating
        */
        $scope.create = function(){
            editBlock = null;
        };

        /*
        A function called on ng-init of the dropdown menu for buildings
        This function checks the editBlock variable to see if the user is editing or not

        If Edit:
        the function calls two services, GetBlockByID
            --> which populates all the building objects in the API
        and then calls Building.get to populate the drop down of buildings
        The function then removes the buildings in the editblock from the dropdown and
        adds them to the selected buildings list group as if to "pre-populate" selections

        If creating:
        Calls the Building.get service to populate dropdown
        */
        $scope.getBlockBuildings = function(){
            if(editBlock != null){
                GetBlockByID.get(editBlock)
                    .then(function(block) {
                        Building.get()
                            .then(function (data) {
                                dropdownBuildings = data.data;
                                $scope.selectedBuildings = "";
                                block.data.building.forEach( function(building){
                                    var count = 0;
                                    dropdownBuildings.forEach(function (obj) {
                                        if(obj._id == building._id){
                                            dropdownBuildings.splice(count, 1);
                                            selectedBuildings.push(obj);
                                            count++;
                                        }
                                        else count++;
                                    });
                                });
                                $scope.buildings = dropdownBuildings;
                                $scope.selectedBuildings = selectedBuildings;
                                $scope.buildingSelection = "";
                            });
                    });
            }
            else{
                Building.get()
                    .then(function (data) {
                        console.log(data.data);
                        dropdownBuildings = data.data;
                        $scope.buildings = dropdownBuildings;
                        $scope.selectedBuildings = "";
                    });
            }
        };
        /*
        This function is called as the ng init of the stats section for each block
        it calculates the high, median, and low for each buildings data and pushed them to arrays.
        These arrays are then ng-repeated in the view and the values for each building are displayed in the block
         */
        $scope.getValues = function(buildings){
            var maxes = [];
            var meds = [];
            var mins = [];
            buildings.forEach(function(currBuilding) {
                var to_pass = {building: currBuilding, val : "Accumulated Real Energy Net"};
                var max = {name: currBuilding.name, max : null, units : null};
                var med = {name: currBuilding.name, med : null, units : null};
                var min = {name: currBuilding.name, min : null, units : null};
                Building.getBuildingData(to_pass).then(function(data) {
                    //console.log(data);
                    y = [];
                    data.forEach(function(entry){
                        if(entry.point[0]) {
                            y.push(entry.point[0].value);
                        }
                    });
                    max.max = Math.max(...y);
                    max.units = "KwH";
                    min.min = Math.min(...y);
                    min.units = "KwH";

                    y.sort((a, b) => a - b);
                    var lowMiddle = Math.floor((y.length - 1) / 2);
                    var highMiddle = Math.ceil((y.length - 1) / 2);
                    med.med = (y[lowMiddle] + y[highMiddle]) / 2;
                    med.units = "KwH";


                });
                maxes.push(max);
                meds.push(med);
                mins.push(min);
            });
            $scope.maxValues.push(maxes);
            $scope.medValues.push(meds);
            $scope.minValues.push(mins);
        };

        /*---------------------------------------------------------------------------------------
        ----------------------------------EDIT/UPDATE FUNCTIONS----------------------------------
        ---------------------------------------------------------------------------------------*/

        /*
        This function is called on ng-click of the edit block button in blocks.html
        makes sure that our editBlock variable is set to the correct block
        */
        $scope.EditBlock = function(block){
            editBlock = block;
            $location.path('/createblock');
        };

        /*
        A function called on ng-init of the nameForm input tag
        prepopulates input form with the name of the block being edited
        */
        $scope.getName = function(){
            if(editBlock != null){
                $scope.nameForm = editBlock.name;
            }
        };

        /*
        A function called on ng-init of the chartForm input tag
        prepopulates input form with the chart-name of the block being edited
        */
        $scope.getChart = function(){
            if(editBlock != null){
                $scope.chartForm = editBlock.chart;
            }
        };

        /*
        This function is called on ng-click of submit button,
        this decides whether to call the create API or edit API
        */
        $scope.submit = function(){
            if(editBlock == null){
                CreateBlock();
            }
            else{
                /*
                Need to create an "Update" function and API
                 */
                UpdateBlock(editBlock);
            }
        };

        /*
        This function gathers all the form data and creates a block object
        it then passes this block object to the API to create and store in the database
        */
        function CreateBlock() {
            // validate the formData to make sure that something is there
            // if form is empty, nothing will happen
            // people can't just hold enter to keep adding the same to-do anymore
            if (!$.isEmptyObject($scope.nameForm) && !$.isEmptyObject($scope.chartForm))  {
                // call the create function from our service (returns a promise object)
                var BlockData = {
                    "name": $scope.nameForm,
                    "chart": $scope.chartForm,
                    "buildings": selectedBuildings
                };
                console.log(BlockData);
                Block.create(BlockData)
                // if successful creation
                    .success(function(data) {
                        selectedBuildings.forEach(function(b) {
                            dropdownBuildings.push(b);
                        });
                        selectedBuildings = [];
                        $scope.selectedBuildings = selectedBuildings;
                        $scope.nameForm = "";
                        $scope.chartForm = "";
                        $location.path('/blocks');

                    });
            }
        }
        
        /*
        Function to update block information by taking the id of the current block and 
        taking the $scope variables for updated info.
        */
        function UpdateBlock(editBlock){
            var update_block_data = {
                "_id"   : editBlock._id,
                "name"  : $scope.nameForm,
                "chart" : $scope.chartForm,
                "building": selectedBuildings,
                "variable": 'Killowatts/Hr'
            };
            Block.update(update_block_data)
                .success(function() {
                    $location.path('/blocks');
                });
        }
	});