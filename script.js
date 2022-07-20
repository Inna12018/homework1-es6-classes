// Задание

// Реализовать класс Employee, в котором будут следующие свойства - name (имя), age (возраст), salary (зарплата).
//  Сделайте так, чтобы эти свойства заполнялись при создании объекта.
// Создайте геттеры и сеттеры для этих свойств.
// Создайте класс Programmer, который будет наследоваться от класса Employee, и у которого будет свойство lang (список языков).
// Для класса Programmer перезапишите геттер для свойства salary. Пусть он возвращает свойство salary, умноженное на 3.
// Создайте несколько экземпляров обьекта Programmer, выведите их в консоль.


// Примечание
// Задание должно быть выполнено на "чистом" Javascript без использования библиотек типа jQuery или React.




const Programmer = {
    get name () { 
        return `${this._name}`;
    },
    get age () { 
        return this._age;
    },
    get salary () {
        if(this._salary){
            return this._salary *3;
        }else{
            return this._salary ;
        }
    },
};

const employee = {
    _name: 'Ivan',
    _age: '25',
    _salary: 5000,
   
};

employee.__proto__ = Programmer;

console.log('employee',employee);
console.log('employee.name',employee.name);
console.log('employee.age',employee.age);
console.log('employee.salary',employee.salary);
