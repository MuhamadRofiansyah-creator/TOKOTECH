type Payment = {
      id: string
        amount: number
          status: string
           email: string
}

async function getData():  Promise<Payment[]> {
  return [
    {},
  ]
}