/*Mambati custom app script file*/

var mambatiFrameworkShell = angular.module('mambatiFrameworkShell', ['mam.routing.engine', 'uiMicrokernel', 'ngMaterial', 'ngAnimate', 'ngTouch', 'gridster', 'ksSwiper', 'mambatiDirectives', 'mambatiRenderingEngine', 'dwShellCommonFilters', 'vAccordion', 'widget', 'shellDirectives', 'perfect_scrollbar', 'angular-click-outside', 'cloudcharge', 'ngMessages', 'cc.app.invoice']);


mambatiFrameworkShell.run(['$state', '$rootScope', function ($state, $rootScope) {
    $rootScope.$state = $state;
    console.log($rootScope.$state);
}]);

mambatiFrameworkShell.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('light-blue')
        .accentPalette('blue-grey');
});


mambatiFrameworkShell.config(['$stateProvider', '$futureStateProvider', '$stickyStateProvider', function ($sp, $fsp, $ssp) {
    // var allApps;
    // var fetchedCustomAppStates = [];

    $sp
    //---------------------- dock state -----------------------------------------------------
        .state('dock', {
            url: '/dock',
            sticky: true,
            templateUrl: 'partials/frameworktemplates/duoworld-framework.dock.html',
            controller: 'duoworld-framework-shell-dock-ctrl'
        })
        //---------------------- launcher state (parent to all below states) --------------------
        .state('launcher', {
            url: '/launcher',
            sticky: true,
            templateUrl: 'partials/frameworktemplates/duoworld-framework.launcher.html',
            controller: 'duoworld-framework-shell-launcher-ctrl'
        })
        //---------------------- launcher default app states (child to launcher state) ----------
        .state('launcher.marketplace', {
            url: '/marketplace',
            sticky: true,
            views: {
                'marketplace': {
                    templateUrl: 'partials/frameworktemplates/duoworld-framework.launcher.marketplace.html',
                    controller: 'duoworld-framework-shell-launcher-marketplace-ctrl'
                }
            }
        })
        .state('launcher.userprofile', {
            url: '/userprofile',
            sticky: true,
            views: {
                'userprofile': {
                    templateUrl: 'partials/frameworktemplates/duoworld-framework.launcher.userprofile.html',
                    controller: 'duoworld-framework-shell-launcher-userprofile-ctrl'
                }
            }
        })
        .state('launcher.tennantexplorer', {
            url: '/tennantexplorer',
            sticky: true,
            views: {
                'tennantexplorer': {
                    templateUrl: 'partials/frameworktemplates/duoworld-framework.launcher.tennantexplorer.html'
                }
            }
            //controller:'duoworld-framework-shell-launcher-tennantexplorer-ctrl'
        })
        .state('launcher.shellsettings', {
            url: '/settings',
            sticky: true,
            views: {
                'shellsettings': {
                    templateUrl: 'partials/frameworktemplates/duoworld-framework.launcher.shellsettings.html',
                    controller: 'duoworld-framework-shell-launcher-settings-ctrl'
                }
            }
            //controller:'duoworld-framework-shell-launcher-settings-ctrl'
        });

    //    .state('launcher.customapp', {
    //        url: '/customapp/:childAppID/:childAppName',
    //        sticky: true,
    //        views: {
    //            'customapp': {
    //                templateUrl: 'partials/frameworktemplates/duoworld-framework.launcher.customapps.html',
    //                controller: 'duoworld-framework-shell-launcher-customapps-ctrl'
    //            }
    //        }
    //    })

    // .state('launcher.product', {
    //     //url: '/customapp/:childAppID/:childAppName',
    //     url: '/customapp/product/Products',
    //     sticky: true,
    //     views: {
    //         'product': {
    //             templateUrl: 'partials/frameworktemplates/duoworld-framework.launcher.product.html',
    //             controller: 'duoworld-framework-shell-launcher-customapps-ctrl'
    //         }
    //     }
    // })

    // .state('launcher.profile', {
    //     //url: '/customapp/:childAppID/:childAppName',
    //     url: '/customapp/profile/Profile',
    //     sticky: true,
    //     views: {
    //         'profile': {
    //             templateUrl: 'partials/frameworktemplates/duoworld-framework.launcher.profile.html',
    //             controller: 'duoworld-framework-shell-launcher-customapps-ctrl'
    //         }
    //     }
    // })

    // .state('launcher.inventory', {
    //     //url: '/customapp/:childAppID/:childAppName',
    //     url: '/customapp/inventory/Inventory',
    //     sticky: true,
    //     views: {
    //         'inventory': {
    //             templateUrl: 'partials/frameworktemplates/duoworld-framework.launcher.inventory.html',
    //             controller: 'duoworld-framework-shell-launcher-customapps-ctrl'
    //         }
    //     }
    // })

    // .state('launcher.settings', {
    //     //url: '/customapp/:childAppID/:childAppName',
    //     url: '/customapp/settings/Settings',
    //     sticky: true,
    //     views: {
    //         'settings': {
    //             templateUrl: 'partials/frameworktemplates/duoworld-framework.launcher.settings.html',
    //             controller: 'duoworld-framework-shell-launcher-customapps-ctrl'
    //         }
    //     }
    // })

    // .state('launcher.invoice', {
    //     //url: '/customapp/:childAppID/:childAppName',
    //     url: '/customapp/invoice/Invoice',
    //     sticky: true,
    //     views: {
    //         'invoice': {
    //             templateUrl: 'partials/frameworktemplates/duoworld-framework.launcher.invoice.html',
    //             controller: 'duoworld-framework-shell-launcher-customapps-ctrl'
    //         }
    //     }
    // })

    // .state('launcher.promotion', {
    //     //url: '/customapp/:childAppID/:childAppName',
    //     url: '/customapp/promotion/Promotion',
    //     sticky: true,
    //     views: {
    //         'promotion': {
    //             templateUrl: 'partials/frameworktemplates/duoworld-framework.launcher.promotion.html',
    //             controller: 'duoworld-framework-shell-launcher-customapps-ctrl'
    //         }
    //     }
    // })

    // .state('launcher.payment', {
    //     //url: '/customapp/:childAppID/:childAppName',
    //     url: '/customapp/payment/Payment',
    //     sticky: true,
    //     views: {
    //         'payment': {
    //             templateUrl: 'partials/frameworktemplates/duoworld-framework.launcher.payment.html',
    //             controller: 'duoworld-framework-shell-launcher-customapps-ctrl'
    //         }
    //     }
    // })

    // .state('launcher.360', {
    //     //url: '/customapp/:childAppID/:childAppName',
    //     url: '/customapp/360/360',
    //     sticky: true,
    //     views: {
    //         '360': {
    //             templateUrl: 'partials/frameworktemplates/duoworld-framework.launcher.360.html',
    //             controller: 'duoworld-framework-shell-launcher-customapps-ctrl'
    //         }
    //     }
    // })

    // .state('launcher.useradmin', {
    //     //url: '/customapp/:childAppID/:childAppName',
    //     url: '/customapp/useradmin/User Administration',
    //     sticky: true,
    //     views: {
    //         'useradmin': {
    //             templateUrl: 'partials/frameworktemplates/duoworld-framework.launcher.useradmin.html',
    //             controller: 'duoworld-framework-shell-launcher-customapps-ctrl'
    //         }
    //     }
    // });
    // var providerAppRetrivel = function(){
    //  appProvider.$get().onAppsRetrieved(function(e,data){
    //      for(appIndex in data.apps){
    //          var tempObject = {};
    //          var tempObject1 = {};
    //          var tempObject2 = {};
    //          //fetchedCustomAppStates.push({"name":""+data.apps[appIndex].Name+"","url":"/"+data.apps[appIndex].ApplicationID+"","sticky":true,"views":{"data.apps[appIndex].Name": {"templateUrl":"partials/frameworktemplates/duoworld-framework.launcher.customapps.html","controller":"duoworld-framework-shell-launcher-customapps-ctrl"}}});
    //          tempObject["name"] = "launcher."+data.apps[appIndex].ApplicationID+"";
    //          tempObject["url"] = "/"+data.apps[appIndex].ApplicationID+"";
    //          tempObject["sticky"] = true;
    //          tempObject2["template"] = "<div style='position:relative; width:100%; height:100%; background:red;'><h1>"+data.apps[appIndex].Name+"</h1></div>";
    //          tempObject1["APP_Election_Results_Submission"] = tempObject2;
    //          tempObject["views"] = tempObject1;
    //          fetchedCustomAppStates.push(tempObject);
    //      }
    //      allApps = data.apps;
    //      console.log(fetchedCustomAppStates);
    //  });

    //  appProvider.$get().getAppsForUser();

    //  console.log(allApps);
    // }

    // providerAppRetrivel();

    // var futureStateResolve = function(){
    //  return angular.forEach(fetchedCustomAppStates, function(state) {
    //         $sp.state(state);
    //     })
    // }

    $ssp.enableDebug(true);
    console.log($ssp);
    //$fsp.addResolve(futureStateResolve);

}]);
