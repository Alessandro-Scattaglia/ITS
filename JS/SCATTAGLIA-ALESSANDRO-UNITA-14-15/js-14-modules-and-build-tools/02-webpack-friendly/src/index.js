import { getWeekDay } from './getWeekDay';

console.log(getWeekDay(new Date(2025, 8, 22), 'en')); // MO
console.log(getWeekDay(new Date(2023, 0, 1), 'it'));  // DOM
console.log(getWeekDay(new Date(2025, 2, 28), 'it')); // VEN
