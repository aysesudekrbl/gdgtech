import java.util.Map;
import java.util.Hashtable;
import java.util.Scanner;

class Main{
    public static Map<String, Integer> users(){
        Map<String, Integer> login = new Hashtable<>();
        login.put("ahmet",1234);
        login.put("mehmet",9911);
        return login;
    }
    public static Map<String,Float> money(){
        Map<String, Float> money = new Hashtable<>();
        money.put("ahmet",2450.5f);
        money.put("mehmet",1230.0f);
        return money;
    }


    public static String loginCheck(){
        boolean userFound = false;
        Scanner scanner = new Scanner(System.in);
        String username = "";
        Map<String, Integer> dictionary = users();


        while (!userFound) {
            System.out.println("Kullanıcı adınızı giriniz: ");
            username = scanner.nextLine();
            if (dictionary.containsKey(username)) {
                userFound = true;
                break;
            }

            System.out.println("Kullanıcı bulunamadı.");
        }

        if (userFound){
            boolean passwordCorrect = false;
            System.out.println("Şifrenizi giriniz: ");
            int password = scanner.nextInt();

            while (!passwordCorrect) {
            if (dictionary.get(username) == password) {
                passwordCorrect = true;
                System.out.println("Hoşgeldiniz!" + username + " olarak giriş yapılıyor.");
            }
           if (passwordCorrect) {
               return username;
           }
           System.out.println("Hatalı şifre.");
           System.out.println("Şifrenizi giriniz: ");
           password = scanner.nextInt();

            }
        }

    return null;
    }
    public static void atmSimulator(){
        boolean exit = false;
        String username = loginCheck();
        Map<String, Float> moneyList = money();
        float totalMoney = moneyList.get(username);

        while (!exit) {

            System.out.println("Yapmak istediğiniz işlemin numarasını giriniz: ");
            System.out.println("[1] Para çekme");
            System.out.println("[2] Para yatırma");
            System.out.println("[3] Bakiye görüntüleme");
            System.out.println("[4] Çıkış");
            Scanner input = new Scanner(System.in);
            String operation = input.nextLine();
            switch (operation){
                case "1":
                    System.out.println("Para çekmek istediğiniz miktar: ");
                    Scanner operationinput = new Scanner(System.in);
                    Float howmuch = operationinput.nextFloat();

                    if (howmuch > moneyList.get(username)){
                        System.out.println("Hesabınızda bu kadar para bulunmuyor.");
                        break;
                    }
                    totalMoney -= howmuch;
                    moneyList.put(username,totalMoney);
                    System.out.println("Para çekildi.");
                    break;

                case "2":
                    System.out.println("Para yatırmak istediğiniz miktar: ");
                    Scanner newinput = new Scanner(System.in);
                    Float deposit = newinput.nextFloat();
                    totalMoney += deposit;
                    moneyList.put(username,totalMoney);
                    System.out.println("Para yatırıldı.");
                    break;

                case "3":
                    System.out.println("Hesabınızdaki para miktarı: " + totalMoney);
                    break;

                case "4":
                    exit = true;
                    System.out.println("Çıkış yapılıyor, iyi günler.");
                    break;

            }
        }
    }

    public static void main(String[] args){

        atmSimulator();
    }

}