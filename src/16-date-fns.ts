import { subDays, format } from 'date-fns';

const date = new Date(1998, 6, 8); // 0 = January, 1 = February
const formatedDate = format(date, 'dd/MM/yyyy');
console.log(formatedDate);

const newDate = subDays(date, 30);
const formatedNewDate = format(newDate, 'dd/MM/yyyy');

console.log(formatedNewDate);
