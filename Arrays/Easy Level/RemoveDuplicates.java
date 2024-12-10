public class RemoveDuplicates {

    public int remove(int[] arr){

        int left = 0;
        for(int right = 1; right < arr.length; right++){
            if(arr[right] != arr[left]){
                left++;
                arr[left] = arr[right];
            }
        }

        return left + 1;
    }
    public static void main(String[] args) {
        RemoveDuplicates soln = new RemoveDuplicates();
        int[] nums = {1, 1, 2, 2, 3, 4, 4, 5};
        int length = soln.remove(nums);
        System.out.println("New length: " + length);
        for (int i = 0; i < length; i++) {
            System.out.print(nums[i] + " ");
        }
    }
}
