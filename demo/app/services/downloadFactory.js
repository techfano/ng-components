'use strict';

define(['app'], function (app) {


    var addModal = function(){
        var code = '';
        code +='<div id="modalDownloadForce" class="modal hide">';
        code +='<div class="modal-header">';
        code +='<button type="button" class="close" data-dismiss="modal"><i></i>&times;</button>';
        code +='<h3>Descarga</h3>';
        code +='</div>';
        code +='<div class="modal-body">';
        code +='<div style="background:url(static/img/preload-64x64.gif) 50% 50% no-repeat;width:64px;height:64px;margin:0 auto;"></div>';
        code +='<p></p>';
        code +='</div>';
        code +='</div>';
        $('body').prepend(code);
        $('#modalDownloadForce').modal('show');
    };

    var removeModal = function(){
        $('body>#modalDownloadForce').remove();
    };


    app.factory('downloadFactory',function(){

        return {

         forceDownloadBasic : function(url){

            removeModal();

            addModal();

            $.fileDownload(url)
            .done(function () { 
               $('#modalDownloadForce').modal('hide');
               removeModal();
           })
            .fail(function () {
                $('body>#modalDownloadForce>.modal-body>div').remove();
                $('body>#modalDownloadForce>.modal-body>p').text('Hubo un problema al generar el reporte, por favor inténtelo de nuevo.');
            });
        },

        forceDownloadPost :function(url,parametros){
            console.log(url,parametros,'iiiiii');
            removeModal();

            addModal();

            $.fileDownload(url, {
                httpMethod: "POST",
                data: parametros
            })
            .done(function () { 
               $('#modalDownloadForce').modal('hide');
               removeModal();
           })
            .fail(function () {
                $('body>#modalDownloadForce>.modal-body>div').remove();
                $('body>#modalDownloadForce>.modal-body>p').text('Hubo un problema al generar el reporte, por favor inténtelo de nuevo.');
            });
        }

    };
});

});