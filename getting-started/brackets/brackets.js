import { DataStack } from "../stack-and-queue/dataStack";

export function brackets(str) {
  let controlStr = new DataStack([]);

  const matcher = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of str) {
    if (Object.keys(matcher).includes(char)) {
      let lastChar = controlStr.get();
      if (lastChar !== matcher[char]) {
        return false;
      }
    } else {
      controlStr.put(char);
    }
  }

  return controlStr.length === 0;
}
