/**
 * Author - Sahan Elvitigala
 * User Data Services
 */
app.factory("UsersData", ['$http', '$location', function ($http, $q, $location) {

    var serviceBase = 'json/';

    var obj = {};

    obj.get = function (q) {
        return $http.get(serviceBase + q + '.json').then(function (results) {
            return results.data;
        });
    };

    return obj;
}]);
