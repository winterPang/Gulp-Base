import Utils  from 'utils';

let ctrlCb = ($scope,$timeout) => {
    $scope.radio = {
        checked: "checked",
    };
     $scope.radio1 = {
        checked: "checked",
        isDisable:true,
        isUncheckedDisable:true
    };
    $scope.checkbox = {
        checked: ["checked"],
        disabled: true
    };
    $scope.$watch("radio.checked", (v,v1) =>{
        console.log(v+"================="+v1);
    })
    //console.log($scope.radio.checked);
	// $timeout(() => {
	// 	$scope.radio.checked = 'disabled';
	// 	$scope.radio.disabled = true;
	// },100);

	   
}

export default ['$scope','$timeout',ctrlCb];