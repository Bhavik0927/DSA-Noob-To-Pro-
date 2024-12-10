public class nthRoot {
    static int funct(int n, int m, int mid) {
        int ans = 1;
        for (int i = 1; i <= n; i++) {
            ans = ans * mid;

            if (ans > m) {return 2;}
        }
        if (ans == m) {return 1;}
    
        return 0;
    }

    static int NthRoot(int n, int m) {

        int low = 1, high = m;
        while (low <= high) {
            int mid = (low + high) / 2;

            int midN = funct(n, m, mid);

            if (midN == 1) {
                return mid;
            } else if (midN == 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int n = 3, m = 25;
        int ans = NthRoot(n, m);
        System.out.println("The answer is: " + ans);
    }
}
