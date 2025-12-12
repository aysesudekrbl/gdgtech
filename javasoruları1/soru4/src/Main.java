import java.util.Scanner;
import java.lang.Math;

class Main {
    public static void prime_number() {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter a number to check if it is prime: ");

        int primecheck = input.nextInt();
        boolean isPrime = true;


        long squareroot = (int) (Math.sqrt(primecheck));
        for (int i = 2; i <= squareroot; i++) {
            if (primecheck % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (primecheck == 1) {
            isPrime = false;
        }
        if (isPrime) {
            System.out.println("Prime number");
        } else {
            System.out.println("Not a prime number");
        }
    }

    public static void main(String[] args) {
        prime_number();
    }
}

