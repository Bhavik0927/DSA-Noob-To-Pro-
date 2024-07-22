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

    public static void main(String[] args) {
        Node temp = new Node(10);
        
        System.out.println(temp.data);
        System.out.println(temp.prev);
        System.out.println(temp.next);
    }
}
