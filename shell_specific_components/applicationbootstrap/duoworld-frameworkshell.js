/*Mambati custom app script file*/

angular.module('mambatiFrameworkShell', [
        //global modules (don't modify) --

        'mam.routing.engine', 
        'uiMicrokernel', 
        'ngMaterial', 
        'ngAnimate', 
        'ngTouch', 
        'gridster', 
        'ksSwiper', 
        'mambatiDirectives', 
        'mambatiRenderingEngine', 
        'dwShellCommonFilters', 
        'vAccordion', 
        'widget', 
        'shellDirectives', 
        'perfect_scrollbar', 
        'angular-click-outside',
        'ngMessages',

        //implementation specific modules --

        'cloudcharge',

        //implementation specific core app modules --
        'cc.app.invoice'
    ]);
