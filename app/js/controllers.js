angular.module('myApp.controllers', [])

	.controller('EmailCtrl', function($scope) {
		$scope.isPopupVisible = false;
		$scope.isComposePopupVisible = false;
		$scope.composeEmail = {};
		$scope.activeTab = "inbox";
		$scope.sentEmails = [];

		// Email Popup Controlles
		
		$scope.showPopup = function (email) {
			$scope.isPopupVisible = true;
			$scope.selectedEmail = email;
		};

		$scope.closePopup = function () {
			$scope.isPopupVisible = false;
		};

		// Compose Popup Controlles

		$scope.sendEmail = function() {
			$scope.isComposePopupVisible = false;
			$scope.sentEmails.push($scope.composeEmail);
		};

		$scope.showComposePopup = function () {
			$scope.composeEmail = {};
			$scope.isComposePopupVisible = true;
		};

		$scope.closeComposePopup = function () {
			$scope.isComposePopupVisible = false;
		};

		$scope.emails = [
					{ 
						from: 'John', 
						subject: 'I love angular', 
						date: 'Jan 1', 
						body: 'hello world'
					},
					{ 
						from: 'Jack', 
						subject: 'Angular and I are just friends', 
						date: 'Fed 15',
						body: 'just kidding' 
					},
					{ 
						from: 'Ember', 
						subject: 'I hate you Angular', 
						date: 'Dec 8',
						body: 'wassup dude'
					}
						];
	})