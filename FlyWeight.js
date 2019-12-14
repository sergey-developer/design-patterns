// Flyweight class
class Auto {
  constructor(model) {
    this.model = model
  }
}

class AutoFactory {
  constructor(model) {
    this.cachedModels = {}
  }

  create(model) {
    const model = this.cachedModels[model]
    if (model) {
      return model
    }

    this.cachedModels[model] = new Auto(model)
    return this.cachedModels[model]
  }
}