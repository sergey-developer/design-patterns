/*
  Example 1
*/

class EventsObserver {
  constructor() {
    this.listeners = {}
  }

  on(type, listener) {
    if (!(type in this.listeners)) {
      this.listeners[type] = []
    }
    this.listeners[type].push(listener)
  }

  off(type, listener) {
    if (type in this.listeners) {
      this.listeners[type] = this.listeners[type].filter(l => l !== listener)
    }
  }

  trigger(type, args) {
    if (type in this.listeners) {
      this.listeners[type].forEach(listener => {
        listener(args)
      })
    }
  }
}

const eventsObserver = new EventsObserver()

function showNotification(data) {
  // console.log(`You copied next data: ${data.firstName} ${data.lastName}.`)
}

function doSomethingWithCopiedData(data) {
  // console.log(`do something with - ${data.firstName} ${data.lastName}`)
}

eventsObserver.on('copy', showNotification)
eventsObserver.on('copy', doSomethingWithCopiedData)
// console.log(eventsObserver.listeners, 'listeners');

eventsObserver.trigger('copy', {firstName: 'John', lastName: 'Doe'})

eventsObserver.off('copy', doSomethingWithCopiedData)
// console.log(eventsObserver.listeners, 'listeners');


/*
 Example 2
 */

function Observable() {}
Observable.prototype = {
  observers: [],
  addObserver(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer)
    }
  },
  removeObserver(observer) {
    this.observers = this.observers.filter(o => o !== observer)
  },
  notifyObservers(data) {
    this.observers.forEach(observer => {
      observer.update(data)
    })
  }
};

class User extends Observable {
  constructor(data) {
    super()
    this.firstName = data.firstName
    this.lastName = data.lastName
    this.age = data.age
  }

  update(updates) {
    Object.keys(updates).forEach(key => {
      this[key] = updates[key]
    });

    this.notifyObservers(updates)
  }
}

class NotificationObserver {
  constructor(notification) {
    this.notification = notification;
  }

  update(userData) {
    console.log(`Notification - ${this.notification}, was sent to ${userData.firstName} ${userData.lastName}`);
  }
}

class HistoryObserver {
  constructor() {
    this.updatesHistory = []
  }

  update(userData) {
    this.updatesHistory.push(userData)

    let message = 'Last update: '
    const lastUpdate = this.updatesHistory[this.updatesHistory.length - 1]
    Object.keys(lastUpdate).forEach(key => {
      message += `fieldName: ${key}, value: ${lastUpdate[key]}. `
    })

    console.log('Last user update: ', message);
  }
}

const user = new User({
  firstName: 'John',
  lastName: 'Doe',
  age: 30
});
const notificationObserver1 = new NotificationObserver('Your data was updated successfully!');
const notificationObserver2 = new NotificationObserver('You are awesome!');
const historyObserver = new HistoryObserver();

user.addObserver(notificationObserver1);
user.addObserver(notificationObserver2);
user.addObserver(historyObserver);

user.update({
  firstName: 'Jack',
  lastName: 'Daniels'
});

user.update({
  firstName: 'Spider',
  lastName: 'Man',
  age: 20
});

user.update({
  firstName: 'Peter',
  lastName: 'Parker',
  age: 25
});


