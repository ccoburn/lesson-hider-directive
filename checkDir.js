angular.module('directivePractice')
  .directive('checkBox', function() {

    return {
      restrict: 'A',
      link: function(scope, element, attributes) {
        element.on('click', function() {
          element.removeClass('line');

        })

      }
    }
  })
