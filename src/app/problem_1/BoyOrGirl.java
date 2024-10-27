import java.util.Scanner;

public class BoyOrGirl {

    public static String determineChatOrIgnore(String b) {
        int n = b.length();
        int contador = 0;
        
        for (int i = 0; i < n; i++) {
            int letras = 0;
            for (int j = 0; j < i; j++) {
                if (b.charAt(i) == b.charAt(j)) {
                    letras = 1;
                }
            }
            if (letras == 0) {
                contador++;
            }
        }
        
        return (contador % 2 == 0) ? "CHAT WITH HER!" : "IGNORE HIM!";
    }
    
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        String b = entrada.next();
        System.out.println(determineChatOrIgnore(b));
        entrada.close();
    }
}