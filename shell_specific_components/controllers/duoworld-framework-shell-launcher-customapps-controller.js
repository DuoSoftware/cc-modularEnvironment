//duoworld-framework-shell-launcher-customapps-controller.js

(function () {

    var duoworldFrameworkShellLauncherCustomappsCtrl = function ($scope, $state, $stateParams, $rootScope, $presence, $auth, $apps, $helpers, $timeout, $mdDialog) {

        console.log('hello from custom app controller !'); //this should only execute once !

        $scope.defaultClassView = true;
        $scope.routedAppId = $rootScope.opendAppID;
        $scope.routedAppName = $rootScope.opendAppName;
        $scope.routedAppIconUri = $rootScope.opendAppIconUrl;
        $scope.position = $rootScope.openedAppPosition;
        //console.log($state);

        var renderElement = "idRenderDiv";
        var dwChildAppHeaderController = angular.element('#dw-child-application-header-control-bar');
        var dwChildAppSplashCover = angular.element('.dw-childapp-backgroundcover');
        var dwChildAppContainer = angular.element('.customeAppContainer');
        var dwChildAppSplashLogo = angular.element('.dw-childapp-splash-logo');
        var dwChildAppSplashText = angular.element('.dw-childapp-splash-title');
        var dwChildAppSplashLoadingSpinner = angular.element('.dw-childapp-splash-loadingspinner');
        var dwChildAppSplashLoadingTextIndicator = angular.element('.dw-childapp-splash-loadingtextindicator');
        var dwChildAppHeaderInfomationTitle = angular.element('.dw-child-application-header-control-bar-left-section span');
        var dwChildAppHeaderInfomationIcon = angular.element('.dw-child-application-header-control-bar-left-section img');
        var dwChildAppSaveButton = angular.element('.dw-child-app-saveButton');
        var mainAppContainer = angular.element('.md-child-application-container');

        mainAppContainer.css({
            'transform': 'scale(0)',
            'transform-origin': $scope.position.clientX + 'px ' + $scope.position.clientY + 'px',
        });

        $timeout(function () {
            mainAppContainer.css({
                'transform': 'scale(1)',
                'transform-origin': $scope.position.clientX + 'px ' + $scope.position.clientY + 'px',
            });
        }, 300);

        $timeout(function () {
            dwChildAppHeaderController.css({
                'top': '0px',
                'background': $scope.accentpalette
            })
        }, 1000);

        $timeout(function () {
            dwChildAppSplashLogo.css('bottom', '0px');
        }, 1300);

        $timeout(function () {
            dwChildAppSplashText.css('top', '0px');
        }, 1500);

        $timeout(function () {
            dwChildAppSplashLoadingSpinner.css('top', '0px');
        }, 1700);

        $timeout(function () {
            dwChildAppSplashLoadingTextIndicator.css('top', '0px');
        }, 1800);


        $timeout(function () {
            dwChildAppSplashLoadingSpinner.css('top', '-400px');
            dwChildAppSplashLoadingTextIndicator.css('top', '-400px');
        }, 4500);

        $timeout(function () {
            dwChildAppSplashText.css('top', '-400px');
        }, 4800);

        $timeout(function () {
            dwChildAppSplashLogo.css('bottom', '-150px');
        }, 5000);

        $timeout(function () {
            dwChildAppSplashCover.css('height', '300px');
        }, 5200);

        $timeout(function () {
            dwChildAppHeaderInfomationTitle.css('top', '0px');
            dwChildAppHeaderInfomationIcon.css('top', '0px');
        }, 5200);

        $timeout(function () {
            dwChildAppContainer.css({
                'opacity': 1,
                'z-index': 1,
                'top': '0px'
            });
        }, 5200);

        $timeout(function () {
            dwChildAppSaveButton.css('z-index', '1');
        }, 5200);

        $scope.hideHeaderControlBar = true;
        console.log("im running it again");

        $apps.onAppOpened(function (e, data) {
            $scope.runningApp = data;
        });

        $apps.onAppClosed(function (e, data) {
            if (!data.instance.isChild()) {
                $window.history.back();
            }

        });

        //        $apps.execute($scope, renderElement, $scope.routedAppId, function (message) {
        //            alert(message);
        //        });
        var dwChildAppContainer = angular.element('.customeAppContainer');

        $scope.childApplicationClose = function () {
            var mainAppContainer = angular.element('.md-child-application-container');
            $rootScope.removeFromRunningApp(window.location.hash);
            mainAppContainer.css({
                'transform': 'scale(0)',
                'opacity': '0',
                'transform-origin': $rootScope.openedAppPosition.clientX + 'px ' + $rootScope.openedAppPosition.clientY + 'px',
            });

            $timeout(function () {
                $state.go('dock');
            }, 50);
        };
        $scope.childApplicationMinimise = function () {
            $rootScope.addToRunningApp($scope.routedAppName, $scope.routedAppIconUri);
            $state.go('dock');
        };

        $scope.keepTitleBar = true;
        $scope.childApplicationTitleBarpin = function () {
            $scope.keepTitleBar = !$scope.keepTitleBar;
        };
    };

    duoworldFrameworkShellLauncherCustomappsCtrl.$inject = ['$scope', '$state', '$stateParams', '$rootScope', '$presence', '$auth', '$apps', '$helpers', '$timeout', '$mdDialog'];

    angular
        .module('mambatiFrameworkShell')
        .controller('duoworld-framework-shell-launcher-customapps-ctrl', duoworldFrameworkShellLauncherCustomappsCtrl);
})();
