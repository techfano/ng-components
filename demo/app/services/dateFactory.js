'use strict';

define(['app'], function (app) {

    app.factory('dateFactory',function(){
       
        return {
            convertirDateTime: function(datetime,formato) {
                return  moment(datetime).format(formato);
            },
            convertirDate: function(midate,formato) {
                return  moment(midate).format(formato);
            },
            obtenerDate:function(midate){
                return  moment(midate);
            }
        };
    });

});