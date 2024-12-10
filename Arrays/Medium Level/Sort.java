// Dutch National Flag Alogorithm

import java.util.*;

public class Sort {

    // Brute Force --> Using any sorting alogorithm just like merge sort

    // Better Solution
    /*static void sortArray(ArrayList<Integer> arr, int n) {
        int count0 = 0, count1 = 0, count2 = 0;

        for (int i = 0; i < n; i++) {
            if (arr.get(i) == 0)
                count0++;
            else if (arr.get(i) == 1)
                count1++;
            else
                count2++;
        }

        for (int i = 0; i < count0; i++)
            arr.set(i, 0);
        for (int i = count0; i < count0 + count1; i++)
            arr.set(i, 1);
        for (int i = count0 + count1; i < n; i++)
            arr.set(i, 2);
    }*/

    //Optimal Solution
    /* static void sortArray(ArrayList<Integer> arr, int n){
        int low = 0, mid = 0, high = n-1;

        while(mid <= high){
            if(arr.get(mid) == 0){
                int temp = arr.get(low);
                arr.set(low, arr.get(mid));
                arr.set(mid,temp);

                low++;
                mid++;
            }else if(arr.get(mid) == 1){
                mid++;
            }else{
                int temp = arr.get(mid);
                arr.set(mid, arr.get(high) );
                arr.set(high,temp);

                high--;
            }
        }
    } */


    static void sortArray(int[] arr){
        int low = 0;
        int mid = arr.length -1;
        int high = 0;

        while(mid <= high){
            switch (arr[mid]) {
                case 0:
                    {int temp = arr[low];
                    arr[low] = arr[mid];
                    arr[mid] = temp;
                    mid++;
                    low++;
                    break;
                }
                case 1:{
                    mid++;
                    break;
                }
                case 2:{
                    int temp = arr[mid];
                    arr[mid] = arr[high];
                    arr[high] = temp;
                    high--;
                }
            
                default:
                    break;
            }
        }
    }


    public static void main(String[] args) {
        int n = 6;
        int[] arr = {0, 2, 1, 2, 0, 1 };
        // ArrayList<Integer> arr = new ArrayList<>(Arrays.asList(new Integer[] { 0, 2, 1, 2, 0, 1 }));
        sortArray(arr, n);
        System.out.println("After sorting:");
        for (int i = 0; i < n; i++) {
            System.out.print(arr.get(i) + " ");
        }
        System.out.println();
    }
}
