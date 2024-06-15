public class IsSorted {
    static boolean isItSorted(int[] arr){
        for(int i = 0; i< arr.length-1; i++){
            if(arr[i] > arr[i+1]){ return false;}
        }
        return true;
    }

    public static void main(String[] args) {
        int[] arr = {12,34,543,19191};
        System.out.println(isItSorted(arr));

    }
}
