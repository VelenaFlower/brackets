module.exports = function check(str, bracketsConfig) {
  // your solution
    let newStr,
        lastBracket,
        stack = [];

    newStr = str.split('');
    newStr.forEach((bracket, index) => {
        if (index === 0) {
            stack.push(bracket);
            return;
        }
        lastBracket = bracketsConfig.find(typeBracket => stack[stack.length - 1] === typeBracket[0]);
        lastBracket = lastBracket && lastBracket[1];
        if (bracket !== lastBracket) {
            stack.push(bracket);
        } else stack.pop();
    });

    return stack.length === 0;
};
