'use strict';

angular.module('app').controller('DashboardController', DashboardController);

DashboardController.$inject = ['DashboardService', '$scope'];

function DashboardController(DashboardService,$scope) {

    var vim = this;

    vim.gastos = DashboardService.getGastos();
    vim.comandas = DashboardService.getComandas();
    vim.prds = DashboardService.getPrds();


    $scope.colors = ['#45b7cd'];
    $scope.labels = vim.gastos.dias;
    $scope.series = vim.gastos.mes;
    $scope.data = vim.gastos.dados;

    
    $scope.colors_comanda = ['#45b7cd', '#A5D6A7', '#DCDCDC'];
    $scope.labels_comanda = vim.comandas.dias;    
    $scope.data_comanda = vim.comandas.dados;
    $scope.options_comanda = {legend: {display:'true', position:'right'}};

    
    $scope.series_prd = vim.prds.prds;    
    $scope.data_prd = vim.prds.dados;


    $scope.labels_prd =  vim.prds.prds;    
    $scope.data_prd = vim.prds.dados;
    
 }



 