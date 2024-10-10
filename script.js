// Example 1


// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }

// Car.prototype.getinfo = function(){
//     console.log(`mashina nomi: ${this.make}, model: ${this.model}, yili: ${this.year}`);
// }

// const car1 = new Car("Bugatti", "Chiron", 2016)



// car1.getinfo()




// Example 2

// const a = true
// const b = false

// function Student(name, age, grade) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
// }

// Student.prototype.isPassed = function(){
//     if (this.grade >= 60) {
//         console.log(this);
//         console.log(a);
//     }
//     else{
//         console.log(this);
//         console.log(b);
//     }
    
// }

// const student1 = new Student("Islombek", 34, 52)
// student1.isPassed()


// Example 3


// function Bank(accountnumber, balance, deposit, withdraw) {
//     this.accountnumber = accountnumber;
//     this.balance = balance;
//     // this.deposit = deposit;
//     // this.withdraw = withdraw;
// }

// Bank.prototype.deposit = function(add){
//     console.log(this.balance += add);
//     console.log(`Siz ${add} ming so'm depozit kiritdingiz. Hisobingiz yangilandi: ${this.balance} ming so'm.`);
// }


// Bank.prototype.withdraw = function(subtract){
//     console.log(this.balance -= subtract);
//     console.log(`Siz ${subtract} ming so'm pul chiqardingiz. Sizning hisobingizda ${this.balance} ming so'm bor.`);
// }

// const bank1 = new Bank('4613511516', +prompt("Hisobingizda necha pul bor?"))

// console.log(`Sizning hisobingizda ${bank1.balance} ming so'm bor.`);
// bank1.deposit(+prompt("Qancha pul kiritmoqchisiz?"))
// bank1.withdraw(+prompt("Qancha pul olmoqchisiz?"))

// console.log(` Endi sizning hisobingizda ${bank1.balance} ming so'm bor.`);



// Example 4




// function Power(a) {
//     this.number = a
// }

// Power.prototype.kvadrati = function () {
//     const squaredValue = this.number ** 2;
//     console.log(squaredValue);
//     console.log(`${this.number} sonining kvadrati ${squaredValue} ga teng.`);
// }

// const kvadrati1 = new Power(+prompt("Son kiriting: "))

// kvadrati1.kvadrati()






// Example 5




// function Sum() {
//     this.sum = 0;                 
//     this.number = [1, 2, 3, 9, 4, 8];     
// }

// Sum.prototype.sum1 = function () {
//     this.number.forEach((num) => {
//         this.sum += num;          
//     });
    
//     console.log(this.sum);        
// }

// const sum1 = new Sum();
// sum1.sum1();                     
