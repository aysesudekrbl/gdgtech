import java.util.Scanner;

class Main {
    public static void basic_calculator(){
        Scanner input = new Scanner(System.in);
        System.out.println("Enter an operator: (+, -, *, /): ");
        String operator = input.nextLine();

        Scanner num1input = new Scanner(System.in);
        System.out.println("Enter first number: ");
        float num1 = num1input.nextFloat();

        Scanner num2input = new Scanner(System.in);
        System.out.println("Enter second number: ");
        float num2 = num2input.nextFloat();

        switch (operator){
            case "*":
                System.out.println(num1*num2);
                break;
            case "+":
                System.out.println(num1+num2);
                break;
            case "-":
                System.out.println(num1-num2);
                break;
            case "/":
                System.out.println(num1/num2);
                break;

        }

    }


    public static void main(String[] args) {
        basic_calculator();
    }
}

