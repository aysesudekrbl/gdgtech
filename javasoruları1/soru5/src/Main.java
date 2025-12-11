import java.util.Scanner;

class Main {
    public static void check_palindrome(){
        Scanner input = new Scanner(System.in);
        System.out.println("Enter a word to check if it is palindrome: ");
        String word = input.nextLine();
        boolean isPalindrome = true;
        int wordlength = word.length();
        int check = (int) wordlength/2;
        for (int i = 0; i < check; i++){
            if (word.charAt(i) != word.charAt(wordlength-i-1)){
                isPalindrome = false;
            }

        }
        if (isPalindrome) {
            System.out.println("Palindrome word");
        } else {
            System.out.println("Not a palindrome word");
        }
    }


    public static void main(String[] args){
        check_palindrome();

    }
}

