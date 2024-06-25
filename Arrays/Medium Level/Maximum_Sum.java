import java.util.*;

public class Maximum_Sum {

    // Brute Force
    /*
     * static int MaximumSub(int[] arr, int n) {
     * 
     * int maxSum = Integer.MIN_VALUE;
     * 
     * for(int i = 0; i< n; i++){
     * for(int j = i; j < n; j++){
     * int sum = 0;
     * 
     * for(int k = i; k <= j; k++){
     * sum += arr[k];
     * }
     * 
     * maxSum = Math.max(maxSum,sum);
     * }
     * }
     * return maxSum;
     * }
     */

    // Better Approch
    /* static int MaximumSub(int[] arr, int n) {
        int maxSum = Integer.MIN_VALUE;

        for (int i = 0; i < n; i++) {
            int sum = 0;

            for (int j = i; j < n; j++) {
                sum += arr[j];
                maxSum = Math.max(maxSum, sum);
            }
            
        }
        return maxSum;

    } */

    //Optimal Approch
    // Kadan's Algorithms
    static long MaximumSub(long[] arr, long n){

        long maxSum = Long.MIN_VALUE;
        long sum = 0;

        for(int i = 0; i< arr.length; i++){
            sum += arr[i];

            if(sum > maxSum) maxSum = sum;

            if(sum < 0) sum = 0;
        }

        return maxSum;
    }

    public static void main(String[] args) {
        long[] arr = { -2, 1, -3, 4, -1, 2, 1, -5, 4 };
        long n = arr.length;
        long maxSum = MaximumSub(arr, n);
        System.out.println("The maximum subarray sum is: " + maxSum);
    }
}
