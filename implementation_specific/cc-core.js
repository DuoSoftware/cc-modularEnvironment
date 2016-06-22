//cc-core.js

shellDirectives.directive('coreappContainer', ['$compile', '$state', '$timeout', function ($compile, $state, $timeout) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                routedAppName: "=routedappname",
                accentpalette: "=accentpalette",
                routedAppIconUri: "=routedappiconuri",
                position: "=position"
            },
            templateUrl: "partials/frameworktemplates/cc-custom-app-directive-template.html",
            link: function (scope, element) {
                var renderElement = "idRenderDiv";


                $("#" + renderElement).empty();

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
                    'transform-origin': scope.position.clientX + 'px ' + scope.position.clientY + 'px',
                });

                $timeout(function () {
                    mainAppContainer.css({
                        'transform': 'scale(1)',
                        'transform-origin': scope.position.clientX + 'px ' + scope.position.clientY + 'px',
                    });
                }, 300);

                $timeout(function () {
                    dwChildAppHeaderController.css({
                        'top': '0px',
                        'background': scope.accentpalette
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

                scope.hideHeaderControlBar = true;
                console.log("im running it again");
            },
            controller: 'duoworld-framework-shell-launcher-customapps-ctrl'
        }
}]);
