import app from 'angularAMD'
import 'bootstrapSlider'
// 导入样式
import 'css!bootstrap_slider_css'
import 'css!frame/component/form/less/slider'

let factory = ($timeout) => {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      osModel: '=',
      osDisabled: '=',
      osLabel: '@'
    },
    template: '<div class="oasis-slider" ng-class="{disabled:osDisabled}">\
        <label ng-bind="osLabel" for="{{id}}" ng-style="labelStyle"></label>\
        <input ng-model="osModel" type="text" id="{{id}}" ng-style="inputStyle" ng-disabled="osDisabled">\
        </div>',
    link(scope, ele, attr) {
      scope.id = Math.random().toString(16).substr(2) + '_slider';
      if (attr.osModel === undefined) {
        throw new Error('oasis-slider应该有一个os-model属性');
      }

      scope.labelStyle = {
        width: attr.labelwidth ? attr.labelwidth + 'px' : '80px'
      };

      scope.inputStyle = {
        width: attr.sliderwidth ? attr.sliderwidth + 'px' : '200px'
      };

      let min = attr.osMin === undefined ? 0 : attr.osMin;
      let max = attr.osMax === undefined ? 10 : attr.osMax;
      let step = attr.osStep || 1;
      let value = scope.osModel || 0;
      let tooltip = attr.osShowTip === undefined ? true : attr.osShowTip;

      $timeout(() => {
        $('#' + scope.id).slider({min, max, step, value, tooltip})
      });
    }
  };
};

app.directive('oasisSlider', ['$timeout', factory]);