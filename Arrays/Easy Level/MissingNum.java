public class MissingNum {

    // Brute force method
    /*
     * static int missingNumber(int[] arr,int n){
     * 
     * for(int i = 1; i<= n; i++){
     * int flag = 0;
     * 
     * for(int j = 0; j< n-1; j++){
     * if(arr[j] == i){
     * flag = 1;
     * break;
     * }
     * }
     * 
     * if(flag == 0) return i;
     * }
     * return -1;
     * }
     */

    // Better Approch here we r using exta space (n+1)
    /* static int missingNumber(int[] arr, int n) {

        int[] hash = new int[n + 1];

        for (int i = 0; i < n - 1; i++) {
            hash[arr[i]]++;
        }

        for (int i = 1; i <= n; i++) {
            if (hash[i] == 0)
                return i;
        }

        return -1;

    } */

    //Optimal Approch
    static int missingNumber(int[] arr,int n){

        int sum = (n * (n + 1)) /2;

        int s2 = 0;

        for(int i = 0; i<n -1; i++){
            s2 += arr[i];
        }

        int missingNum = sum - s2;
        return missingNum;
    }

    public static void main(String[] args) {
        int[] arr = { 1, 2, 4, 5 };
        int n = 5;
        System.out.println(missingNumber(arr, n));
    }
}
