/*invoice application main.js file*/

//module setter
angular
	.module('cc.app.invoice', [
		//add the mamabati routing engine as a dependency in your module so that you can persist states and access future states.
		'mam.routing.engine'
	]);

//module getterm
angular
	.module('cc.app.invoice')
	.config(['$stateProvider', '$futureStateProvider', '$stickyStateProvider', invoiceConfig])
	.controller('cc-app-invoice-controller',['$rootScope','$state', '$http', '$location', '$mdDialog', '$mdToast',invoiceController]);

//named function (use named functions instead of passing anonymous function)

function invoiceConfig($sp,$fsp,$ssp){
	$sp
	.state('launcher.invoice', {
        url: '/invoice',
        sticky: true,
        views: {
            'invoice': {
                templateUrl: 'coreApplications/invoice-app/cc-app-invoice.html',
                //use controller as syntax so that context is maintained and interpollation issues are reduced.
                controller: 'cc-app-invoice-controller as invoice'
            }
        }
    })
    .state('launcher.invoice.listview',{
    	url: '/list',
    	views: {
    		'invoice-list': {
    			templateUrl: 'coreApplications/invoice-app/app-views/list-view.html'
    		} 
    	}
    })
    .state('launcher.invoice.detailview',{
    	url: '/detail',
    	sticky: true,
    	views: {
    		'invoice-detail': {
    			templateUrl: 'coreApplications/invoice-app/app-views/detail-view.html'
    		} 
    	}
    });
};

function invoiceController($rootScope, $state, $http, $location, $mdDialog, $mdToast){
	this.welcomeMsg = "This is the invoice welcome message you are viewing !"
			.childview1Msg = "This message is from list view of the invoice app !"
				.childview2Msg = "This message is from detail view of the invoice app !";

};

// angular
// 	.module('cc-app-invoice')
// 	.controller('cc-app-invoice-controller',['$rootScope','$state', '$http', '$location', '$mdDialog', '$mdToast',invoiceController]);

//manualy inject dependancy refences to you named functions, so that the referances are not lost in the minfication process.
// invoiceController.$inject = ['$rootScope','$state', '$http', '$location', '$mdDialog', '$mdToast'];







