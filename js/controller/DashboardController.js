'use strict';

angular.module('app').controller('DashboardController', DashboardController);

DashboardController.$inject = ['DashboardService', '$scope'];

function DashboardController(DashboardService,$scope) {

    var vim = this;
    var months = [];     
    var monthNames = [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ];
    vim.graf_anual_ano = undefined;
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
    $scope.options_comanda = {legend: {display:'true', position:'bottom'}};

    
    $scope.series_prd = vim.prds.prds;    
    $scope.data_prd = vim.prds.dados;
 
    vim.selected = vim.ano;

    $scope.labels_prd =  vim.prds.prds;    
    $scope.data_prd = vim.prds.dados;    

    vim.verComandas = function (points, evt) {
        alert(points[0]._model.label);
        
    }

    vim.validarMesComanda= function(teste) {
        console.log(teste);
    }

    vim.validarMesServico = function(teste){
        console.log(months.indexOf(teste) + 1);
    }

    vim.validar = function(teste){        
        console.log(teste);
    }  
    
    var meses = function(){
        for (var i = 0; i < 12; i++){
            months.push(monthNames[i]);
        }    
        $scope.meses = months;
        $scope.monthComandaSelected = months[new Date().getMonth()];
        $scope.monthServicoSelected = months[new Date().getMonth()];
    }        

    var init = function(){
        meses();
    }

    init();
 }



 