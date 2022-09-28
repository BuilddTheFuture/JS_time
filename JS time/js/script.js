'use strict';

// let date = new Date(); // объект Date, с пом-ю которого осущ-я манипуляции с датами

// console.log(date.getFullYear()); // год
// console.log(date.getMonth());    // месяц
// console.log(date.getDate());     // день

// console.log(date.getHours());    // часы
// console.log(date.getMinutes());  // минуты
// console.log(date.getSeconds());  // секунды

// function addZero(num) {
//     if (num >=0 && num <= 9) {
//         return '0' + num;
//     } else {
//         return num;
//     }
// }
// let date = new Date();
// console.log(
// addZero(date.getFullYear()) + '-' + 
// addZero(date.getMonth() + 1) + '-' + 
// addZero(date.getDate()));

// function addZero(num) {
//     if (num <=9) {
//         return '0' + num;
//     } else {
//         return num;
//     }
// }
// let date = new Date();
// console.log(
//     'Точное время - ' + addZero(date.getHours()) + ':' + 
//     addZero(date.getMinutes()) + ':' + addZero(date.getSeconds()) + ' ' + 
//     addZero(date.getDate()) + '.' + addZero(date.getMonth() + '.' + date.getFullYear())
// ) // Точное время - 13:08:30 02.08.2022

// let date = new Date();
// let str = date.getFullYear() + "-" + addZero(date.getMonth()) + "-" + date.getDate();
// function addZero(num) {
//     if (num <= 9) {
//         return '0' + num;
//     } else {
//         return num;
//     }
// }
// console.log(str.split('-').reverse().join('/')) // 12/08/2022

// let date = new Date();
// console.log(date.getDay()); // 1 (понедельник)

// let date = new Date();
// function findRestDay (num) {
//     if (num >= 2 && num <=5) {
//         return 'будний день';
//     } else {
//         return 'выходной';
//     }
// }
// console.log(findRestDay(date.getDay())) // будний день

// let date = new Date();
// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];
// let month = date.getMonth();
// console.log(months[month]) // сен

// let date = new Date();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// let day = date.getDay();
// console.log(days[day]) // ср

// let date = new Date(2022, 8, 14); // отсчет месяцев - с 0!
// let day = date.getDay();
// let days = ['вс', 'пн','вт','ср','чт','пт','сб'];
// console.log(days[day]) // ср

// let date = new Date(2022, 9, 16, 20, 1, 1);
// console.log(date.getTime()); // количество миллисекунд, прошедшее с 1-го января 1970 года по текущий

// let now = new Date();
// let date = new Date(1994, 3, 2, 1, 1, 1);
// let diff = (now.getTime()/2592000000) - (date.getTime()/2592000000);
// console.log(diff); // количество месяцев, прошедшее между рождением и текущим моментом времени

// let date_1 = new Date(2000, 8, 1);
// let date_2 = new Date(2010, 1, 15);
// console.log((date_2 - date_1)/3600000) // разница

// let date = new Date(2018, 12, 35, 11,59,59);
// console.log(date) // Mon Feb 04 2019 11:59:59 - автоматическая корректировка дат

// let date = new Date(2018, 1, 0); // указываем нулевой день
// console.log(date); // получится 31 января

// let date = new Date(2018, -1, 1); // указываем -1 месяц
// console.log(date); // получится 1 декабря 2017 года

// let date = new Date(2018, 1, 35);
// console.log(date); // 7 марта

// let date = new Date(2018, 15, 1);
// console.log(date); // Mon Apr 01 2019

// let date = new Date(2018, 3, 31);
// console.log(date); // Tue May 01 2018

// let date = new Date(2018, 33, 33);
// console.log(date); // Mon Nov 02 2020

// let date = new Date(2020, 3, 0);
// console.log(date.getDate()); // 31 (количество дней в марте 2020 года)

// let date = new Date(2020, 2, 0);
// if (date.getDate() == 29) {
//     console.log('высокосный');
// } else {
//     console.log('невысокосный')
// } // Высокосный

// function isLeap(year) {
//     let date = new Date(year, 2, 0);
//     if (date.getDate() == 29) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isLeap(2020)) // true 

// let year  = 2025;
// let month = 0;
// let day   = 31;
// let date = new Date(year, month, day);
// if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
// 	console.log('корректна');
// } else {
// 	console.log('некорректна');
// } // 'корректна'

// function checkDate(year, month, day) {
//     let date = new Date(year, month, day);
//     if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(checkDate(2025, 0, 31));
// console.log(checkDate(2025, 0, 32));

// let date = new Date(2022, 11, 31);
// let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
// console.log(days[date.getDay()])

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), 1);
// let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
// console.log(days[date.getDay()])

// let date = new Date(2022, 0, 1);
// let d1ate = new Date(2022, 8, 10);
// console.log(d1ate - date);

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
// console.log(parseInt((now - date)/3600000)); // 26 целых часов спустя вчерашний полдуень

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
// console.log((now - date)/1000); // 59825 seconds

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24, 0, 0);
// console.log((date - now)/1000); // 26467 seconds

// let now = new Date();
// let date = new Date(now.getFullYear(), 11, 31, 24, 0 , 0);
// console.log((date - now)/ (3600000*24)); // 95.346 days

// let now = new Date();
// let year = now.getFullYear();
// for (let month = 0; month <= 11; month++) {
//     let num = 0;
//     let date = new Date(year, month, 13);

//     if (date.getDate() == 13) {
//         num++;
//     }
//     if (month == 11) {
//         console.log('Количество пятниц 13е - ' + num); // Количество пятниц 13е - 1
//     }
// }

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth() - 10);
// let year = date.getFullYear();
// console.log(year) // 2021

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), 30);
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[date.getDay()]) // пт

// let now = new Date();
// if (now.getFullYear()%4 == 0) {
//     console.log(now.getFullYear() + ' - высокосный год');
// } else {
//     console.log(now.getFullYear() + ' - невысокосный год'); // 2022 - невысокосный год
// }

// let now = new Date();
// for (let year = now.getFullYear(); year >= 1900; year--) {
//     if (year%4 == 0) {
//         console.log(year + '- предыдущий высокосный год');
//         break
//     }
// }

// let date_1 = '2022-11-02';
// let date_2 = '2022-11-05';
// console.log(date_2 > date_1) // true
// console.log(date_1 > date_2) // false

// if '2022-11-07' > '2022-11-05' {
//     console.log('2022-11-07 больше')
// }

// let date = '03-02';
// if (date >= '02-20' && date <= '03-20') {
//     console.log('Рыбы')
// }

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11);
// console.log(date < now); // true

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14);
// console.log(date < now); // false






















































































































