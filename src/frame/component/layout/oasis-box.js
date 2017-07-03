import angularAMD from 'angularAMD';
import Utils from 'utils';
import 'css!./frame/component/layout/less/layout';

angularAMD.directive('oasisBox',[function () {
		// body...
		return{
			restrict: 'E',
	       // scope:{},
	        template: '<div  class="oasis-box" ng-transclude></div>',
	        replace: true,
	        priority:48,
	        transclude:true,
	        require:['oasisBoxHeader','oasisBoxBody','oasisBoxFooter'],
	        controller:function($scope,$element,$attrs,$transclude){
	        	
	        }
	        
		}
}]) 
	