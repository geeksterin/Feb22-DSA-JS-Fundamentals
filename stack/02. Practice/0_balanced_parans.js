/**
 * Given a string = "{[()([])]}" -> true (balanced)
 * Otherwise false (unbalanced) = "{([)]}"
 */

/**
 * Solve this using a stack
 * Every time we encounter an opening bracket, we'll push into the stack
 * Every time we encounter a closing bracket, we'll pop from the stack
 * If the popped bracket doesn't match with the closing bracket, we'll return false
 * If stack is empty, we'll return true
 *
 * time complexity- O(n)
 * space complexity - O(n)
 */

class Stack {
    #data;

    constructor() {
        this.#data = [];
    }

    push(value) {
        this.#data.push(value);
    }

    /**
     * Lets us look at the top element of the stack
     */
    peek() {
        if (this.#data.length === 0) {
            return null;
        }
        return this.#data[this.#data.length - 1];
    }

    pop() {
        return this.#data.pop();
    }

    size() {
        return this.#data.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.#data = [];
    }

    print() {
        console.log(this.#data);
    }
}

function isBalancedParentheses(str) {
    let stack = new Stack();
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case '{':
            case '[':
            case '(':
                stack.push(str[i]);
                break;
            case '}':
                if (stack.peek() !== '{') {
                    return false;
                }
                stack.pop();
                break;
            case ']':
                if (stack.peek() !== '[') {
                    return false;
                }
                stack.pop();
                break;
            case ')':
                if (stack.peek() !== '(') {
                    return false;
                }
                stack.pop();
                break;
        }
    }
    return stack.isEmpty();
}

console.log('is balanced', isBalancedParentheses("{}[]{}()"));
console.log('is balanced', isBalancedParentheses("{"));
console.log('is balanced', isBalancedParentheses("{[()]})([]"));
console.log('is balanced', isBalancedParentheses("{[()([])]}"));
console.log('is balanced', isBalancedParentheses("{[(([["));
