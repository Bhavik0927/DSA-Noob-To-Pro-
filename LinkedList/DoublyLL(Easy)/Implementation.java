class Node {
    int data;
    Node next;
    Node prev;

    Node(int data) {
        this.data = data;
        next = null;
        prev = null;
    }
}

public class Implementation {
    Node head;
    Node tail;

    void AddatLast(int elm) {
        Node temp = new Node(elm);
        if (head == null) {
            head = temp;
            tail = temp;
        } else {
            tail.next = temp;
            temp.prev = tail;
            tail = temp;
        }
    }

    void addAtFirst(int elm) {
        Node new_node = new Node(elm);

        new_node.next = head;
        new_node.prev = null;
    }

    void deleteFirstNode() {
        if (head == null) {
            System.out.println("The list is empty");
            return;
        }
        if (head.next == null) {
            head = null;
        } else {
            head = head.next;
            head.prev = null;
        }
    }

    void deleteLastNode() {
        if (head == null) {
            return; // List is empty
        }

        if (head.next == null) {
            head = null; // Only one node in the list
            return;
        }
        Node curr = head;

        while (curr.next != null) {
            curr = curr.next;
        }
        curr.prev.next = null;
    }

    void deleteAtIndexNode(int index) {

        if (head == null || index < 0) {
            return;
        }

        Node curr = head;
        int count = 0;

        while (curr != null && count < index) {
            curr = curr.next;
            count++;
        }

        if (curr != null) {
            if (curr == head) {
                head = curr.next;
                head.prev = null;
            }
            // Change next only if the node to be deleted is NOT the last node
            if (curr.next != null) {

                curr.next.prev = curr.prev;
            }

            // Change prev only if the node to be deleted is NOT the first node
            if (curr.prev != null) {

                curr.prev.next = curr.next;
            }
        }
    }

    void print() {
        Node curr = head;
        while (curr != null) {
            System.out.print(curr.data + " ");
            curr = curr.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Implementation dll = new Implementation();
        dll.AddatLast(20);
        dll.AddatLast(34);
        dll.AddatLast(388);
        dll.AddatLast(89);
        dll.AddatLast(90);

        System.out.println("Original list:");
        dll.print();

        // dll.deleteFirstNode();
        dll.deleteAtIndexNode(1);

        System.out.println("modified list:");

        dll.print();

    }
}
