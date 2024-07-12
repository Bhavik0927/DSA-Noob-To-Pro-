class Node {
    int data;
    Node next;

    public Node(int data) {
        this.data = data;
        next = null;
    }
}

public class IMple {

    Node head;

    void add(int data) {
        Node newNoded = new Node(data);

        if (head == null) {
            head = newNoded;
            return;
        } else {
            Node curr = head;
            while (curr.next != null) {
                curr = curr.next;
            }
            curr.next = newNoded;
        }
    }

    void insertAtFirst(int data){
        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode;
    }

    void insertAtMid(int idx,int data){
        Node newNode = new Node(data);
        if(idx == 0){
            insertAtFirst(data);
        }else{
            Node temp = head;
            for(int i = 0; i< idx-1; i++){
                temp = temp.next;
            }
            newNode.next = temp.next;
            temp.next = newNode;
        }
    }

    void printData() {
        Node currNode = head;
        while (currNode != null) {
            System.out.println(currNode.data);
            currNode = currNode.next;
        }
    }

    public static void main(String[] args) {
        IMple ll = new IMple();
        ll.add(10);
        ll.add(30);
        ll.insertAtFirst(40);
        ll.insertAtMid(2,879);
        ll.add(25);
        
        ll.printData();
    }

}