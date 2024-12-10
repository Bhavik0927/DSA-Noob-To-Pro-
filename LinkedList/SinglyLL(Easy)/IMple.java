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
    Node tail;

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

    void deleteAtFirst(Node head ){
        head = head.next;
    }

    void deleteLastNode(){
        if(head == null){ return;}

        if(head.next == null){
            head = null;
            tail = null;
            return;
        }

        Node curr = head;
        while(curr.next != tail){
            curr = curr.next;
        }
        curr.next = null;
        tail = curr;
    }

    void deleteNode(int idx){
        if(idx == 0){
            head = head.next;
        }else{
            Node curr = head;
            
            for(int i = 0; i< idx - 1; i++){
                curr = curr.next;
            }
            curr.next = curr.next.next;
        }

    }
    
    int KthfromLast(int k){
        Node s = head;
        Node f = head;

        for(int i = 0; i<k; i++){
            f = f.next;
        }

        while(f != tail){
            s = s.next;
            f = f.next;
        }
        return s.data;
    }
    void printData() {
        Node currNode = head;
        while (currNode != null) {
            System.out.print (currNode.data + " ");
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
        ll.deleteNode(2);
        ll.deleteLastNode();

        ll.KthfromLast(1);
        
        ll.printData();
    }

}