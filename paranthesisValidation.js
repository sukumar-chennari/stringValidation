let s = prompt("Enter the paranthesis: ");

function validate(s) {
  const stack = [];
  const opening = "({[";
  const closing = ")}]";
  let paran = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (opening.includes(char)) {
      stack.push(char);
    } else if (closing.includes(char)) {
      if (stack.length === 0 || stack.pop() !== paran[char]) return false;
    }
  }
  return true;
}

console.log(validate(s));
