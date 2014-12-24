var mySite = angular.module('mySite', ['ui.router']);
var ExperienceCtrl = function () {
    var vm = this;
    vm.list = [
        {
            company: 'Bilberry Software',
            position: 'Php developer',
            range: '2013 – настоящее время'
        },
        {
            company: 'MosaicMedia',
            position: 'php-программист',
            range: '2012 – 2013 гг.'
        },
        {
            company: 'ООО Ковчег',
            position: 'php программист',
            range: '2011 – 2012 гг.'
        },
        {
            company: 'частный предприниматель',
            position: 'php-программист',
            range: '2009 – 2011 гг.'
        },
        {
            company: 'ЧП «БМТ-Стиль»',
            position: 'системный администратор',
            range: '2008 г.'
        },
        {
            company: 'ТОВ «Wanted Group»',
            position: 'Web developer',
            range: '2007-2008 гг.'
        },
        {
            company: 'ТОВ «Ukrainian Journal»',
            position: 'системный администратор',
            range: '2007 г.'
        },
        {
            company: 'Компания «КиевНЕТ»',
            position: 'Инженер',
            range: '2006 г.'
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
    $urlRouterProvider.otherwise("/about");
    $stateProvider
        .state('about', {
            url: "/about",
            templateUrl: "templates/about.html"
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