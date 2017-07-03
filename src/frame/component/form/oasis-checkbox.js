import angularAMD from 'angularAMD'
import 'css!./frame/component/form/less/form'

let _linkFunc = ($scope, $element, $attr, controller) => {
  var $ele = $($element.find('label')[0]);
  $scope.$watch('osModel', function (v) {
    if (v.find((n) => {
        return n == $attr.value
      })) {
      $ele.removeClass('unchecked').addClass('checked');
    } else {
      $ele.removeClass('checked').addClass('unchecked');
    }
  }, true);
  $scope.$watch('osDisabled', function (v) {
    if (v) {
      $ele.unbind('click');
      $ele.addClass('disabled');
    } else {
      $ele.unbind('click').bind('click', function () {
        $scope.$apply(function () {
          if ($scope.osModel.find((n) => {
              return n == $attr.value
            })) {
            let index = $scope.osModel.findIndex((n) => {
              return n == $attr.value
            })
            $scope.osModel.splice(index, 1);
          } else {
            $scope.osModel.push($attr.value);
          }
          //$scope.osModel = $attr.value;
        });
      });
      $ele.removeClass('disabled');
    }
  }, true);
}

angularAMD.directive('oasisCheckbox', [() => {
  return {
    restrict: 'E',
    scope: {
      osModel: '=',
      osDisabled: '='
    },
    template: '<div class="oasis-checkbox"><label class="unchecked"></label><label ng-transclude></label></div>',
    replace: true,
    transclude: true,
    controller: function ($scope, $element, $attrs, $transclude) {
    },
    link: function ($scope, $element, $attr, controller) {
      _linkFunc($scope, $element, $attr, controller);
    }
  }
}])
