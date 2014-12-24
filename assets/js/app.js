var mySite = angular.module('mySite', ['ui.router']);
var ExperienceCtrl = function () {
    var vm = this;
    vm.list = [
        {
            company: 'Bilberry',
            position: 'Php developer',
            range: '2013-2014'
        },
        {
            company: 'Bilberry',
            position: 'Php developer',
            range: '2013-2014'
        },
        {
            company: 'Bilberry',
            position: 'Php developer',
            range: '2013-2014'
        },
        {
            company: 'Bilberry',
            position: 'Php developer',
            range: '2013-2014'
        },
        {
            company: 'Bilberry',
            position: 'Php developer',
            range: '2013-2014'
        },
        {
            company: 'Bilberry',
            position: 'Php developer',
            range: '2013-2014'
        },
    ];
}
var ContactCtrl = function () {
    var vm = this;
    vm.phone = '+38 066 230-33-66';
    vm.skype = 'bernackiy.name';
    vm.email = 'usualdesigner@gmail.com';
}
mySite.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "templates/home.html"
        })
        .state('experience', {
            url: "/experience",
            templateUrl: "templates/experience.html",
            controller: ExperienceCtrl,
            controllerAs: 'experience'
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "templates/contact.html",
            controller: ContactCtrl,
            controllerAs: 'contact'
        });
});