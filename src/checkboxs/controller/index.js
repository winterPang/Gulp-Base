import 'oasisCheckbox';

let ctrlCb = ($scope,$timeout) =>{
	
	$scope.checkbox = {
		values:[1,2,3]
	}
	$scope.checkbox1 = {
		values:[1,2,4]
	}	

	$scope.checkbox1.isDisabled = true;

	$timeout(() => {
		$scope.checkbox1.isDisabled1 = true;
		$scope.checkbox1.isDisabled2 = true;
	}, 1000);

	$scope.$watch('checkbox1.values',(v,oldv) => {
		console.log(v);
	},true);

	$scope.$watch('checkbox1.isDisabled1',(v,oldv) => {
		console.log(v);
	})
}

export default ['$scope','$timeout',ctrlCb];