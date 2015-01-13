'use strict';

define(['app'], function (app) {


    app.register.controller('startController', ['$scope', '$rootScope', '$location', '$q', function ($scope, $rootScope, $location, $q) {             

   		$scope.enviar=function(){
   			alert($scope.datos)
   		}

    }]);

    
});