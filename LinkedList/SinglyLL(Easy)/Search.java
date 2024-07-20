class Node {
    int data;
    Node next;

    public Node(int data) {
        this.data = data;
        next = null;
    }
}


public class Search {

    Node head;
    Node tail;

    int searchElement(int val){
        Node temp = head;

        while(temp != null){
            if(temp.data == val){
                return 1;
            }
            temp = temp.next;
        }
        return 0;
    }
    public static void main(String[] args) {
        
    }
}
