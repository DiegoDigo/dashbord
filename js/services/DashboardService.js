'use strict';

angular.module('app').service('DashboardService', DashboardService);

DashboardService.$inject = [];

function DashboardService() {

    var vim = this;
    
    vim.testeMesAtual = {
      'mes' : 'Fevereiro',
      'dias' : ['1','2','3','4','5','6','7','8','9','10','11','12'],
      'dados' : [11,65,23,45,33,4,23,45,67,34,55,99]
    }

    vim.testeComandas = {
      'mes' : 'Janeiro',
      'dias' : ['Comandas em Aberto','Comandas Fechadas', 'Comandas Pendente'],
      'dados' : [11,65,23]
    }

    vim.testeGastos = {
      'mes' : ['Gastos 2017'],
      'dias' : ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
      'dados' : [[65, 59, 80, 81, 56, 55, 40,2,5,98,40,89]]
    }


    vim.getComandas = function(){
        return vim.testeComandas;
    }

    vim.getMesAnterior = function(){
        return vim.testeMesAnterior;
    }

    vim.getGastos = function(){
        return vim.testeGastos;
    }


 }
