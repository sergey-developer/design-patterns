class Car {
  constructor() {
    this.hasChromium = false
    this.hasTurbo = false
    this.hasSpoiler = false
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car()
  }

  addChromium(hasChromium) {
    this.car.hasChromium = hasChromium
    return this
  }

  addTurbo(hasTurbo) {
    this.car.hasTurbo = hasTurbo
    return this
  }

  addSpoiler(hasSpoiler) {
    this.car.hasSpoiler = hasSpoiler
    return this
  }

  updateStereoSystem(stereoSystem) {
    this.car.stereoSystem = stereoSystem
    return this
  }

  build() {
    return this.car
  }
}

const car = new CarBuilder()
  .addChromium(true)
  .addTurbo(true)
  .addSpoiler(true)
  .updateStereoSystem('premium')
  .build()

console.log(car);