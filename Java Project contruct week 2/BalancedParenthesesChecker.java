import java.util.Scanner;
import java.util.Stack;

public class BalancedParenthesesChecker {

    // Method to check if the parentheses in the expression are balanced
    public static boolean areParenthesesBalanced(String expression) {
        Stack<Character> stack = new Stack<>();

        // Iterate through each character in the expression
        for (char ch : expression.toCharArray()) {
            // Push opening parentheses onto the stack
            if (ch == '(' || ch == '{' || ch == '[') {
                stack.push(ch);
            }
            // Check for closing parentheses
            else if (ch == ')' || ch == '}' || ch == ']') {
                // If stack is empty or top of stack doesn't match, it's unbalanced
                if (stack.isEmpty() || !isMatchingPair(stack.pop(), ch)) {
                    return false;
                }
            }
        }
        // If stack is empty, parentheses are balanced
        return stack.isEmpty();
    }

    // Method to check if the opening and closing parentheses match
    private static boolean isMatchingPair(char opening, char closing) {
        return (opening == '(' && closing == ')') ||
               (opening == '{' && closing == '}') ||
               (opening == '[' && closing == ']');
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt the user to enter an expression
        System.out.print("Enter an expression: ");
        String expression = scanner.nextLine();

        // Check if the expression has balanced parentheses
        if (areParenthesesBalanced(expression)) {
            System.out.println("The expression has balanced parentheses.");
        } else {
            System.out.println("The expression does not have balanced parentheses.");
        }
        scanner.close();
    }
}
