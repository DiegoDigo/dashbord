'use strict';

angular.module('app').service('DashboardService', DashboardService);

DashboardService.$inject = [];

function DashboardService() {

    var vim = this;
    
    vim.testePrds = {
      'prds' : ['Maquiagem','Escova','Progressiva', 'Corte', 'Manicure'],      
      'dados' : [11,65,25,55,65]
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

    vim.getPrds = function(){
        return vim.testePrds;
    }

    vim.getGastos = function(){
        return vim.testeGastos;
    }


 }
