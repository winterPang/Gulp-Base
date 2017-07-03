import app from 'angularAMD'
import utils from 'utils'
import 'bootstrapDatepicker'
import 'bootstrapDatepickerCN'
// 导入样式
import 'css!frame/libs/bootstrap-datepicker/css/bootstrap-datepicker.css'
import 'css!frame/component/form/less/date'

let factory = ($timeout) => {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      osModel: '=',
      osDisabled: '=',
      osLabel: '@'
    },
    template: '<div class="oasis-date" ng-class="{disabled:osDisabled}">\
        <label ng-bind="osLabel" for="{{id}}" ng-style="labelStyle"></label>\
        <input ng-model="osModel" type="text" readonly placeholder="{{holder}}" class="form-control" id="{{id}}" ng-style="inputStyle" ng-disabled="osDisabled">\
        </div>',
    link(scope, ele, attr) {

      let format = attr.osFormat || 'yyyy-mm-dd';
      let startDate = attr.osStartDate || -Infinity;
      let endDate = attr.osEndDate || Infinity;
      let daysOfWeekDisabled = attr.osDaysOfWeekDisabled || '';
      let daysOfWeekHighlighted = attr.osDaysOfWeekHighlighted || '';
      let clearBtn = attr.osClearBtn === undefined ? true : attr.osClearBtn === 'true';
      let language = utils.getLang() === 'en' ? 'en-US' : 'zh-CN';

      scope.id = Math.random().toString(16).substr(2) + '_datepicker';
      if (attr.osModel === undefined) {
        throw new Error('oasis-date应该有一个os-model属性');
      }

      scope.holder = attr.placeholder || '';

      scope.labelStyle = {
        width: attr.labelwidth ? attr.labelwidth + 'px' : '80px'
      };

      scope.inputStyle = {
        width: attr.inputwidth ? attr.inputwidth + 'px' : '200px'
      };
      $timeout(() => {
        $('#' + scope.id).datepicker({
          autoclose: true,
          clearBtn,
          format,
          startDate,
          endDate,
          language,
          daysOfWeekDisabled,
          daysOfWeekHighlighted
        });
      });

      scope.$on('$destroy', () => {
        $('#' + scope.id).datepicker('destroy');
      });

    }
  };
};

app.directive('oasisDate', ['$timeout', factory]);