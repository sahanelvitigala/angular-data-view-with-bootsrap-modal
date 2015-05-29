/**
 * Author - Sahan Elvitigala
 * Main App JS
 */

var app = angular.module('UserApp', ['ui.router','ui.bootstrap','ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    $urlRouterProvider
        .otherwise('/users');

    $stateProvider
        .state('users', {
            url: '/users',
            templateUrl: 'partials/users.html',
            controller: 'usersCtrl'
        })
        .state('users.show', {
            url: '/:userId',
            onEnter: function($stateParams, $state, $modal) {
                $modal.open({
                    templateUrl: 'partials/user.html',
                    resolve: {},
                    controller: function($scope, $state, UsersData) {
                        $scope.state = $state.current;
                        $scope.params = $stateParams;
                        console.log($stateParams);
                        console.log($state);

                        $scope.user = {};
                        UsersData.get('person').then(function (data) {
                            $scope.user = data[0];
                            console.log(data[0]);
                        });

                        $scope.ok = function () {
                            $scope.$close($scope.selected.item);
                        };

                        $scope.cancel = function () {
                            $scope.$dismiss('cancel');
                        };

                    }
                }).result.then(function (result) {
                        // $scope.$close
                        console.log('result ->' + result);
                    }, function (result) {
                        // $scope.$dismiss
                        console.log('dismiss ->' + result);
                    }).finally(function () {
                        // handle finally
                        return $state.transitionTo("users");
                    });
            }
        });


});
