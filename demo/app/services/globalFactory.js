'use strict';

define(['app'], function (app) {

    app.factory('globalFactory',function(){
       
        return {
            nombreClase : function () {
                return "";
            },
            determinarClaseCssSolicitudObtenida : function (numeroSolicitudObtenida) {
                var classSolicitudObtenida = '';
                if(numeroSolicitudObtenida==null){
                    classSolicitudObtenida = 'alert-error'; //Error
                }else{
                    classSolicitudObtenida = 'alert-success'; //Success
                }
                return classSolicitudObtenida;
            },
            preload : function(isShow){
                var isLoad = jQuery('body > #load-process');
                if(isLoad.size()>0){
                   isLoad.remove();
                }
                var htmlPreload = '<div id="load-process"></div>',
                body = jQuery('body');
                if(isShow){
                    body.append(htmlPreload); 
                }else{
                   jQuery('body #load-process').remove();
                }
           }
        }
    });

});