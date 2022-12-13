// 4 ways to create dates

// 1.
const a = new Date();

// ISO string - Greenwich time
console.log(a); // 2022-12-13T10:49:43.139Z
// String representation of a date in your local time zone
console.log(a.toString());

// 2.
// We pass the amount of miliseconds from 1.1.1970.
const b = new Date(919222221212);
console.log(b.toString());

// 3. date time string - strongly discouraged
// Different browser have different implementations - can be incorrrect
const c = new Date("2021-02-14T10:00:00");
console.log(c.toString());

// 4. Pass the year, month, day, hour, minutes, seconds, miliseconds

const d = new Date(2020, 11, 13, 14, 30, 0, 0);
console.log(d.toString());

// Getting info from a date - all in the local time of your machine
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());

// Setting the date

d.setHours(12);
d.setDate(15);

console.log(d.toString());

// Formatting dates

console.log(d.toLocaleString("en-US"));
console.log(d.toLocaleString("ET"));
console.log(d.toLocaleString("en-AU"));

const e = new Date();
console.log(e.toLocaleString("ET"));
