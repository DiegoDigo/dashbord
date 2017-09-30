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

    vim.testeMesAnterior = {
      'mes' : 'Janeiro',
      'dias' : ['1','2','3','4','5','6','7','8','9','10','11','12'],
      'dados' : [11,65,23,45,33,4,23,45,67,34,55,99]
    }


    vim.testeComparativo = {
      'mes' : ['2016', '2017'],
      'dias' : ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
      'dados' : [[65, 59, 80, 81, 56, 55, 40],[28, 48, 40, 19, 86, 27, 90]]
    }


    vim.getMesAtual = function(){
        return vim.testeMesAtual;
    }

    vim.getMesAnterior = function(){
        return vim.testeMesAnterior;
    }

    vim.getComparativo = function(){
        return vim.testeComparativo;
    }


 }
