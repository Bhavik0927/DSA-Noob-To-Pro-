package Medium;
class Node{
    Node prev;
    Node next;
    int data;

    Node(int data){
        this.data = data;
        prev = null;
        next = null;
    }
}

// Iterative way
public class Reverse {
    Node head;
    Node reverseLinkedlist(){
        Node curr = head;
        Node prev = null;

        while(curr != null){
            Node temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        return prev;
    }
    public static void main(String[] args) {
        
    }
}
