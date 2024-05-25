// import java.util.*;
public class BuyAndSell {

    // Brute Force Method
    /* static int maxProfit(int[] arr,int n){
        int maxPro = 0;

        for(int i = 0; i< n; i++){
            for(int j = i+1; j<n; j++){
                if(arr[i] < arr[j]){
                    maxPro = Math.max(arr[j] - arr[i],maxPro);
                }
            }
        }
        return maxPro;
    } */

    // Optimal Solution;
    /*static int maxProfit(int[] arr,int n){
        int maxPro = 0;
        int minPro = Integer.MAX_VALUE;

        for(int i = 0; i< n; i++){
            minPro = Math.min(minPro, arr[i]);
            maxPro = Math.max(maxPro, arr[i] - minPro );
        }
        return maxPro;
    } */
    public static void main(String[] args) {
        int arr[] = {7,1,5,3,6,4};
        int n = 6;
        int maxPro = maxProfit(arr,n);
        System.out.println("Max profit is: " + maxPro);
    }
}
