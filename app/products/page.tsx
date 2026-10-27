type Payment = {
      id: string
        amount: number
          status: string
           email: string
}

async function getData():  Promise<Payment[]> {
  return [
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
    }, as Payment,
  ]
}