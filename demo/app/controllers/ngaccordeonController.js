'use strict';

define(['app'], function (app) {


    app.register.controller('ngaccordeonController', ['$scope', '$rootScope', '$location', '$q', function ($scope, $rootScope, $location, $q) {             

      $scope.parametros={
          appId:"12345",
          numeroPagina:1,
          numeroRegistros:20,
      }

      $scope.citasConfig={
        tramites:{
          theads:[{title:'N° de Trámite',center:true},
                {title:'Estado'},
                {title:'Sección'},
                {title:'Tipo Trámite', center:true},
                {title:'Nombre Titular'},
                {title:'Fecha de Solicitud'}],
          icons:[
            {name:'Ver Detalle',
            class:'icon-scytl-search',
            action:function(row){
              alert('Ver '+JSON.stringify(row));
            }
          }],
          data:[{
                  "id": "00000000001",
                  "Estado": "Recibido",
                  "Seccion": "Digitacion",
                  "tipo_tramite": "Nacimiento",
                  "nombre_titular": "Diego Perez Perez ",
                  "fecha_solicitud": "2014-03-19"
                },
                {
                  "id": "00000000002",
                  "Estado": "Recibido",
                  "Seccion": "Digitacion",
                  "tipo_tramite": "Nacimiento",
                  "nombre_titular": "Diego Perez Perez ",
                  "fecha_solicitud": "2014-03-19"
                }]
        }
      }


    }]);

    
});