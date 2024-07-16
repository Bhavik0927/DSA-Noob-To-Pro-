// Q:-> Reverse a linked list (Itrative way)

class Node {
    int data;
    Node next;

    public Node(int data) {
        this.data = data;
        next = null;
    }
}

public class Reverse {

    Node head;
    Node tail;
    int size;

    public int size(){
        return size;
    }

    public void add(int data){
        Node newNode  = new Node(data);
        if(head == null){
            head = newNode;
            return;
        }else{
            Node curr = head;
            while(curr.next != null){
                curr = curr.next;
            }
            curr.next = newNode;
        }
    }

    private Node getNodeAt(int idx){
        Node temp = head;
        for(int i = 0; i<idx; i++){
            temp = temp.next;
        }
        return temp;
    }

    public void ReversedLinkedList(){
        int li = 0;
        int ri = size - 1;

        while(li < ri){
            Node left = getNodeAt(li);
            Node right = getNodeAt(ri);

            int temp = left.data;
            left.data = right.data;
            right.data = temp;

            li++;
            ri--;

        }
    }

    void printData() {
        Node currNode = head;
        while (currNode != null) {
            System.out.print (currNode.data + " ");
            currNode = currNode.next;
        }
    }
    public static void main(String[] args) {
        Reverse r = new Reverse();
        r.add(10);
        r.add(20);
        r.add(3);

       r.ReversedLinkedList();

        r.printData();
    }
}
