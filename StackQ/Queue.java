class MyQueue {
    private int[] arr;
    private int front, rear, currentSize, maxSize;

    public MyQueue() {
        arr = new int[16];
        front = -1;
        rear = -1;
        currentSize = 0;
    }

    public MyQueue(int maxSize) {
        this.maxSize = maxSize;
        arr = new int[maxSize];
        front = -1;
        rear = -1;
        currentSize = 0;
    }

    public void push(int element) {
        if (currentSize == maxSize) {
            System.out.println("Queue is full");
            return;
        }
        if (rear == -1) {
            front = 0;
            rear = 0;
        } else {
            rear = (rear + 1) % maxSize;
        }
        arr[rear] = element;
        currentSize++;
    }

    public int pop() {
        if (front == -1) {
            System.out.println("Queue is empty");
            return -1;
        }
        int popped = arr[front];
        if (currentSize == 1) {
            front = -1;
            rear = -1;
        } else {
            front = (front + 1) % maxSize;
        }
        currentSize--;
        return popped;
    }

    public int top() {
        if (front == -1) {
            System.out.println("Queue is empty");
            return -1;
        }
        return arr[front];
    }

    public int size() {
        return currentSize;
    }

}

public class Queue {
    public static void main(String[] args) {
        MyQueue q = new MyQueue(8);

        q.push(12);
        q.push(31);
        q.push(54);
        q.push(1982);
        q.pop();

        System.out.println("Size of queue: " + q.size());
        System.out.println("Top element: " + q.top());
    }
}