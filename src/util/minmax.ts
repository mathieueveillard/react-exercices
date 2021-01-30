export function minmax(min: number, max: number) {
  return function (n: number): number {
    return Math.max(min, Math.min(max, n));
  };
}
