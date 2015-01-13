'use strict';

define(['app'], function (app) {

    app.factory('cookiesFactory',['$cookieStore',function($cookieStore){
        var c = $cookieStore;
        return {
            agregar: function(key,val) {
                c.put(key,val);
            },
            obtener:function(key){
                return c.get(key);                
            },
            eliminar:function(key){
                c.remove(key);
            }
        };
    }]);

});