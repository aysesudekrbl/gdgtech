import java.util.Scanner;


class Main {
    public static void fibonacci() {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the length of the Fibonacci sequence:");
        int length = input.nextInt();

        int firstnumber = 0;
        int secondnumber = 1;
        int nextnumber;

        System.out.print("Fibonacci sequence: 0 1");

        for (int i =3; i<= length; i ++){
            nextnumber = firstnumber + secondnumber;
            System.out.print(" " + nextnumber);
            firstnumber = secondnumber;
            secondnumber = nextnumber;

        }

        System.out.print("\n");

    }


    public static void main(String[] args) {
        fibonacci();
    }
}

