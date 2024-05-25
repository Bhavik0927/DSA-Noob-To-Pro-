import java.util.*;

public class ReArranged {
    static int[] reArrangedBySign(int[] arr, int n) {

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
    }

    public static void main(String[] args) {
        int n = 4;
        int A[] = { 1, 2, -4, -5 };

        int[] ans = reArrangedBySign(A, n);

        for(int i = 0; i< ans.length; i++){
            System.out.print(ans[i] + " ");
        }
    }
}
