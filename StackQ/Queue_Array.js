// Implement Queue using Array

const Queue_Array = () =>{
    let queue = [];
    let front = 1;
    let rear = 1;

    return {
        enqueue:function(item){
            queue[rear] = item;
            rear++;
        },
        dequeue:function(){
            if(front === rear) return "Queue is Empty";

            const item = queue[front];
            queue[front] = undefined;
            front++;
            return item;
        },
        size:function(){
            return rear-front;
        },
        top:function(){
            if(front === rear) return "Queue is Empty";

            return queue[front];
        },
        print:function(){
            console.log(queue.slice(front, rear));
        }

    }
}


const queue = Queue_Array();

queue.enqueue(12);
queue.enqueue(34);
queue.enqueue(98);

queue.dequeue();

queue.print();
console.log(queue.size());
console.log(queue.top()) ;