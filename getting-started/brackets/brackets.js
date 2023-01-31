import { DataStack } from "../stack-and-queue/dataStack";

export function brackets(str) {
  let controlStr = new DataStack([]);

  for (let char of str) {
    if (char == "(") {
      controlStr.put(char);
    }

    if (char == "[") {
      controlStr.put(char);
    }

    if (char == "{") {
      controlStr.put(char);
    }

    if (char == ")") {
      let lastChar = controlStr.get();
      if (lastChar != "(") {
        return false;
      }
    }

    if (char == "]") {
      let lastChar = controlStr.get();
      if (lastChar != "[") {
        return false;
      }
    }

    if (char == "}") {
      let lastChar = controlStr.get();
      if (lastChar != "{") {
        return false;
      }
    }
  }

  return controlStr.length === 0;
}
