angular.module('app', ['ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode({enabled:true, requireBase: false});

    $routeProvider.when('/', {templateUrl: '/partials/main/main', controller: 'd3MainCtrl'})
        .when('/charts/chart1/chart1', {templateUrl: '/partials/charts/chart1/chart1', controller: 'd3ChartsCtrl'});
});
