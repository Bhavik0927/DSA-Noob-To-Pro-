import java.util.*;

public class Union {

    // brute force method
    static ArrayList<Integer> UnionArray(int[] arr1, int[] arr2, int n, int m) {

        HashSet<Integer> s = new HashSet<>();
        ArrayList<Integer> union = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            s.add(arr1[i]);
        }

        for (int j = 0; j < m; j++) {
            s.add(arr2[j]);
        }

        for (int it : s) {
            union.add(it);
        }

        return union;
    }

    // Optimal Approch
    /*static ArrayList<Integer> UnionOfArray(int[] arr1, int[] arr2, int n, int m) {
        ArrayList<Integer> union = new ArrayList<>();

        int i = 0;
        int j = 0;
        while (i < m && j < n) {
            if (arr1[i] < arr2[j]) {
                if (union.size() == 0 || union.get(union.size() - 1) != arr1[i]) {
                    union.add(arr1[i]);
                }
                i++;
            } else {
                if (union.size() == 0 || union.get(union.size() - 1) != arr2[j]) {
                    union.add(arr2[j]);
                }
                j++;
            }
        }
        return union;
    } */

    public static void main(String[] args) {
        int n = 10, m = 7;
        int arr1[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        int arr2[] = { 2, 3, 4, 4, 5, 11, 12, 13, 11 };

        ArrayList<Integer> union = UnionOfArray(arr1, arr2, n, m);

        for (int un : union) {
            System.out.println(un);
        }
    }
}
