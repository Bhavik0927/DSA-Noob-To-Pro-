class Node{
    int data;
    Node next;

    Node(int data){
        this.data = data;
        next = null;
    }
}

public class Middle{
    Node head;
    Node next;
    // Brute force 
    static Node findMiddle(Node head){
        
        if(head == null || head.next == null){
            return head;
        }

        Node temp = head;
        int count = 0;

        while(temp != null){
            temp = temp.next;
            count++;
        }

        int mid = count/2+1;
        temp = head;

        while(temp != null){
            mid = mid - 1;

            if(mid == 0) break;

            temp = temp.next;
        }
        return temp;
    }
    // ----------------------------------------------------
    // Optimal Approch 
    int midElement(){
        Node s = head;
        Node f = head;

        while(f.next == null && f.next.next != null){
            s = s.next;
            f = f.next.next;
        }
        return s.data;
    }
    public static void main(String[] args) {
        Node head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(21);
        head.next.next.next = new Node(872);
        head.next.next.next.next = new Node(8702);

        Node middleNode = findMiddle(head);

        System.out.println(middleNode.data);
    }
}