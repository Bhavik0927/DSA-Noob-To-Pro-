// Rearrange Array Elements by Sign
/*Input:
arr[] = {1,2,-4,-5}, N = 4
Output:
1 -4 2 -5

Explanation: 

Positive elements = 1,2
Negative elements = -4,-5
To maintain relative ordering, 1 must occur before 2, and -4 must occur before -5. */

import java.util.*;

public class ArrangeElements {

    // Brute force
    static int[] arrangeBySign(int[] arr, int n) {
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
            arr[i * 2] = pos.get(i);
            arr[i * 2 + 1] = neg.get(i);
        }

        return arr;
    }

    public static void main(String[] args) {
        int n = 4;
        int A[] = { 1, 2, -4, -5 };

        int[] ans = arrangeBySign(A, n);

        for (int i = 0; i < n; i++) {
            System.out.print(ans[i] + " ");
        }
    }
}
