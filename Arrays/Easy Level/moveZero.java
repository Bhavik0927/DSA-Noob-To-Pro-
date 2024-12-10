import java.util.ArrayList;

public class moveZero {

    // brute force method
    static int[] moveZeres(int[] arr, int n) {

        ArrayList<Integer> temp = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            if (arr[i] != 0) {
                temp.add(arr[i]);
            }
        }

        int nz = temp.size(); // get the size of the temp;

        for (int i = 0; i < nz; i++) { // add nz value in array
            arr[i] = temp.get(i);
        }

        for (int i = nz; i < n; i++) {
            arr[i] = 0;
        }

        return arr;
    }

    // Optimal method

    static int[] moveZeres(int[] arr, int n) {

        // first we find 0 in array
        int j = -1;
        for (int i = 0; i < n; i++) {
            if (arr[i] == 0) {
                j = i;
                break;
            }
        }

        for (int i = j + 1; i < n; i++) {
            if (arr[i] != 0) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                j++;
            }
        }
        return arr;
    } 

    public static void main(String[] args) {
        int[] arr = { 1, 0, 2, 3, 2, 0, 0, 4, 5, 1 };
        int n = 10;
        int[] ans = moveZeres(arr, n);
        for (int i = 0; i < n; i++) {
            System.out.print(ans[i] + " ");
        }
        System.out.println("");
    }
}
