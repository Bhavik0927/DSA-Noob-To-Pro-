public class CeilFloor {

    static int findFloor(int[] arr,int x){
        int n = arr.length - 1;
        int ans = n;
        int low = 0, high = n-1;

        while(low <= high){
            int mid = (low + high)/2;

            if(arr[mid] <= x){
                ans = arr[mid];
                low = mid + 1;
            }else{
                high = mid - 1;
            }
        }
        return ans;
    }

    static int findCeil(int[] arr,int x){
        int n = arr.length - 1;
        int ans = n;
        int low = 0, high = n-1;

        while(low <= high){
            int mid = (low + high)/2;

            if(arr[mid] >= x){
                ans = arr[mid];
                high = mid - 1;
            }else{
                low = mid + 1;
            }
        }
        return ans;
    }
    static int[] FloorandCeil(int[] arr,int n,int x){
        int f = findFloor(arr, x);
        int c = findCeil(arr, x);
        return new int[] {f , c};
    } 
    public static void main(String[] args) {
        int[] arr = {3, 4, 4, 7, 8, 10};
        int n = 6, x = 5;

        int[] ans = FloorandCeil(arr, n, x);

        System.out.println("The floor is " + ans[0] + " & The ceil is " +  ans[1]);
    }

}