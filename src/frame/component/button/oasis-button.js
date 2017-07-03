import angularAMD from 'angularAMD';
import Utils from 'utils';
import 'css!./frame/component/button/less/button';
import 'sprintf';

const drawElement = (scope, ele, attr, $compile) => {
    //debugger
    const iconEleTpl = "<i class='%s'></i>";
    const textEleTpl = "<span>%s</span>";
    const dropdownTpl = "<span>%s</span> <span class='caret'></span>"
    if (attr.icon && (attr.type && attr.type != "button"))
        return false;
    if (attr.icon && attr.iconRight != "")
        ele.append(sprintf(iconEleTpl, attr.icon))
    if (attr.text)
        ele.append(sprintf(textEleTpl, attr.text));
    if (attr.icon && attr.iconRight == "")
        ele.append(sprintf(iconEleTpl, attr.icon))
    if(attr.size){
        ele.addClass(attr.size);
    }
    attr.nativeType ? ele.attr('type', attr.nativeType) : ele.attr('type', "button")
    scope.$watch('osDisabled', (v) => {
        v ? ele.addClass("disabled") : ele.removeClass("disabled")
    })
        //按钮类型
    if (attr.type == "link") {
        ele.addClass('btn-link');
    } else if (attr.type == "text") {
        ele.addClass('btn-text');
    } else if (attr.type == "hover") {
        ele.addClass('hover');
    } else {
        ele.addClass('btn');
    }
    //情景场景
    if (attr.scene == "warning") {
        ele.addClass('btn-warning');
    } else if (attr.scene == "success") {
        ele.addClass('btn-success');
    } else if (attr.scene == "danger") {
        ele.addClass('btn-danger');
    } else {
        ele.addClass('btn-default');
    }

}

angularAMD.directive('oasisButton', ["$compile", function($compile) {
    // body...
    return {
        restrict: 'E',
        scope: {
            osDisabled: "="
        },
        template: '<botton class="oasisButton"></botton>',
        replace: true,
        link: function($scope, $element, $attr, controller) {
            drawElement($scope, $element, $attr, $compile);
        }
    }
}])
