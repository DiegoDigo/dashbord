'use strict';

angular.module('app').service('DashboardService', DashboardService);

DashboardService.$inject = [];

function DashboardService() {

    var vim = this;

    vim.getDados = function(teste){        
        return teste;
    }



 }
 