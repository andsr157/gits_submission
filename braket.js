const bracketCheck = (input) => {
    const brackets = {
      '(': ')',
      '[': ']',
      '{': '}',
    };
    const allowBraket = ['(', ')', '{', '}', '[', ']'];
    const stack = [];
  
    for (const bracket of input) {
      if (!allowBraket.includes(bracket)) {
        return 'character tidak diperbolehkan';
      } else {
        if (brackets[bracket]) {
          stack.push(bracket);
        } else {
          const closedBracket = stack.pop();
          if (!closedBracket || brackets[closedBracket] !== bracket) {
            return 'NO';
          }
        }
      }
    }
  
    return stack.length === 0 ? 'YES' : 'NO';
  };
  
  console.log(bracketCheck("{[()]}")); // Output: YES
  console.log(bracketCheck("{[(])}")); // Output: NO
  console.log(bracketCheck("{(([])[])[]}")); // Output: YES
  console.log(bracketCheck("{/([])[])[]}")); // Output: character tidak diperbolehkan
  