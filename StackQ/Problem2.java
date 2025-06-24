import java.util.*;

public class Problem2 {
    Queue<Integer> q1;
    Queue<Integer> q2;

    public Problem2(){
        q1 = new LinkedList<>();
        q2 = new LinkedList<>();
    }

    public void push(int x){
        while(!q2.isEmpty()){
            q1.add(q2.poll());
        }        
    }
    public static void main(String[] args) {
        
    }

}
