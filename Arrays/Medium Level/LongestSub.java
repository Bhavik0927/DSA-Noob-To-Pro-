import java.util.*;

public class LongestSub {

    // Brute Force 
    static boolean linearSearch(int[] arr,int num){
        int n = arr.length;

        for(int i = 0; i<n; i++){
            if(arr[i] == num) return true;
        }
        return false;
    }

    static int longestSubsequenceElement(int[] arr){
        int n = arr.length;
        int longest = 1;

        if(n == 0) return 0;

        for(int i = 0; i<n; i++){
            int x = arr[i];
            int count  = 1;

            while(linearSearch(arr, x+1) == true){
                x+= 1;
                count+= 1;
            }

            longest = Math.max(longest,count);
        }

        return longest;
    }

    // Most Optimal Approch
    /* static int longestSubsequenceElement(int[] arr) {
        int n = arr.length;
        if (n == 0)
            return 0;

        Set<Integer> hs = new HashSet<>();

        // first we add all elements in hashset so it includes only unique elements
        for (int i = 0; i < n; i++) {
            hs.add(arr[i]);
        }
        int long_len = 0;
        for (int i = 0; i < n; i++) {

            // check arr[i]-1 is not present in hashset;
            if (!hs.contains(arr[i] - 1)) {
                int num = arr[i];

                while (hs.contains(num)) {
                    num++;
                }

                if (long_len < num - arr[i]) {
                    long_len = num - arr[i];
                }
            }

        }

        return long_len;
    } */


    public static void main(String[] args) {
        int[] a = { 100, 200, 1, 2, 3, 4 };
        int ans = longestSubsequenceElement(a);
        System.out.println("The longest consecutive sequence is " + ans);
    }
}
