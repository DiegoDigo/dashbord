'use strict';

angular.module('app').controller('DashboardController', DashboardController);

DashboardController.$inject = ['DashboardService', '$scope'];

function DashboardController(DashboardService,$scope) {

    var vim = this;
    vim.graf_anual_ano = undefined;
    vim.gastos = DashboardService.getGastos();
    vim.comandas = DashboardService.getComandas();
    vim.prds = DashboardService.getPrds();
    vim.anos = [2017,2018,2019];

    $scope.colors = ['#45b7cd'];
    $scope.labels = vim.gastos.dias;
    $scope.series = vim.gastos.mes;
    $scope.data = vim.gastos.dados;

    vim.ano_atual = new Date();
    vim.ano = vim.ano_atual.getFullYear();

    $scope.colors_comanda = ['#45b7cd', '#A5D6A7', '#DCDCDC'];
    $scope.labels_comanda = vim.comandas.dias;    
    $scope.data_comanda = vim.comandas.dados;
    $scope.options_comanda = {legend: {display:'true', position:'bottom'}};

    
    $scope.series_prd = vim.prds.prds;    
    $scope.data_prd = vim.prds.dados;


    $scope.labels_prd =  vim.prds.prds;    
    $scope.data_prd = vim.prds.dados;    

    vim.verComandas = function (points, evt) {
        alert(points[0]._model.label);
        
    }

    vim.validar = function(){
        alert(vim.graf_anual_ano, vim.ano);
        
    }


 }



 