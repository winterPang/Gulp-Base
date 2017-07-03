import 'frame/component/form/oasis-spinner';
export default ['$scope', ($scope) => {
    $scope.props = [
        { name: 'os-model', type: 'string', desc: 'os-model属性。指令实现双向绑定。可以通过初始化设置其值与value值一致实现默认选项。也可以动态赋值，改变其选择选项。通过监听其值的变化，处理用户选择事件' },
        { name: 'os-label', type: 'string', desc: 'os-label是显示在input左边的label，这里是一个普通的字符串，不是绑定的$scope上的值，当然也可以使用os-label="{{labelText}}"进行绑定' },
        { name: 'os-disabled', type: 'string', desc: 'os-disabled是控制组件是否禁用的属性，需要绑定$scope上的值' },
        { name: 'os-min', type: 'number', def: -Infinity, desc: '允许输入的最小值' },
        { name: 'os-max', type: 'number', def: Infinity, desc: '允许输入的最大值' },
        { name: 'labelwidth', type: 'number', def: 80, desc: '输入框左边label的宽度' },
        { name: 'inputwidth', type: 'number', def: 200, desc: '输入框本身的宽度' },
    ];
}];