app.controller('main', main);

function main($scope, $rootScope, tasks){
    $scope.header = 'ToDo list';
    
    $scope.updateTasks = function(){
        if (!!$scope.newTaskName)
            tasks.add($scope.newTaskName);           
    }; 
    
    $scope.tasks = tasks.get();

};