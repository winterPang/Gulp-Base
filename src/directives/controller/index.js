
import '../directive/hello';
import '../directive/form';
let ctrlCb = ($scope) =>{

  $scope.color='red';
  $scope.name='red';

}

export default ['$scope',ctrlCb]