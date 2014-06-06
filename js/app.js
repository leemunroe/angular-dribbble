'use strict';

var app = angular.module('dabbble', ['dabbble.controllers','ngRoute','dabbble.services']);

app.config(function ($routeProvider){
  $routeProvider

  .when("/:list",{
    controller:"ShotsListCtrl",
    templateUrl:"partials/shots_list.html"
  })

  .when("/shot/:id",{
    controller:"ShotCtrl",
    templateUrl:"partials/shot.html"
  })

  .otherwise({redirectTo: "/popular"})
});