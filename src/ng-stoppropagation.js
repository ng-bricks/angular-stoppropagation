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