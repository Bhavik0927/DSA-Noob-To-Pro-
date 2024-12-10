public class Implementation {

    // Iterative Approch
    static int binarySearch(int[] arr, int target) {
        int n = arr.length;
        int low = 0, high = n - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (arr[mid] == target)
                return mid;
            else if (arr[mid] > target) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return -1;
    } 

    // Recursive Approch
    static int Search(int[] arr,int low,int high, int target){
        if(low > high) return -1;

        int mid = (low + high) / 2;

        if(arr[mid] == target) return mid;
        else if (arr[mid] > target) return Search(arr, low, mid-1, target);
        else return Search(arr, mid + 1, high, target);
    }

    static int binarySearch(int[] arr,int target){
        return Search(arr, 0, arr.length - 1, target);
    }
    public static void main(String[] args) {
        int[] a = { 3, 4, 6, 7, 9, 12, 16, 17 };
        int target = 6;
        int ind = binarySearch(a, target);
        if (ind == -1)
            System.out.println("The target is not present.");
        else
            System.out.println("The target is at index: " + ind);
    }
}
