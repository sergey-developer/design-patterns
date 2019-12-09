class PaySystemAccount {
    pay(price) {
      if (this.canPay(price)) {
        console.log(`Pay by - ${this.name}`)
      } else if (this.incomer) {
        console.log(`Can not pay by - ${this.name}`)
        console.log(`Next pay system - ${this.incomer.name}`)
        this.incomer.pay(price)
      } else {
        console.log('Not enough money')
      }
    }

    canPay(price) {
      return this.balance >= price
    }

    setNext(account) {
      this.incomer = account
      return account
    }
}

class MasterCard extends PaySystemAccount {
  constructor(balance) {
    super()
    this.name = 'Master Card'
    this.balance = balance
  }
}

class Paypal extends PaySystemAccount {
  constructor(balance) {
    super()
    this.name = 'Paypal'
    this.balance = balance
  }
}

class Qiwi extends PaySystemAccount {
  constructor(balance) {
    super()
    this.name = 'Qiwi'
    this.balance = balance
  }
}

const masterCard = new MasterCard(60)
const paypal = new Paypal(10)
const qiwi = new Qiwi(120)

masterCard
  .setNext(paypal)
  .setNext(qiwi)

masterCard.pay(70)