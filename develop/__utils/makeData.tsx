import * as React from "react";
import * as namor from "namor";

function range(len: number): Array<number> {
  const arr: Array<number> = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

function newPerson(): object {
  const statusChance: number = Math.random();
  return {
    id: namor.generate({ words: 1, saltLength: 1, saltType: "number" }),
    firstName: namor.generate({ words: 1, saltLength: 0 }),
    lastName: namor.generate({ words: 1, saltLength: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? "relationship"
        : statusChance > 0.33
          ? "complicated"
          : "single",
  };
};

export default function makeData<T>(lens: Array<number>): T {
  const makeDataLevel: Function = (depth: number = 0): object | Function => {
    const len: number = lens[depth]
    return range(len).map((d: number) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
        rowContentDetail: <p className="details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      }
    })
  }

  return makeDataLevel();
}
