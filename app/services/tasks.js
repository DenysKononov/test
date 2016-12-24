  app.factory('tasks', function(){
    var tasks = [
        {
            title: 'Learn JavaScript',
            done: true,
        },
        {
            title: 'Learn AngularJS',
            done: false,
        }
    ];
    
    var get = function(){
        return tasks;
    };
    var add = function(title){
        tasks.push({
            title: title,
            done: false
        });
    };
    
    return {
        get: get,
        add: add
    }
});