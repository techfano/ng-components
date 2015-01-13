'use strict';

define(['services/routeResolver'], function () {

    var app = angular.module('appModule', ['routeResolverServices']);

    app.config(['$routeProvider', 'routeResolverProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ($routeProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {


            app.register =
            {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

            var route = routeResolverProvider.route;

            $.each(urls, function (key, val) {
                var alias = val.alias;
                $routeProvider.when('/' + alias, route.resolve(alias));
            });
            $routeProvider.otherwise({ redirectTo: '/start' });
     }]);

     app.controller('appController', function ($scope, $rootScope) {

        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            console.log('inicio: ', event);
        });

        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            console.log('completo: ', event);

            $('a .link').click(function (e) {
                e.preventDefault();
            });

        });
    });

    return app;
});