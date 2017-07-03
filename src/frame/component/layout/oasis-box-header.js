import angularAMD from 'angularAMD';
import Utils from 'utils';
//import 'sprintf';
import 'css!./frame/component/layout/less/layout';

let _drawOsHeaderDom = ($scope,$element,$attr,$state) =>{
	if($attr.bgnone==""||$attr.bgnone) $element.addClass("no-background");
	if($attr.ostitle){
		let title = $attr.ostitle;
		let titleTemp = `<span class="title">${title}</span>`;
		$element.prepend(titleTemp);
	}
	if($attr.linkdetail){
		let linkState = $attr.linkdetail;
		let href =$state.href(linkState);
		if(!href) {
			console.warn('linkdatail param not exist');
		}
		let linkdetailTemp = `<a class=" link-detail" ui-sref=${linkState} 
		href=${href} title="more"><i class="fa fa-list-ul pull-right"></i></a>`;    	
		$element.append(linkdetailTemp);
	}
	//if($attr.type && $attr.type == "bar") $element.addClass('header-bar');
}

angularAMD.directive('oasisBoxHeader',['$state',function ($state) {
		// body...
		return {
			restrict: 'E',
	       // scope:{},
	        template: '<div class="oasis-box-header box-header" ng-transclude></div>',
	        replace: true,
	        //priority:48,
	        transclude:true,
	        link:function($scope,$element,$attr,controller){
	         	// body...
	         	 //debugger
	         	_drawOsHeaderDom($scope,$element,$attr,$state);
	        }
		} 
}])
