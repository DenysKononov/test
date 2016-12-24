app.directive('toDoList', function(){
   return {
       restrict: 'E',
       scope: {
           tasks: '=data',
       },
       templateUrl: 'app/todo/tpl.html',
       controller: function($scope){
            $scope.tasksToDo = function(){
        return $scope.tasks.filter(function(task){
            return !task.done;
        }).length;
      }
    }
   } 
});