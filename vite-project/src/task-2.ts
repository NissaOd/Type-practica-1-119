type Obj = { amount: number; currency: "USD" | "EUR" | "UAH" };

let object: Obj = {
  amount: 100,
  currency: "USD",
};

function convertCurrency({ amount, currency }: Obj): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency(object);