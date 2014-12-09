var myApp = angular.module("myApp", []);
myApp.controller(
        "controller", 
        [   
            '$scope',
            '$http',
            function($scope, $http) {
                $http.get('js/data.json').success (function(data){
                    $scope.dataKaryawan = data;
                    $scope.orderKaryawan = 'name';
                });
            }
        ]
);