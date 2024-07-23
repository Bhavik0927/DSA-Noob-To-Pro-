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
            tail.next = temp;
            temp.prev = tail;
            tail = temp;
        }
    }

    void print(){
        Node curr = head;
        while(curr != null){
            System.out.print(curr.data + " ");
            curr = curr.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Implementation dll = new Implementation();
        dll.Add(20);
        dll.Add(34);
        dll.Add(388);

       dll.print();

    }
}
