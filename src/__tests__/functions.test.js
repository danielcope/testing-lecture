const functions = require('../functions')

//first arg is a description, 
//second arg with be what is expected

//This test will return a successful test
test('function add should add two numbers', () =>{
  expect(functions.add(1,2)).toBe(3)
})

test('function add should return a number', () => {
  expect(functions.add(2,9)).not.toBeNaN()
})

//toBe will not work in this case. When comparing arrays, you will want to use toEqual
test('reference types are special', () => {
  expect([12]).toEqual([12])
})

test('sayHello returns hello', () => {
  // expect(functions.sayHello()).toBe('hello')
  expect(functions.sayHello()).not.toBe('rawr')
})

test('object assignment should add correct properties and values', ()=> {
  const data = {
    name:'andrew'
  }

  data.age = 99
  data.favorites = {
    food: 'pizza'
  }

  expect(data).toEqual({
    name:'andrew',
    age:99,
    favorites:{
      food:'pizza'
    }
  })
})

test('username should contain Leanne', async ()=> {
  expect.assertions(1)

  //This is pulling the data that our axios request in the functions.js is getting and adding it to a variable. This is an object.
  const data = await functions.getUser();
  
  //data.name is pulling out the name in the object
  expect(data.name).toEqual('Leanne Graham')
});



// This will be a group of tests related to the data in bank account

let bankAccount = {
  balance: 1000,
  depositMoney(amount) {
  this.balance += amount;
  return this.balance
},
withdrawMoney(amount) {
  this.balance -= amount;
  return this.balance
  },
  };


  describe('bank account methods & properties', () => {
    // First, you want to set the balance to zero


    //This code will runn before each test runs
    beforeEach(() => {
      bankAccount.balance = 1000
    })

    test('initial balance should be 1000', () => {
      expect(bankAccount.balance).toEqual(1000)
    })

    test('depositing 9000 should update balance to 10,000', () => {
      expect(bankAccount.depositMoney(9000)).toEqual(10000)
    })

  })