import java.util.*;   

public class TwoSum {
    // Brute foce method
    static String twoSum(int[] arr,int n,int target){
        for(int i = 0; i< n; i++){
            for(int j = i+1; j< n; j++){
                if(arr[i] + arr[j] == target) return "yes";
            }
        }
        return "No";
    }

    //less Optimal Solution
    static String twoSum(int[] arr,int n, int target){
        HashMap<Integer,Integer> mpp = new HashMap<>();
        for(int i = 0; i< n; i++){
            int num = arr[i];
            int needMore = target - num;

            if(mpp.containsKey(needMore)){
                return "Yes";
            }
            mpp.put(arr[i], i);
        }
        return "No";
    }*/  

    //Best Approch (Two Pointers Approch)
    static String twoSum(int[] arr,int n, int target){
        Arrays.sort(arr);
        int left = 0;
        int right = n-1;
        while(left < right){
            int sum = arr[left] + arr[right];
            if(sum == target) return "Yes";
            else if(sum < target) left++;
            else right--;
        }
        return "No";
    }
    
    public static void main(String[] args) {
        int n = 4;
        int[] arr = {2,1,3,4};
        int target = 4;
        String ans = twoSum(arr,n ,target);
        System.out.println("This is the answer for variant 1: " + ans);
    }
}
