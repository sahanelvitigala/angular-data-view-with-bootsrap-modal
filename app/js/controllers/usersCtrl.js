/**
 * Author - Sahan Elvitigala
 * Users Controller
 */

app.controller('usersCtrl', function ($scope, UsersData,$modal,$state) {

    $scope.state =  $state.current;

    /**
     * get all users
     * @type {{}}
     */
    $scope.users = {};
    UsersData.get('people').then(function (data) {
        $scope.users = data;
        console.log(data);
    });


    /**
     * show details of one user
     * @type {{}}
     */
    $scope.user = {};
    UsersData.get('person').then(function (data) {
        $scope.user = data[0];
        console.log(data[0]);
    });


    /**
     * open modal
     */
    $scope.open = function (userId) {
        $state.go('users.show', { userId:userId });
    };

    /**
     * first time loading
     */
    $state.go('users');

});

