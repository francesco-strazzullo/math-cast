'use strict';

angular
  .module('math-cast', [
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {

      // For any unmatched url, redirect to /state1
      $urlRouterProvider.otherwise("/home");

      // Now set up the states
      $stateProvider
        .state('home', {
          url: "/home",
          controller: 'Home',
          templateUrl: "views/home.tpl.html"
        })
        .state('question0', {
          url: "/0",
          templateUrl: "views/question0.tpl.html"
        })
        .state('question1', {
          url: "/1",
          templateUrl: "views/question1.tpl.html"
        })
        .state('question2', {
          url: "/2",
          templateUrl: "views/question2.tpl.html"
        })
        .state('question3', {
          url: "/3",
          templateUrl: "views/question3.tpl.html"
        })
        .state('question4', {
          url: "/4",
          templateUrl: "views/question4.tpl.html"
        })
        .state('question5', {
          url: "/5",
          templateUrl: "views/question5.tpl.html"
        })
        .state('question6', {
          url: "/6",
          templateUrl: "views/question6.tpl.html"
        })
        .state('end', {
          url: "/end",
          templateUrl: "views/end.tpl.html"
        });
    }
  ]);
