import java.util.*;

public class ReArranged {

    // Brute Force method
    /* static int[] reArrangedBySign(int[] arr, int n) {

        ArrayList<Integer> pos = new ArrayList<>();
        ArrayList<Integer> neg = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            if (arr[i] > 0) {
                pos.add(arr[i]);
            } else {
                neg.add(arr[i]);
            }
        }

        for (int i = 0; i < n / 2; i++) {
            arr[2 * i] = pos.get(i);
            arr[2 * i + 1] = neg.get(i);
        }
        return arr;
    } */

    // Optimal Approch
    
    public static int[] RearrangedBySign(int[] A){
        int n = A.length;

        int[] arr = new int[n];

        int posIndex = 0 , negIndex = 1;
        
        for(int i = 0; i< n; i++){
            if(A[i] < 0){
                arr[negIndex]  = A[i];
                negIndex += 2;
            }else{
                arr[posIndex] = A[i];
                posIndex += 2;
            }
        }

        return arr;
    }

    public static void main(String[] args) {
        int n = 4;
        int A[] = { 1, 2, -4, -5 };

        // int[] ans = reArrangedBySign(A, n); // for brute force

        int[] ans = RearrangedBySign(A);

        for(int i = 0; i< ans.length; i++){
            System.out.print(ans[i] + " ");
        }
    }
}
