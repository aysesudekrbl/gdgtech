import java.util.Scanner;

class Main {
    public static void max_min_number() {
        int numberlist[] = new int[5];
        Scanner input = new Scanner(System.in);


        for (int i = 0; i < 5; i++) {
            System.out.println("Enter a number:");

            numberlist[i] = (input.nextInt());
        }
        int maxnumber = numberlist[0];
        float sum = 0;
        for (int num : numberlist) {
            sum += num;
            if (num >= maxnumber) {
                maxnumber = num;
            }
        }
        System.out.printf("Maximum number in the list is %d \n", maxnumber);
        System.out.printf("Average: %.2f\n", sum / 5);
    }

    public static void main(String[] args) {
        max_min_number();
    }
}

