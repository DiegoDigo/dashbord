'use strict';

angular.module('app').controller('DashboardController', DashboardController);

DashboardController.$inject = ['DashboardService'];

function DashboardController(DashboardService) {
    var vim = this;
    vim.nome = {
        'nome':'diego'
    };   

    alert(DashboardService.getDados("teste"));
 
 }
 