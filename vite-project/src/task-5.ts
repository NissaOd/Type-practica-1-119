interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

function createUser({ name, age }: { name: string; age: number }): User {
  return {
    name,
    age,
    isAdmin: false,
  };
}

console.log(createUser({ name: "Alice", age: 30 }));