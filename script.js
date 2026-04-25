//  -- 1 --
//1) написати обєкт студента який буде виводити імя, спеціальнісь, середній
//бал і кількість пропущених занять

//function showStudentInfo() {
//    console.log(
//        "Ім'я: " + this.name +
//        "\nСпеціальність: " + this.specialty +
//        "\nСередній бал: " + this.averageGrade +
//        "\nПропущено занять: " + this.missedClasses
//    );
//}

//const student = {
//    name: "Іван",
//    specialty: "Програмування",
//    averageGrade: 90,
//    missedClasses: 3
//};

//showStudentInfo.call(student);

//2) написати метод який буде виводити цю інформацію

// метод: call()

//3) написати три варіанти студентів
//4) прикріпити знначення за допомогою call apply bind

/*function showStudentInfo(course, university) {
    console.log(
`Ім'я: ${this.name}
Спеціальність: ${this.specialty}
Середній бал: ${this.averageGrade}
Пропущено занять: ${this.missedClasses}
Курс: ${course}
Університет: ${university}`
    );
}

// Три об'єкти студентів
const student1 = {
    name: "Іван",
    specialty: "Програмування",
    averageGrade: 90,
    missedClasses: 3
};

const student2 = {
    name: "Марія",
    specialty: "Дизайн",
    averageGrade: 99,
    missedClasses: 6
};

const student3 = {
    name: "Олег",
    specialty: "Кібербезпека",
    averageGrade: 80,
    missedClasses: 2
};

// CALL (аргументи передаються через кому)
showStudentInfo.call(student1, 2, "КНУ");

// APPLY (аргументи передаються масивом)
showStudentInfo.apply(student2, [3, "ЛНУ"]);

// BIND (створює нову функцію)
const showOlegInfo = showStudentInfo.bind(student3, 4, "КПІ");
showOlegInfo();*/

// -- 2 --

//Написати дві кнопки і закріпити на них функції
//при натисканні на кнопку html - має видати коротке визначення що це таке
//при натисканні на кнопку css - має видати коротке визначення що це таке

//function showHTML() {
//    alert("HTML — це мова розмітки для створення структури веб-сторінок.");
//}

//function showCSS() {
//    alert("CSS — це мова стилів для оформлення та дизайну веб-сторінок.");
//}

// -- 3 --

//Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
//функція має повертати назву товару і вартість
//перевірити на варіантах:
//1) banana 30, 4,5
//2) cherry 58, 1,3
//3) jrange 89. 3,4

/*function shop(product, pricePerKg, quantity) {
    let totalCost = pricePerKg * quantity;

    return Товар: ${product}, Вартість: ${totalCost} грн;
}

// Перевірка
console.log(shop("banana", 30, 4.5));                   
console.log(shop("cherry", 58, 1.3));
console.log(shop("orange", 89, 3.4));*/