import { subDays, format } from 'date-fns';

const date = new Date(1998, 6, 8); // 0 = January, 1 = February
const rta = subDays(date, 30);
const str = format(rta, 'dd/MM/yyyy');

console.log(str);
