// Find the Majority Element that occurs more than N/2 times
import java.util.*;

public class Majority_elm{
    // Brute Force Method
    static int majorityElement(int[] arr,int n){
        for(int i = 0; i< n; i++){
            int count = 0;
            for(int j = 0; j < n; j++){
                if(arr[i] == arr[j]){
                    count++;
                }
            }
            if(count > (n/2)){
                return arr[i];
            }
        }
        return -1;
    }

    // Better Solution
    static int majorityElement(int[] arr,int n){
        HashMap<Integer,Integer > mpp = new HashMap<>();

        //storing the elements with its occurnce:
        for(int i = 0; i< n; i++){
            int value = mpp.getOrDefault(arr[i],0);
            mpp.put(arr[i],value+1);
        }

        //searching for the majority element:
        for(Map.Entry<Integer,Integer> it : mpp.entrySet()){
            if(it.getValue() > (n/2) ){
                return it.getKey();
            }
        }
        return -1;
    }

    //Optimal Solution by Moore’s Voting Algorithm
    static int majorityElement(int[] arr,int n){

        int count = 0;
        int el = 0;

        // it's an algorithm...
        for(int i= 0; i< n; i++){
            if(count == 0){
                count = 1;
                el = arr[i];
            }else if(el == arr[i]){ count++;}
            else{
                count--;
            }
        }
        //checking if the stored element is the majority element
        int count1 = 0;
        for(int i = 0; i< n; i++){
            if(arr[i] == el) count1++;
        }

        if(count1 > (n/2)) return el;

        return -1;
    }
    public static void main(String[] args) {
        int[] arr = {4,4,2,4,3,4,4,3,2,4};
        int ans = majorityElement(arr,10);
        System.out.println("The majority element is: " + ans);
    }
}