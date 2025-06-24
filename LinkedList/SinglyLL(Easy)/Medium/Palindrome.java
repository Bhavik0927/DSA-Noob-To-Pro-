import java.util.*;

class Node {
    int data;
    Node next;

    Node(int data, Node next) {
        this.data = data;
        this.next = next;
    }

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class Palindrome {

    static boolean isPalindrome(Node head) {
        Stack<Integer> st = new Stack<>();
        Node temp = head;

        while (temp != null) {
            st.push(temp.data);
            temp = temp.next;
        }
        temp = head;

        while (temp != null) {
            if (temp.data != st.peek()) {
                return false;
            }
            st.pop();
            temp = temp.next;
        }
        return true;
    }

    static void printPalindrome(Node head) {
        Node temp = head;

        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Node head = new Node(1);
        head.next = new Node(4);
        head.next.next = new Node(3);
        head.next.next.next = new Node(2);
        head.next.next.next.next = new Node(1);

        System.out.println("Original linkedlist... ");
        printPalindrome(head);

        if (isPalindrome(head)) {
            System.out.println("Its an palindrome linkedList");
        } else {
            System.out.println("Its not an palindrome linkedList");
        }
    }
}
