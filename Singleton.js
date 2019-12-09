const Singleton = (function () {
  let instance

  return class Singleton {
    constructor() {
      if (!instance) {
        instance = this
      }

      return instance
    }

    sayHello() {
      console.log('Hello from ' + this.constructor.name)
      Singleton.printNameFromStaticMethod()
    }

    static printNameFromStaticMethod() {
      console.log('Hello from static method of ' + Singleton.name)
    }
  }
})()

const instance = new Singleton()
Object.freeze(instance)

instance.sayHello()
