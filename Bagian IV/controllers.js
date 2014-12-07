var myApp = angular.module("myApp", []);
myApp.controller("controller",
                    function controller($scope) {
                        $scope.meal = {
                            'breakfast' : 'Orange Juice',
                            'lunch' : 'Fruit Salad',
                            'dinner' : 'Vegetable Rice'
                        }
                    }
                )