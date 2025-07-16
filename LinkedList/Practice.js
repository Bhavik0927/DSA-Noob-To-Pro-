const Node = (data) => {
    return {

        data: data,
        next: null
    }
}

const Pure_LinkedList = () => {
    let head = null;

    const insert = (data) => {
        let New_node = Node(data);

        if (head === null) {
            head = New_node;
        } else {
            let temp = head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = New_node;
        }
    }

    const insertAtIndex = (index,data) =>{
        if(index < 0){
            return "Index can not in negative";
        }

        let New_node = Node(data);

        if(index === 0 || !head){
            New_node.next = head;
            head = New_node;
            return;
        }

        let prev = null;
        let curr = head;
        curr_index = 0;

        // while loop run until index + 1
        while(curr && curr_index < index){
            prev = curr;
            curr = curr.next;
            curr_index++
        }

        prev.next = New_node;
        New_node.next = curr;

    }


    const insertAtMiddle = (data) =>{
        let New_node = Node(data);

        let slow = head;
        let fast = head;
        let prev = null;

        while(fast !== null && fast.next !== null){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        if(prev === null){
            New_node.next = head;
            head = New_node;
        }else{
            prev.next = New_node;
            New_node.next = slow;
        }
    }
    const deleteAtFirst = () =>{
        if(head === null) return;
        head = head.next;
    }

    const deleteLastNode = () =>{
        if(head === null) return;
        let temp = head;

        while(temp.next.next !== null){
            temp = temp.next;
        }
        temp.next = null;
    }

    const reverseLinkedList = () =>{
        let prev = null;
        let curr = head;
        let next = null;

        while(curr){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        head= prev;
    }

    const print = () => {
        let out = "", temp = head;
        while (temp) { out += temp.data + " -> "; temp = temp.next; }
        console.log(out + "null");
    }

    return {
        insert,
        insertAtIndex,
        insertAtMiddle,
        print,
        deleteAtFirst,
        deleteLastNode,
        reverseLinkedList
    }
}


const ll = Pure_LinkedList();


ll.insert(32);
ll.insert(13);
ll.insert(98);
ll.print();

ll.insertAtIndex(1,99)
ll.print();


ll.insertAtMiddle(50)
// ll.deleteAtFirst();
// ll.deleteLastNode();

ll.print();
