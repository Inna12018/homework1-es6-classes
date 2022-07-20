// Задание

// Реализовать класс Employee, в котором будут следующие свойства - name (имя), age (возраст), salary (зарплата).
//  Сделайте так, чтобы эти свойства заполнялись при создании объекта.
// Создайте геттеры и сеттеры для этих свойств.
// Создайте класс Programmer, который будет наследоваться от класса Employee, и у которого будет свойство lang (список языков).
// Для класса Programmer перезапишите геттер для свойства salary. Пусть он возвращает свойство salary, умноженное на 3.
// Создайте несколько экземпляров обьекта Programmer, выведите их в консоль.


// Примечание
// Задание должно быть выполнено на "чистом" Javascript без использования библиотек типа jQuery или React.

class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    getName() {
        return `${this.name}`;
    }

    getSalary() {
        return this.salary;
    }
}

class Programmer extends Employee {
    constructor(name, age, salary, lang = []) {
        super(name, age, salary);
        this.lang = lang;

    }

    getSalary() {
        return this.salary ? this.salary * 3 : this.salary;
    }

}

const programmer = new Programmer('Ivan', 34, 5000, ['js', 'c++', 'java']);
console.log('programmer', programmer);
console.log('calcSalary', programmer.getSalary());

const programmer1 = new Programmer('Irina', 24, 4000, ['js', 'java']);
console.log('programmer1', programmer1);
console.log('calcSalary', programmer1.getSalary());

const programmer2 = new Programmer('Oleg', 42, 3000, ['js', 'c++']);
console.log('programmer2', programmer2);
console.log('calcSalary', programmer2.getSalary());