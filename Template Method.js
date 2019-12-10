class BurgerBuilder {
  build() {
    this.addBread()
    this.addCheese()
    this.addMeat()
    this.addKetchup()
  }
}

class CustomBurgerBuilder extends BurgerBuilder {
  addBread() {
    console.log('Adding custom bread')
  }

  addCheese() {
    console.log('Adding custom cheese')
  }

  addMeat() {
    console.log('Adding a little bit meat')
  }

  addKetchup() {
    console.log('Adding ketchup diluted with water')
  }
}

class RoyalBurgerBuilder extends BurgerBuilder {
  addBread() {
    console.log('Adding the best bread')
  }

  addCheese() {
    console.log('Adding the best cheese')
  }

  addMeat() {
    console.log('Adding a large piece of meat')
  }

  addKetchup() {
    console.log('Adding the best ketchup')
  }
}

const customBurger = new CustomBurgerBuilder()
const royalBurger = new RoyalBurgerBuilder()

customBurger.build()
royalBurger.build()