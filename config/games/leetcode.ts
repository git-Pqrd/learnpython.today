import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const leetcodeGames: Game[] = [
  new GameBuilder()
    .setTitle("LeetCode 1: Two Sum")
    .setHref("leetcode-two-sum")
    .setTags([kt.arrays, kt.algorithms])
    .setSynopsis("Find two numbers in an array that add up to a target.")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("def two_sum(nums, target):", StateEnum.NORMAL, ""),
          new CodeLine("    seen = {}", StateEnum.NORMAL, ""),
          new CodeLine(
            "    for i, num in enumerate(nums):",
            StateEnum.NORMAL,
            ""
          ),
          new CodeLine(
            "        complement = target - num",
            StateEnum.NORMAL,
            ""
          ),
          new CodeLine("        if complement in seen:", StateEnum.NORMAL, ""),
          new CodeLine(
            "            return [seen[complement], i]",
            StateEnum.NORMAL,
            ""
          ),
          new CodeLine(
            "    seen[num] = i",
            StateEnum.ERROR,
            "This line should be inside the loop"
          ),
          new CodeLine(
            "        seen[i] = num",
            StateEnum.WRONG,
            "Incorrect: swapped key and value"
          ),
          new CodeLine(
            "        seen[num] = i",
            StateEnum.CORRECT,
            "Correct placement of this line",
            10
          ),
          new CodeLine(
            "        seen.append(num)",
            StateEnum.WRONG,
            "Incorrect: dictionaries don't have append method"
          ),
          new CodeLine("    return []", StateEnum.NORMAL, ""),
          new CodeLine(
            "print(two_sum([2, 7, 11, 15], 9))",
            StateEnum.NORMAL,
            ""
          ),
        ],
        "python"
      )
    )
    .setText(
      `In this LeetCode-style problem, you need to implement the Two Sum algorithm.
            The function should find two numbers in the input array that add up to the target.
            Identify the line that's misplaced and select the correct implementation to fix the logic error.
            Pay attention to how the dictionary is used to optimize the solution.`
    )
    .build(),

  new GameBuilder()
    .setTitle("LeetCode 3: Longest Substring Without Repeating Characters")
    .setHref("leetcode-longest-substring")
    .setTags([kt.strings, kt.algorithms])
    .setSynopsis(
      "Find the length of the longest substring without repeating characters."
    )
    .setLevel(4)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "def length_of_longest_substring(s):",
            StateEnum.NORMAL,
            ""
          ),
          new CodeLine("    char_index = {}", StateEnum.NORMAL, ""),
          new CodeLine("    max_length = start = 0", StateEnum.NORMAL, ""),
          new CodeLine(
            "    for i, char in enumerate(s):",
            StateEnum.NORMAL,
            ""
          ),
          new CodeLine("        if char in char_index:", StateEnum.NORMAL, ""),
          new CodeLine(
            "            start = char_index[char] + 1",
            StateEnum.ERROR,
            "This should update 'start', not assign to it"
          ),
          new CodeLine(
            "            start += 1",
            StateEnum.WRONG,
            "Incorrect: doesn't use the character's last position"
          ),
          new CodeLine(
            "            start = max(start, char_index[char] + 1)",
            StateEnum.CORRECT,
            "Correct update of 'start'",
            10
          ),
          new CodeLine(
            "            start = i",
            StateEnum.WRONG,
            "Incorrect: resets to current index, losing previous progress"
          ),
          new CodeLine("        char_index[char] = i", StateEnum.NORMAL, ""),
          new CodeLine(
            "        max_length = max(max_length, i - start + 1)",
            StateEnum.NORMAL,
            ""
          ),
          new CodeLine("    return max_length", StateEnum.NORMAL, ""),
          new CodeLine(
            "print(length_of_longest_substring('abcabcbb'))",
            StateEnum.NORMAL,
            ""
          ),
        ],
        "python"
      )
    )
    .setText(
      `In this LeetCode-style problem, you need to find the length of the longest substring without repeating characters.
            Identify the line with a logical error and select the correct implementation to fix it.
            Pay attention to how the 'start' variable is updated and how it affects the calculation of substring length.`
    )
    .build(),

  new GameBuilder()
    .setTitle("LeetCode 53: Maximum Subarray")
    .setHref("leetcode-maximum-subarray")
    .setTags([kt.arrays, kt.dynamicProgramming])
    .setSynopsis("Find the contiguous subarray with the largest sum.")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("def max_subarray(nums):", StateEnum.NORMAL, ""),
          new CodeLine("    if not nums:", StateEnum.NORMAL, ""),
          new CodeLine("        return 0", StateEnum.NORMAL, ""),
          new CodeLine(
            "    current_sum = max_sum = nums[0]",
            StateEnum.NORMAL,
            ""
          ),
          new CodeLine("    for num in nums[1:]:", StateEnum.NORMAL, ""),
          new CodeLine(
            "        current_sum = current_sum + num",
            StateEnum.ERROR,
            "This line has a logical error"
          ),
          new CodeLine(
            "        current_sum = max(0, current_sum + num)",
            StateEnum.WRONG,
            "Incorrect: resets to 0 instead of the current number"
          ),
          new CodeLine(
            "        current_sum = max(num, current_sum + num)",
            StateEnum.CORRECT,
            "Correct implementation of Kadane's algorithm",
            10
          ),
          new CodeLine(
            "        current_sum += num",
            StateEnum.WRONG,
            "Incorrect: always adds the number, possibly leading to negative sums"
          ),
          new CodeLine(
            "        max_sum = max(max_sum, current_sum)",
            StateEnum.NORMAL,
            ""
          ),
          new CodeLine("    return max_sum", StateEnum.NORMAL, ""),
          new CodeLine(
            "print(max_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))",
            StateEnum.NORMAL,
            ""
          ),
        ],
        "python"
      )
    )
    .setText(
      `In this LeetCode-style problem, you need to implement Kadane's algorithm to find the maximum sum of a contiguous subarray.
            Identify the line with a logical error and select the correct implementation to fix it.
            Pay attention to how the current sum is updated in each iteration and how it affects the overall maximum sum.`
    )
    .build(),
  new GameBuilder()
    .setTitle("LeetCode 20: Valid Parentheses")
    .setHref("leetcode-valid-parentheses")
    .setTags([kt.strings, kt.stacks])
    .setSynopsis(
      "Determine if the input string has valid parentheses ordering."
    )
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("def is_valid(s):", StateEnum.NORMAL, ""),
          new CodeLine("    stack = []", StateEnum.NORMAL, ""),
          new CodeLine(
            "    mapping = {')': '(', ']': '[', '}': '{'}",
            StateEnum.NORMAL,
            ""
          ),
          new CodeLine("    for char in s:", StateEnum.NORMAL, ""),
          new CodeLine("        if char in mapping:", StateEnum.NORMAL, ""),
          new CodeLine(
            "            top_element = stack.pop() if stack else '#'",
            StateEnum.ERROR,
            "This line should check if stack is empty before popping"
          ),
          new CodeLine(
            "            if mapping[char] != top_element:",
            StateEnum.WRONG,
            "Incorrect: should pop after checking if stack is empty"
          ),
          new CodeLine(
            "            top_element = stack.pop() if stack else '#'",
            StateEnum.CORRECT,
            "Correct: safely handles empty stack case",
            10
          ),
          new CodeLine(
            "            top_element = stack[-1] if stack else '#'",
            StateEnum.WRONG,
            "Incorrect: doesn't remove the element from the stack"
          ),
          new CodeLine(
            "            if mapping[char] != top_element:",
            StateEnum.NORMAL,
            ""
          ),
          new CodeLine("                return False", StateEnum.NORMAL, ""),
          new CodeLine("        else:", StateEnum.NORMAL, ""),
          new CodeLine("            stack.append(char)", StateEnum.NORMAL, ""),
          new CodeLine("    return len(stack) == 0", StateEnum.NORMAL, ""),
          new CodeLine("print(is_valid('()[]{}'))", StateEnum.NORMAL, ""),
        ],
        "python"
      )
    )
    .setText(
      `In this LeetCode-style problem, you need to implement a function that determines if a string has valid parentheses ordering.
            Identify the line with a logical error and select the correct implementation to fix it.
            Pay attention to how the stack is used and how edge cases (like an empty stack) are handled.`
    )
    .build(),

  new GameBuilder()
    .setTitle("LeetCode 70: Climbing Stairs")
    .setHref("leetcode-climbing-stairs")
    .setTags([kt.dynamicProgramming])
    .setSynopsis(
      "Calculate the number of ways to climb n stairs, taking 1 or 2 steps at a time."
    )
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("def climb_stairs(n):", StateEnum.NORMAL, ""),
          new CodeLine("    if n <= 2:", StateEnum.NORMAL, ""),
          new CodeLine("        return n", StateEnum.NORMAL, ""),
          new CodeLine("    dp = [0] * (n + 1)", StateEnum.NORMAL, ""),
          new CodeLine("    dp[1] = 1", StateEnum.NORMAL, ""),
          new CodeLine("    dp[2] = 2", StateEnum.NORMAL, ""),
          new CodeLine(
            "    for i in range(3, n):",
            StateEnum.ERROR,
            "This loop doesn't cover all necessary steps"
          ),
          new CodeLine(
            "    for i in range(3, n + 2):",
            StateEnum.WRONG,
            "Incorrect: goes beyond necessary range"
          ),
          new CodeLine(
            "    for i in range(3, n + 1):",
            StateEnum.CORRECT,
            "Correct range to calculate all steps up to n",
            10
          ),
          new CodeLine(
            "    for i in range(1, n):",
            StateEnum.WRONG,
            "Incorrect: starts from 1, overwriting initial values"
          ),
          new CodeLine(
            "        dp[i] = dp[i-1] + dp[i-2]",
            StateEnum.NORMAL,
            ""
          ),
          new CodeLine("    return dp[n]", StateEnum.NORMAL, ""),
          new CodeLine("print(climb_stairs(5))", StateEnum.NORMAL, ""),
        ],
        "python"
      )
    )
    .setText(
      `In this LeetCode-style problem, you need to implement a function that calculates the number of ways to climb n stairs.
            Identify the line with a logical error in the loop range and select the correct implementation to fix it.
            Pay attention to how the dynamic programming array is filled and accessed.`
    )
    .build(),

  new GameBuilder()
    .setTitle("LeetCode 121: Best Time to Buy and Sell Stock")
    .setHref("leetcode-best-time-to-buy-sell-stock")
    .setTags([kt.arrays, kt.dynamicProgramming])
    .setSynopsis(
      "Find the maximum profit from buying and selling a stock once."
    )
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("def max_profit(prices):", StateEnum.NORMAL, ""),
          new CodeLine("    if not prices:", StateEnum.NORMAL, ""),
          new CodeLine("        return 0", StateEnum.NORMAL, ""),
          new CodeLine("    max_profit = 0", StateEnum.NORMAL, ""),
          new CodeLine("    min_price = float('inf')", StateEnum.NORMAL, ""),
          new CodeLine("    for price in prices:", StateEnum.NORMAL, ""),
          new CodeLine(
            "        max_profit = max(price - min_price, max_profit)",
            StateEnum.ERROR,
            "This line updates max_profit before min_price"
          ),
          new CodeLine(
            "        min_price = min(min_price, price)",
            StateEnum.WRONG,
            "Incorrect order: should update max_profit after this"
          ),
          new CodeLine(
            "        min_price = min(min_price, price)",
            StateEnum.CORRECT,
            "Correct order: update min_price before max_profit",
            10
          ),
          new CodeLine(
            "        min_price = price if price < min_price else min_price",
            StateEnum.WRONG,
            "Unnecessarily verbose, less efficient"
          ),
          new CodeLine(
            "        max_profit = max(price - min_price, max_profit)",
            StateEnum.NORMAL,
            ""
          ),
          new CodeLine("    return max_profit", StateEnum.NORMAL, ""),
          new CodeLine(
            "print(max_profit([7,1,5,3,6,4]))",
            StateEnum.NORMAL,
            ""
          ),
        ],
        "python"
      )
    )
    .setText(
      `In this LeetCode-style problem, you need to implement a function that finds the maximum profit from buying and selling a stock once.
            Identify the line with a logical error in the order of operations and select the correct implementation to fix it.
            Pay attention to how the minimum price and maximum profit are updated in each iteration.`
    )
    .build(),
];
