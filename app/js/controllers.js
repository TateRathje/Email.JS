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
			$scope.sentEmails.splice(0,0,$scope.composeEmail);
			$scope.composeEmail.date = new Date();
			$scope.composeEmail.from = "Me";
		};

		$scope.showComposePopup = function () {
			$scope.composeEmail = {};
			$scope.isComposePopupVisible = true;
		};

		$scope.closeComposePopup = function () {
			$scope.isComposePopupVisible = false;
		};

		// Forward Email

		$scope.forward = function() {
			$scope.isPopupVisible = false;
			$scope.composeEmail = {};
			angular.copy($scope.selectedEmail, $scope.composeEmail);
			$scope.composeEmail.body =
				"\n----------------------\n"
				+ "from: " + $scope.composeEmail.from + "\n"
				+ "sent: " + $scope.composeEmail.date + "\n"
				+ "to: "   +                            "\n"
				+ "subject: " + $scope.composeEmail.subject + "\n"
				+ $scope.composeEmail.body;
		  $scope.composeEmail.subject = "FW: " + $scope.composeEmail.subject;
		  $scope.composeEmail.from = "me";
		  $scope.isComposePopupVisible = true;
		};

		// Reply Email

		$scope.reply = function() {
			$scope.isPopupVisible = false;
			$scope.composeEmail = {};
			angular.copy($scope.selectedEmail, $scope.composeEmail);
			$scope.composeEmail.body =
				"\n----------------------\n"
				+ "from: " + $scope.composeEmail.from + "\n"
				+ "sent: " + $scope.composeEmail.date + "\n"
				+ "to: " + $scope.composeEmail.to + "\n"
				+ "subject: " + $scope.composeEmail.subject + "\n"
				+ $scope.composeEmail.body;
		  $scope.composeEmail.subject = "RE: " + $scope.composeEmail.subject;
		  $scope.composeEmail.to = $scope.composeEmail.from;
		  $scope.composeEmail.from = "me";
		  $scope.isComposePopupVisible = true;
		};

		// Static Emails


		$scope.emails = [
					{ 
						to: 'me',
						from: 'John', 
						subject: 'I love angular', 
						date: 'Jan 1', 
						body: 'hello world'
					},
					{ 
						to: 'me',
						from: 'Jack', 
						subject: 'Angular and I are just friends', 
						date: 'Fed 15',
						body: 'just kidding' 
					},
					{ 
						to: 'me',
						from: 'Ember', 
						subject: 'I hate you Angular', 
						date: 'Dec 8',
						body: 'wassup dude'
					}
						];
	})