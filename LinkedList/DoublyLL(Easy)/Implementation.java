class Node{
    int data;
    Node next;
    Node prev;

    Node(int data){
        this.data = data;
        next = null;
        prev = null;
    }
}

public class Implementation {
    Node head;
    Node tail;

    void Add(int elm){
        Node temp = new Node(elm);
        if(head == null){
            head = temp;
            tail = temp;
        }else{
            tail.prev = temp;
            temp.next = tail;
            tail = temp;
        }
    }

    public static void main(String[] args) {
        Implementation dll = new Implementation();
        dll.Add(20);
        dll.Add(34);

        System.out.println(dll.head.data);
        System.out.println(dll.tail.data);


    }
}
