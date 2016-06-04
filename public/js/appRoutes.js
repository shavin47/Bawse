'use strict'; 

angular
	.module('')
	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
		
		 $urlRouterProvider.otherwise('/');		 
		 
		 $stateProvider
		 
		 .state('', {
			 url: '/',
			 templateUrl: ''
		 })
		 
		 $locationProvider.html5Mode({
			  enabled: true,
			  requireBase: false
		 });

	}).
	run(function($rootScope) {
		
	});
