
public class Pattern{
    public static void main(String[] args) {
        // Pattern1(5);
        // Pattern2(5);
        // Pattern3(5);
        Pattern4(5);

    }

    static void Pattern1(int n){
        for(int row = 1; row <= n; row++){
            for(int col = 1; col <= row; col++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    static void Pattern2(int n){
        for(int row = 1; row<= n; row++){
            for(int col = 1; col <= n; col++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    static void Pattern3(int n){
        for(int row = 1; row<= n; row++){
            for(int col = 1; col <= n-row+1; col++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    static void Pattern4(int n){
        for(int row = 1; row<= n; row++){
            for(int col = 1; col <= row; col++){
                System.out.print(col + " ");
            }
            System.out.println();
        }
    }

    static void Pattern5(int n){
        for(int row = 1; row <= n; row++){
            for(int col = 1; col <= row; col++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}