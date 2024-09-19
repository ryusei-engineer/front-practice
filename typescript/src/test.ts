export const test = () => {
  const name:string = "mike";
  const age:number = 25;
  const isStudent:boolean = false;
  const hobbies:string[] = ["reading", "coding"]; //文字列の配列

  const reverseArray = (arr:string[]): string[] => {
    const reverseArray:string[] = [];
    let index:number = arr.length - 1;
    while(index >= 0){
      reverseArray.push(arr[index]);
      index--;
    }
    return reverseArray;
  }

  console.log(reverseArray(["a", "b", "c"]));
}