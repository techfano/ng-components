'use strict';

define(['app'], function (app) {


    app.register.controller('ngalertController', ['$scope', '$rootScope', '$location', '$q', function ($scope, $rootScope, $location, $q) {        

        

        $scope.alert={
          message:'Not Found',
          type:'info',
          show:true,
          hide:{auto:false,click:true,time:0}
        }



        $scope.warning=function(){
        	 $scope.alert.type="warning";
        }

        $scope.error=function(){
        	$scope.alert.type="error";
        }

        $scope.new=function(){
        	$scope.alert.message="New Message";
        }

        $scope.time=function(){
        	$scope.alert.hide.auto=true;
        	$scope.alert.hide.time=5000;
        	alert('ocultando en 5 segundos');
        }

    }]);

    
});