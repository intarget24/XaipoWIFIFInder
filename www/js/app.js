/**
 * Created by Intarget on 03/09/2016.
 */
var navigation={};
var Myapp = {};
Myapp.config = {
};
window.onload = function() {
    navigation.mainView = navigation.fw.addView('.view-main', {
        // Because we use fixed-through navbar we can enable dynamic navbar
        dynamicNavbar: true,
        domCache: true
    });
};

navigation.fw = new Framework7();
navigation.$$ = Dom7;

Myapp.angular = angular.module('UBWifiFinder', ['chart.js']);
Myapp.angular.controller('general', function ($scope, $http) {

    $scope.ayudaTitulo = "";
    $scope.ayudaDescripcion = "";
    $scope.ubicodeSession = "";

    $scope.fecha = "Hoy";
    $scope.title = "Redes disponibles";
    $scope.wifis = [];

    $scope.ScanWifi = function()
    {
        WifiWizard.startScan(function(){
            alert("start scan");
            $scope.title = "Escaneando";
        }, function(){
            $scope.title = "Fallo en el escaneo";
        });

        WifiWizard.getScanResults({numLevels: 0},

            function(networks){
                alert("GEtResults");
                networks.forEach(function(item){
                    alert(item.SSID);
                    wifis.push({ssid: item.SSID , pass: 'hola'});
                });
                $scope.$apply();

        }, function(err){

        });

        $scope.title = "Redes disponibles";
    }

    $scope.MenuSide= function(id)
    {
        switch(id)
        {
            case 1:
                navigation.mainView.router.load({pageName:'wifi'});
                break;
            case 2:
                navigation.mainView.router.load({pageName:'help'});
                break;
            case 3:
                navigation.mainView.router.load({pageName:'about'});
                break;
            case 4:
                navigator.app.exitApp();
                break;
        }
    }
});