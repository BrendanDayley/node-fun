var app = angular.module('TextSupport', ['ui.router', 'firebase']);

app.constant('fb', {
	url: 'https://brendan-textsupport.firebaseio.com/'
})

app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
	'use strict';

	$urlRouterProvider.otherwise('/home');

	$stateProvider

	// HOME STATES AND VIEWS
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html',
			controller: 'homeController',
		})
		//		.state('home.accomplishments', {
		//			//			url: 'newsFeed',
		//			templateUrl: 'views/accomplishments.html',
		//			controller: 'homeController',
		//		})
		//		.state('home.workHistory', {
		//			templateUrl: 'views/workHistory.html',
		//			controller: 'homeController',
		//		})
		//		 ABOUT PAGE AND VIEWS
		.state('support', {
			url: '/support',
			templateUrl: 'views/support.html',
			controller: 'supportController',
		})
		//		.state('mission', {
		//			url: '/mission',
		//			templateUrl: 'views/mission.html',
		//			controller: 'missionController',
		//		})
});
