import angularAMD from 'angularAMD';

angularAMD.directive('hello', [() => {
    //指令定义设计模式。
    //渲染指令$watch()
    //事件指令，$apply();
    //双向绑定，
    /*{
    restrict: String,                
    priority: Number,
    terminal: Boolean,
    template: String or Template Function:
    function(tElement, tAttrs) {...},
    templateUrl: String,
    replace: Boolean or String,
    scope: Boolean or Object,
    transclude: Boolean,
    controller: String or
    function(scope, element, attrs, transclude, otherInjectables) { ... },
    controllerAs: String,
    require: String,
    link: function(scope, iElement, iAttrs) { ... },
    compile: // 返回一个对象或连接函数，如下所示：
    function(tElement, tAttrs, transclude) {
        return {
            pre: function(scope, iElement, iAttrs, controller) { ... },
            post: function(scope, iElement, iAttrs, controller) { ... }
           }
        return function postLink(...) { ... }
        }
    };*/

    let directiveObj = {
        restrict: "E",
        template: "<h1 ng-bind='name'></h1>",
        link: (scope, iElement, iAttrs) => {
            scope.name = "green";
            // scope.$watch(iAttrs.hello,(newVal,oldVal)=>{
            //     console.log();
            // })
        }
    }

    return directiveObj;
}])
