import "frame/component/form/oasis-switch";

let ctrlCb = ($scope) => {
    $scope.props = [{
        name: 'os-model',
        type: 'string',
        desc: 'os-model属性。指令实现双向绑定。可以通过初始化设置其值与value值一致实现默认选项。也可以动态赋值，改变其选择选项。通过监听其值的变化，处理用户选择事件'
    }, {
        name: 'os-label',
        type: 'string',
        desc: 'os-label是显示在input左边的label，这里是一个普通的字符串，不是绑定的$scope上的值，当然也可以使用os-label="{{labelText}}"进行绑定'
    },
        {name: 'os-width', type: 'number', def: 80, desc: '开关部分的宽度,单位是像素'},
        {name: 'os-on-text', type: 'string', def: 'ON', desc: '开关是打开状态的时候，显示的文本'},
        {name: 'os-off-text', type: 'string', def: 'OFF', desc: '开关是关闭状态的时候，显示的文本'},
        {name: 'os-on-value', type: 'string', def: 'true', desc: '开关是打开状态的时候，os-model的值'},
        {name: 'os-off-value', type: 'string', def: 'false', desc: '开关是关闭状态的时候，os-model的值'},
        // { name: 'os-disabled', type: 'string', desc: 'os-disabled是控制组件是否禁用的属性，需要绑定$scope上的值' },
        {name: 'labelwidth', type: 'number', def: 80, desc: '输入框左边label的宽度'}
    ];
};

export default ['$scope', ctrlCb];