import "frame/component/form/oasis-select";

let ctrlCb = ($scope) => {
    $scope.select = {
        data: [
            {id: 'zhangsan', name: '张三'},
            {id: 'lisi', name: '李四'},
            {id: 'wangwu', name: '王五'},
            {id: 'dongyi', name: '东一'},
            {id: 'wangyu', name: '王雨'},
            {id: 'wangyu2', name: '王雨2'},
            {id: 'wangyu3', name: '王雨3'},
            {id: 'wangyu4', name: '王雨4'},
            {id: 'wangyu5', name: '王雨5'},
            {id: 'wangyu6', name: '王雨6'},
            {id: 'wangyu7', name: '王雨7'}
        ],
        value: 'zhangsan'
    };

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
        {name: 'os-disabled', type: 'string', desc: 'os-disabled是控制组件是否禁用的属性，需要绑定$scope上的值'},
        {name: 'os-search', type: 'boolean', def: 'true', values: 'true/false', desc: '是否需要启用搜索狂'},
        {name: 'os-trigger', type: 'string', def: '', desc: '使用外部的组件触发下拉的展开和关闭，这个值是一个css选择器'},
        // TODO  好像没有描述清楚
        {name: 'os-key', type: 'string', def: 'id', desc: '选择条数据，绑定在os-model上的值在数据上对应的字段，$all代表返回整个对象'},
        {name: 'os-text', type: 'string', def: 'name', desc: '选择的数据显示的文本框的值对应的字段'},
        {name: 'os-data', type: 'Array', def: '[]', desc: '绑定下拉列表的数据，支持数组类型，但是必须包含os-key和os-text中对应的字段'},
        {name: 'labelwidth', type: 'number', def: 80, desc: '输入框左边label的宽度'},
        {name: 'placeholder', type: 'string', def: '', desc: 'placeholder'},
        {name: 'inputwidth', type: 'number', def: 200, desc: '输入框本身的宽度'},
    ];
};

export default ['$scope', ctrlCb];