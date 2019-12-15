class FlyweightHouse {
  constructor(sharedState) {
    this.sharedState = sharedState;
  }

  operation(uniqueState) {
    const s = JSON.stringify(this.sharedState);
    const u = JSON.stringify(uniqueState);
    console.log(`Flyweight: Displaying shared (${s}) state.`);
    console.log(`Flyweight: Displaying unique (${u}) state.`);
  }
}

class HouseFlyweightFactory {

  static getKey(obj) {
    return Object.values(obj).join('*')
  }

  constructor(initialFlyweights) {
    this.cache = {}

    initialFlyweights.forEach(flyweight => {
      const key = HouseFlyweightFactory.getKey(flyweight)
      this.cache[key] = new FlyweightHouse(flyweight)
    })
  }

  getFlyweight(sharedState) {
    const key = HouseFlyweightFactory.getKey(sharedState)

    if (!(key in this.cache)) {
      console.log("Can't find existing flyweight. Creating new one.");
      this.cache[key] = new FlyweightHouse(sharedState)
    } else {
      console.log('Reusing existing flyweight.');
    }

    return this.cache[key]
  }

  listFlyweight() {
    const count = Object.keys(this.cache).length
    console.log(`HouseFlyweightFactory: I have ${count} flyweights`);

    Object.keys(this.cache).forEach((key, index) => {
      console.log(`Flyweight key ${index + 1}: ${key}`);
    })
  }
}

const houseFlyweightFactory = new HouseFlyweightFactory([
  {
    windowMaterial: 'PLASTIC',
    doorMaterial: 'WOOD',
    wallMaterial: 'BRICK',
  },
  {
    windowMaterial: 'WOOD',
    doorMaterial: 'WOOD',
    wallMaterial: 'FOAM_CONCRETE',
  }
])
houseFlyweightFactory.listFlyweight()


function clientCode(purchaseData) {
  console.log('Try to create a house');
  const house = houseFlyweightFactory.getFlyweight({
    windowMaterial: purchaseData.windowMaterial,
    doorMaterial: purchaseData.doorMaterial,
    wallMaterial: purchaseData.wallMaterial
  })

  house.operation({
    customerFirstName: purchaseData.firstName,
    customerLastName: purchaseData.lastName
  })
}

clientCode({
  firstName: 'John',
  lastName: 'Doe',
  windowMaterial: 'PLASTIC',
  doorMaterial: 'WOOD',
  wallMaterial: 'BRICK'
})
clientCode({
  firstName: 'John',
  lastName: 'Doe',
  windowMaterial: 'WOOD',
  doorMaterial: 'WOOD',
  wallMaterial: 'FOAM_CONCRETE'
})
clientCode({
  firstName: 'Sam',
  lastName: 'Johnson',
  windowMaterial: 'WOOD',
  doorMaterial: 'WOOD',
  wallMaterial: 'FOAM_CONCRETE'
})
clientCode({
  firstName: 'Sam',
  lastName: 'Johnson',
  windowMaterial: 'ROYAL PLASTIC',
  doorMaterial: 'ROYAL WOOD',
  wallMaterial: 'ROYAL BRICK'
})

houseFlyweightFactory.listFlyweight()
