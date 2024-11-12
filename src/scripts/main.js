'use strict';

const people = [...document.querySelectorAll('li')];

function sortBySalary(arr) {
  const salaries = arr.map((person) => {
    const salary = person.getAttribute('data-salary');

    return +salary.replace(/[$,]/g, '');
  });

  return salaries.sort((person1, person2) => person2 - person1);
}

function makeObj(arr) {
  const arrPeople = [];

  for (const person of arr) {
    const objPerson = {};

    objPerson.name = person.textContent.trim();
    objPerson.position = person.getAttribute('data-position');
    objPerson.salary = person.getAttribute('data-salary');
    objPerson.age = person.getAttribute('data-age');

    arrPeople.push(objPerson);
  }

  return arrPeople;
}

sortBySalary(people);
makeObj(people);
