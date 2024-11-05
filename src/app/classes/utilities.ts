export class Utilities {
  processArray(stringArray: string): number[] | null {
    let result: number[] | null = null;
    const array = stringArray
      .split(',')
      .map((num) => parseFloat(num.trim()))
      .filter((num) => !isNaN(num));

    if (array.length > 0) {
      result = array;
    }
    return result;
  }
}
