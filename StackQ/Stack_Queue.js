const create_queue = () =>{
    let arr = [];
    let front = 0;
    let rear = 0;

    return {
        enqueue:function(item){
            arr[rear] = item;
            rear++;
        },
        dequeue:function(){
            
        }

    }
}