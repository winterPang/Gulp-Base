import app from 'angularAMD'
import utils from 'utils'
import $ from 'jquery'
import 'bootstrapDatetimepicker'
import 'css!frame/libs/bootstrap-datetimepicker/css/bootstrap-datetimepicker'
// 导入样式
import 'css!frame/component/form/less/datetime'

console.log($);
// 在这里初始化时间选择框的国际化
$.fn.datetimepicker.dates.cn = {
  days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
  daysShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  daysMin: ['日', '一', '二', '三', '四', '五', '六', '日'],
  months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  monthsShort: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
  meridiem: ['上午', '下午'],
  today: '今天',
  clear: '清除'
};

let factory = ($timeout) => {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      osModel: '=',
      osDisabled: '=',
      osLabel: '@'
    },
    template: '<div class="oasis-datetime" ng-class="{disabled:osDisabled}">\
        <label ng-bind="osLabel" for="{{id}}" ng-style="labelStyle"></label>\
        <input ng-model="osModel" type="text" readonly placeholder="{{holder}}" class="form-control" id="{{id}}" ng-style="inputStyle" ng-disabled="osDisabled">\
        </div>',
    link(scope, ele, attr) {

      //  config by doc
      let format = attr.osFormat || 'yyyy-mm-dd hh:ii';
      let minDate = attr.osMinDate || false;
      let maxDate = attr.osMaxDate || false;
      let startDate = attr.osStartDate || -Infinity;
      let endDate = attr.osEndDate || Infinity;
      let language = utils.getLang();

      let daysOfWeekDisabled = attr.osDaysOfWeekDisabled || [];
      let viewMode = attr.osViewMode || 'days';
      let showTodayButton = attr.osBtnToday || false;
      let showClear = attr.osBtnClear || false;
      let disabledHours = attr.osDisabledHours || false;

      scope.id = Math.random().toString(16).substr(2) + '_datetimepicker';
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
        $('#' + scope.id).datetimepicker({
          format,
          minDate,
          maxDate,
          startDate,
          endDate,
          daysOfWeekDisabled,
          viewMode,
          showTodayButton,
          showClear,
          disabledHours,
          language,
          autoclose: true,
          allowInputToggle: true
        });
      });

      scope.$on('$destroy', () => {
        $('#' + scope.id).datetimepicker('destroy');
      });

    }
  };
};

app.directive('oasisDatetime', ['$timeout', factory]);