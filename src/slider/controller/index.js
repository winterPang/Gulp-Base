import 'frame/component/form/oasis-slider';

let ctrlCb = ($scope, $timeout) => {
    $scope.props = [
        {
            name: 'os-model',
            type: 'string',
            desc: 'os-model属性。指令实现双向绑定。可以通过初始化设置其值与value值一致实现默认选项。也可以动态赋值，改变其选择选项。通过监听其值的变化，处理用户选择事件'
        },
        {
            name: 'os-label',
            type: 'string',
            desc: 'os-label是显示在input左边的label，这里是一个普通的字符串，不是绑定的$scope上的值，当然也可以使用os-label="{{labelText}}"进行绑定'
        },
        {name: 'os-min', type: 'number', def: 0, desc: '滑块允许的最小值'},
        {name: 'os-max', type: 'number', def: 10, desc: '滑块允许的最大值'},
        {name: 'os-step', type: 'number', def: 1, desc: '滑块滑动的步长'},
        {name: 'os-show-tip', type: 'boolean', def: true, desc: '是否在滑块上显示tooltip'},
        {name: 'labelwidth', type: 'number', def: 80, desc: '滑块左边label的宽度'},
        {name: 'sliderwidth', type: 'number', def: 200, desc: '滑块轴线的长度'}
    ];
};

export default ['$scope', '$timeout', ctrlCb];