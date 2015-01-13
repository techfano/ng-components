require.config({
    urlArgs: 'v='+(new Date()).getTime()
});

require(
    [
        'app',
        'directives/ui/ngcomponents'
    ],
    function (app) {
        angular.bootstrap(document, ['appModule','ngcomponents']);

        $('#loading').remove();
	    $('#loading-mask').fadeOut('slow', function () {
	        $('#dashboard').fadeIn('slow');
	    });

        
	    
    });