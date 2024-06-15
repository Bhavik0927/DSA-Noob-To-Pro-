import java.util.*;

public class SecondLargest {

    static void SecondElement(Integer[] arr) {
        Arrays.sort(arr,Collections.reverseOrder());

        for(int i = 1; i< arr.length; i++){
            if(arr[i] != arr[0]){
                System.out.println(arr[i]);
                return;
            }
        }
        System.out.println("There is no second elements");
    }

    public static void main(String[] args) {
        Integer[] arr = { 12, 35, 1, 10, 34, 1 };
        SecondElement(arr);
    }
}