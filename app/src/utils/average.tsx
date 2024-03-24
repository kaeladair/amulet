export const average = (arr: number[]): number => {
    return arr.reduce((acc, val) => acc + val, 0) / arr.length;
  };
  