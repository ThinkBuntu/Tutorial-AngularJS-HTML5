var myApp = angular.module("myApp", []);
myApp.controller("controller",
function controller($scope) {
    $scope.dataKaryawan = [
                        {
                            "name" 	 : "1. Nunung",
                            "jabatan": "Jabat Tangan.",
                            "usia"	 :  "1000 Tahun"
                        },
                        {
                            "name" 	 : "2. Pamungkas",
                            "jabatan": "Jabat Kaki.",
                            "usia"	 :  "101 Dalmation"
                        },
                        {
                            "name" 	 : "3. Jayuda",
                            "jabatan": "Jabat Hati.",
                            "usia"	 :  "1 Hari"
                        }
                    ]

}
);