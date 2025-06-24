
class Stack {
    int stack = 1000;
    int top = -1;
    int[] arr = new int[stack];

    void push(int x) {
        if (top == stack - 1) {
            System.out.println("Stack Overflow");
        } else {
            top++;
            arr[top] = x;
        }
    }

    int pop() {
        int res = arr[top];
        top--;
        return res;
    }

    int top(){ return arr[top]; }

    int size(){ return top+ 1;}

}

public class implement {
    public static void main(String[] args) {
        Stack s = new Stack();
        s.push(32);
        s.push(46);
        s.push(67);

        System.out.println("The top element is " + s.top());
        System.out.println("The size of the stack is " + s.size());
    }
}
