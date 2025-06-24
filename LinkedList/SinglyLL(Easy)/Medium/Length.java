class Node{
    int data;
    Node next;

    Node(int data1, Node next){
        this.data = data1;
        this.next = next;
    }

    Node (int data1){
        data = data1;
        next = null;
    }
}


public class Length {
    
    static int findLength(Node slow, Node fast){
        int count = 1;

        fast = fast.next;

        while(slow != fast){
            count++;
            fast = fast.next;
        }
        return count;
    }

    static int lengthOfLoop(Node head){
        Node slow = head;
        Node fast = head;

        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;

            if(slow == fast){
                return findLength(slow, fast);
            }
        }

        return 0;
    }

}
