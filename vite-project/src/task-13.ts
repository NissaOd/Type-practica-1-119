function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

type Action = {
  type: "increment" | "decrement";
};

console.log(reducer(0, { type: "increment" })); // 1
console.log(reducer(1, { type: "increment" })); // 2
console.log(reducer(2, { type: "decrement" })); // 1
console.log(reducer(5, { type: "decrement" })); // 4