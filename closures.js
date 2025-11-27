// A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.



function persistentCounter(){
    var count = 0;

    return function(){
        count += 1;
        console.log(count);
        return count;
    }
};

var mainCounter = persistentCounter();
mainCounter();
mainCounter();
