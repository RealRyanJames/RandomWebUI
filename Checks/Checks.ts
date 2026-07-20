export type EMPTY = string;

export function Empty(str: EMPTY) {
  return str == "";
}

export function isZero(n1: number, n2: number): any {
  return n2 === 0 ? "Divide by Zero" : n1 / n2;
}
