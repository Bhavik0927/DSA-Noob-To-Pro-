// Implementation Stack using Array

const CreateStack = () => {
    let stack = [];

    return {
        push: function(items){
            stack[stack.length] = items;
        },

        pop: function(){
            if(stack.legth === 0) return "Stack is empty";
            let popped = stack[stack.length -1];
            stack.length =  stack.length - 1;
            return popped;
        },

        peek: function(){
            if(stack.length === 0 ) return "stack is empty";
            return stack[stack.length - 1];
        },

        isEmpty:function(){
            return stack.lenth === 0;
        },

        size:function(){
            return stack.length;
        },

        print: function(){
            console.log(stack);
        }
    }
}

const mystack = CreateStack();

mystack.push(12);
mystack.push(43);
mystack.push(87);

console.log(mystack.peek())

mystack.print();