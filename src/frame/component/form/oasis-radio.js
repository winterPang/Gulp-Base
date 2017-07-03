import angularAMD from 'angularAMD'
import 'css!./frame/component/form/less/form'

angularAMD.directive('oasisRadio', [function () {
  // let _osRadio = [];
  return {
    restrict: 'E',
    scope: {
      osModel: '=',
      osDisabled: '='
    },
    template: '<div class="oasis-radio"><label class="unchecked"></label><label ng-transclude></label></div>',
    replace: true,
    transclude: true,
    controller: function ($scope, $element, $attrs, $transclude) {
    },
    link: function ($scope, $element, $attr, controller) {
      var $ele = $($element.find('label')[0]);
      $scope.$watch('osModel', function (v) {
        if (v == $attr.value) {
          $ele.removeClass('unchecked').addClass('checked');
        } else {
          $ele.removeClass('checked').addClass('unchecked');
        }
      });
      $scope.$watch('osDisabled', function (v) {
        if (v) {
          $ele.unbind('click');
          $ele.addClass('disabled');
        } else {
          $ele.unbind('click').bind('click', function () {
            $scope.$apply(function () {
              $scope.osModel = $attr.value;
            });
          });
          $ele.removeClass('disabled');
        }
      }, true);
    }
  }
}])
