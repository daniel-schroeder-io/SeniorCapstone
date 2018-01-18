// js/services/user_service.js
angular.module('userService', [])

// super simple service
// each function returns a promise object
    .factory('UserName', function($http) {
        return {
            get : function() {
                return $http.get('/api/google_user');
            }
        }
    });