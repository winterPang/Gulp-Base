import Utils from 'utils';
import 'frame/component/form/oasis-input';

let ctrlCb = ($scope, $timeout) => {
    $scope.props = [
        { name: 'os-model', type: 'string', desc: 'os-model属性。指令实现双向绑定。可以通过初始化设置其值与value值一致实现默认选项。也可以动态赋值，改变其选择选项。通过监听其值的变化，处理用户选择事件' },
        { name: 'os-label', type: 'string', desc: 'os-label是显示在input左边的label，这里是一个普通的字符串，不是绑定的$scope上的值，当然也可以使用os-label="{{labelText}}"进行绑定' },
        { name: 'os-type', type: 'string', def: 'text', desc: 'input输入框的类型,phone,tel,date,email,ip,mac,num支持表单验证' },
        { name: 'os-disabled', type: 'string', desc: 'os-disabled是控制组件是否禁用的属性，需要绑定$scope上的值' },
        { name: 'os-valid', type: 'boolean', values: 'true/false', def: 'false', desc: '是否要启用表单验证，默认不开启', important: true },
        { name: 'os-valid-result', type: 'object', desc: '表单校验结果输出，结构是:{valid:true/false,msg:"该项必填"}', important: true },
        { name: 'labelwidth', type: 'number', def: 80, desc: '输入框左边label的宽度' },
        { name: 'inputwidth', type: 'number', def: 200, desc: '输入框的宽度' },
        { name: 'placeholder', type: 'string', def: '', desc: 'placeholder' },
        { name: 'autoshowerr', type: 'boolean', def: true, values: 'true/false', desc: '是否自动显示错误信息，默认为true' },
        { name: 'required', desc: '是否必填项，直接加上这个属性就可以了' },
        { name: 'min', type: 'number', desc: '允许输入的最小值' },
        { name: 'max', type: 'number', desc: '允许输入的最大值' },
        { name: 'range', type: 'string', desc: '允许输入的数字的范围，例如range="10,20"，只允许输入10到20的数字，包括10和20' },
        { name: 'minlen', type: 'number', desc: '允许输入的最小长度' },
        { name: 'maxlen', type: 'number', desc: '允许输入的最大长度' },
        { name: 'lenrange', type: 'string', desc: '允许输入的长度的范围，例如range="10,20"，只允许输入10到20位，包括10和20' },
        { name: 'pattern', type: 'string', desc: '需要匹配的正则表达式，正则校验下，除了required校验，其他的无效' },
        { name: 'email-msg', type: 'string', def: oasisInputConst.errMsg.email, desc: '邮箱校验没有通过显示的错误提示信息' },
        { name: 'phone-msg', type: 'string', def: oasisInputConst.errMsg.phone, desc: '手机号码校验没有通过显示的错误提示信息' },
        { name: 'tel-msg', type: 'string', def: oasisInputConst.errMsg.tel, desc: '电话校验没有通过显示的错误提示信息' },
        { name: 'date-msg', type: 'string', def: oasisInputConst.errMsg.date, desc: '时间校验没有通过显示的错误提示信息' },
        { name: 'required-msg', type: 'string', def: oasisInputConst.errMsg.required, desc: '必填项校验失败提示' },
        { name: 'min-msg', type: 'string', def: oasisInputConst.errMsg.min, desc: '最小值校验失败提示' },
        { name: 'max-msg', type: 'string', def: oasisInputConst.errMsg.max, desc: '最大值校验失败提示' },
        { name: 'range-msg', type: 'string', def: oasisInputConst.errMsg.range, desc: '数字范围校验失败提示' },
        { name: 'minlen-msg', type: 'string', def: oasisInputConst.errMsg.minlen, desc: '最小长度校验失败提示' },
        { name: 'maxlen-msg', type: 'string', def: oasisInputConst.errMsg.maxlen, desc: '最大长度校验失败提示' },
        { name: 'lenrange-msg', type: 'string', def: oasisInputConst.errMsg.lenrange, desc: '输入长度范围校验失败提示' },
        { name: 'pattern-msg', type: 'string', def: oasisInputConst.errMsg.pattern, desc: '正则校验失败的错误提示' }
    ];
    $scope.app = 'hello';
    $scope.email = '';
    $scope.disabled = true;
    $scope.validChange = function () {
        console.log(arguments);
    };
};

export default ['$scope', '$timeout', ctrlCb];