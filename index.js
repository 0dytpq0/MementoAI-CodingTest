const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

// 입출력 예 arr = [4,3,2,1], [10] return = [4,3,2], [-1]

// 가장 작은 수를 제거하는 함수
const removeMinNumber = (arr) => {
  // 전달된 arr의 값들 중 가장 작은 값을 제거
  const removedArr = [...arr];

  // 1번 풀이 : 배열을 3번 순회하므로 시간 복잡도 = O(n) { O(n) * 3 ) }
  removedArr.splice(arr.indexOf(Math.min(...arr)), 1);

  // 2번 풀이 : 배열 순회를 줄인 풀이로 시간 복잡도 = O(n log n) { O(n log n) + O(1) }
  // 배열이 입력된 상태에서 틀정값만 삭제 된 상태로 리턴되어야 한다면 이 풀이는 맞지 않은 듯 싶다.
  // ex) input : [3,1,2,4] return [3,2,4] 여야 할 때 sort를 진행하면 return값이 달라지기에 틀린 풀이가 될 수 있을 듯 하다.
  // removedArr.sort((a, b) => b - a);
  // removedArr.pop();

  const result = checkArrLength(removedArr);

  return result;
};

// arr의 길이에 따라 결과값을 리턴해주는 함수
const checkArrLength = (arr) => {
  // arr의 길이가 0 이하라면 1 아니라면 arr 리턴
  const result = arr.length <= 0 ? [-1] : arr;

  return result;
};

// 1. 콘솔창으로 값을 입력받는 경우.
const rl = readline.createInterface({ input, output });
rl.question(
  "작은 수를 제거할 값들을 입력해주세요. ex) 4,3,2,1 : ",
  (numbers) => {
    // 입력 받은 값을 Number타입의 값이 담긴 배열로
    const arr = numbers.split(",").map((num) => Number(num.trim()));
    const result = removeMinNumber(arr);
    console.log("결과 : ", result);
    rl.close();
  }
);

// 2. 입력값이 미리 제공되는 경우
function main(arr) {
  const result = removeMinNumber(arr);

  return result;
}

const testArr1 = [4, 3, 2, 1];
const testArr2 = [10];

const result = main(testArr1);
