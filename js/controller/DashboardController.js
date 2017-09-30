'use strict';

angular.module('app').controller('DashboardController', DashboardController);

DashboardController.$inject = ['DashboardService', '$scope'];

function DashboardController(DashboardService,$scope) {

    var vim = this;

    vim.mesAtual = DashboardService.getMesAtual();
    vim.mesAnterior = DashboardService.getMesAnterior();
    vim.Comparativo = DashboardService.getComparativo();

    console.log(vim.mesAtual);
    console.log(vim.mesAnterior);
    console.log(vim.Comparativo);

    $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];
    $scope.labels = vim.Comparativo.dias;
    $scope.series = vim.Comparativo.mes;
    $scope.data = vim.Comparativo.dados;


    $scope.labels_mes_atual = vim.mesAtual.dias;
    $scope.series_mes_atual = vim.mesAtual.mes;
    $scope.data_mes_atual =  vim.mesAtual.dados;


    $scope.labels_mes_anterior = vim.mesAnterior.dias;
    $scope.series_mes_anterior = vim.mesAnterior.mes;
    $scope.data_mes_anterior = vim.mesAnterior.dados;
    

 }
