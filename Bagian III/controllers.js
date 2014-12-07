var myApp = angular.module("myApp", []);
myApp.controller("controller",
                    function controller($scope) {
                        $scope.dataKaryawan = {
                            'nama' : 'Nunung',
                            'jabatan' : 'Jabat Tangan',
                            'usia' : '1000 Tahun'
                        }
                    }
                )