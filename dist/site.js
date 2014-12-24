var mySite = angular.module('mySite', ['ui.router']);

mySite.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider

        .state('home', {
            url: "/home",
            templateUrl: "templates/home.html"
        })

        .state('contact', {
            url: "/contact",
            templateUrl: "templates/contact.html"
        });

});