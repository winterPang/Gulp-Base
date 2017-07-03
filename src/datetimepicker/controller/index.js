import 'frame/component/form/oasis-datetime';
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
        { name: 'format', type: 'string', def: 'yyyy-mm-dd hh:ii', desc: '选中时间后格式化成相应的格式' },
        { name: 'os-start-date', type: 'string', def: -Infinity, desc: '开始时间，开始时间之前的时间不允许选择' },
        { name: 'os-end-date', type: 'string', def: Infinity, desc: '结束时间，结束时间之后的时间不允许选择' },
        // todo
        { name: 'os-min-date', type: 'string', def: false, desc: '啊啊啊，开始时间之前的时间不允许选择' },
        { name: 'os-max-date', type: 'string', def: false, desc: '结束时间，结束时间之后的时间不允许选择' },
        { name: 'labelwidth', type: 'number', def: 80, desc: '输入框左边label的宽度' },
        { name: 'inputwidth', type: 'number', def: 200, desc: '输入框的宽度' },
        { name: 'placeholder', type: 'string', def: '', desc: 'placeholder' }
    ];
};

export default ['$scope', '$timeout', ctrlCb];