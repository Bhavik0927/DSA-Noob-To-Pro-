import java.util.*;

class Node {
    int data;
    Node prev;
    Node next;

    Node(int data) {
        this.data = data;
        prev = null;
        next = null;
    }
}

public class Reverse {
    Node head;
    Node tail;

    // Brute Force Using Stack
    /*
     * Node reverseDLL(){
     * Stack<Integer> st = new Stack<>();
     * 
     * Node temp = head;
     * 
     * while(temp.next != null){
     * st.push(temp.data);
     * temp = temp.next;
     * }
     * 
     * temp = head;
     * while(temp.next != null){
     * temp.data = st.pop();
     * temp = temp.next;
     * }
     * 
     * return head;
     * }
     */

    // Optimal Approch
    void reverse() {
        Node temp = null;
        Node curr = head;

        while (curr != null) {
            temp = curr.prev;
            curr.prev = curr.next;
            curr.next = temp;
            curr = curr.prev;
        }

        // Before changing head, check for the cases like empty list and list with only one node
        if (temp != null) {
            head = temp.prev;
        }
    }

    void append(int data) {
        Node new_node = new Node(data);
        Node curr = head;

        if (head == null) {
            new_node.prev = null;
            head = new_node;
            return;
        }
        while(curr.next != null){
            curr = curr.next;
        }

        curr.next = new_node;
        new_node.prev = curr;
    }

    void print() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Reverse rr = new Reverse();

        rr.append(10);
        rr.append(20);
        rr.append(40);
        rr.append(220);
        rr.append(23210);

        System.out.println("Original List");
        rr.print();


        System.out.println("Reversed list");
        rr.reverse();

        rr.print();
        
    }
}
