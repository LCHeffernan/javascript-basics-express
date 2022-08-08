/* eslint-disable prettier/prettier */
const createPerson = (name, age) => {
  return {
    name,
    age
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return Boolean(object[property]);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  const array = [];
  for (let i = 0; i < people.length; i+=1) {
    array[i] = people[i].age;
  }
  return array;
};

const findByName = (name, people) => {
  for (let i = 0; i < people.length; i+=1) {
    if (people[i].name === name) {
      return people[i];
    }
  }
};

const findHondas = cars => {
  const array = [];
  for (let i = 0; i < cars.length; i+=1) {
    if (cars[i].manufacturer === 'Honda') {
      array.push(cars[i]);
    }
  }
  return array;
};

const averageAge = people => {
  let sum = 0;
  for (let i = 0; i < people.length; i+=1) {
    sum += people[i].age;
  }
  return sum / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce(otherName) {
      return (
        `Hi ${otherName}, my name is ${this.name} and I am ${this.age}!`
      );
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
