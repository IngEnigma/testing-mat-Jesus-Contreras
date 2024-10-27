public class BoyOrGirlTest {
    public static void main(String[] args) {
        test("wjmzbmr", "CHAT WITH HER!");
        
        test("xiaodao", "IGNORE HIM!");
        
        test("sevenkplus", "CHAT WITH HER!");
    }
    
    public static void test(String input, String expectedOutput) {
        String actualOutput = BoyOrGirl.determineChatOrIgnore(input);
        
        if (actualOutput.equals(expectedOutput)) {
            System.out.println("Test passed for input: " + input);
        } else {
            System.out.println("Test failed for input: " + input);
            System.out.println("Expected: " + expectedOutput);
            System.out.println("Got: " + actualOutput);
        }
    }
}
