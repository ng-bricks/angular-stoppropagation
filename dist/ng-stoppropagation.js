/*!
 * ng-stoppropagation
 * By Pasella Antonello antonello.pasella@gmail.com 
 * https://github.com/ng-tricks/ng-stoppropagation.git
 * Version: 0.0.1 - 2015-10-30T09:50:31.245Z
 * License: MIT
 */


(function(){
  'use strict';
  angular.module('ng-tricks.ng-stoppropagation', [])
    .directive('ngStopPropagation', ngStopPropagation);

    function ngStopPropagation() {
      return {
        restrict: 'A',
        link : link
      };

      function link(scope, element, attrs) {
        element.bind('click', function(e) {
          e.stopeventpropagation();
        });
      }
    }

})();