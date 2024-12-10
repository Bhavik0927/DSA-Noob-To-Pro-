public class Reverse {

    static String reverseString(String s) {
        String[] word = s.split(" ");
        // System.out.println("word => " + word);
        StringBuilder reversed = new StringBuilder();

        for (int i = word.length - 1; i >= 0; i--) {
            System.out.print(word[i]);
            reversed.append(word[i]).append(" ");
        }
        return reversed.toString().trim();
    }

    public static void main(String[] args) {
        String originalString = "I love Java Programming";
        String reversedString = reverseString(originalString);
        System.out.println(reversedString);
    }
}
