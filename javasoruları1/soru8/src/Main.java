import java.util.Scanner;

class Main{

    public static void charnumber(){
        Scanner input = new Scanner(System.in);
        System.out.println("Enter a word: ");
        String word = input.nextLine();
        int[] harfler = new int[256];

        for (int i =0; i< word.length(); i++){
            char harf = word.charAt(i);
            harfler[harf] ++;
        }

        for (int i= 0; i<harfler.length; i++){
            if (harfler[i]> 0){
            System.out.println((char)i + " harfi " + harfler[i] + " kere var.");
        }}
    }

    public static void main(String[] args){
        charnumber();
    }
}