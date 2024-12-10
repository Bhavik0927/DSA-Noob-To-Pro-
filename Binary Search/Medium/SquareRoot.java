public class SquareRoot{
    // Brute force
    /* static int findRoot(int n){
        int ans = 0;

        for(int i = 0; i< n; i++){
            int val = i * i;

            if(val <= n){
                ans = i;
            }else{ break; }
        }
        return ans;
    }  */

    // Optimal Approch
    /* static int findRoot(int n){
        int ans = 0;

        ans = (int) Math.sqrt(n);
        return  ans;
    } */

    //
    public static void main(String[] args) {
        int n = 20;
        int root = findRoot(n);

        System.out.println(root);
    }

}