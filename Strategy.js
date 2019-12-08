class SortStrategy {
  constructor() {
    this._strategy = undefined
  }

  set strategy(strategy) {
    this._strategy = strategy
  }

  run() {
    return this._strategy.run()
  }
}

class SortByAscendingStrategy {
  constructor(data) {
    this._data = data || [];
  }

  run() {
    return this._data.sort((a, b) => a - b)
  }
}

class SortByDescendingStrategy {
  constructor(data) {
    this._data = data || [];
  }

  run() {
    return this._data.sort((a, b) => a + b)
  }
}

const arr = [1,2,3,4,5,6,7,8,9,10];

const sortStrategy = new SortStrategy();

sortStrategy.strategy = new SortByAscendingStrategy(arr)
console.log('Sort by ascending: ' + sortStrategy.run())

sortStrategy.strategy = new SortByDescendingStrategy(arr)
console.log('Sort by descending: ' + sortStrategy.run())