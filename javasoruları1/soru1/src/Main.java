import java.util.Scanner;

class Main {
    public static void even_odd_number() {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter a number (result: even/odd): ");
        int numberinput = input.nextInt();
        if (numberinput % 2 == 0) {
            System.out.println("Even number.");
        } else {
            System.out.println("Odd number.");
        }
    }
    public static void main(String[] args) {
        even_odd_number();
    }
}
