let date1 = new Date("01/16/2024");
let date2 = new Date("07/13/2024");
let Difference_In_Time = date2.getTime() - date1.getTime();
// whatever
const currentTimestamp = Date.now();
let total_seconds = (date2.getTime() - currentTimestamp) / 1000;
let total_seconds_remaining_for_hours = total_seconds % 86400;
let total_seconds_remaining_for_minutes = total_seconds_remaining_for_hours % 3600;
let days = Math.floor(total_seconds / 86400);
let hours = Math.floor(total_seconds_remaining_for_hours / 3600);
let minutes = Math.floor(total_seconds_remaining_for_minutes / 60);
let seconds = Math.floor(total_seconds_remaining_for_minutes % 60);
console.log('days', days);
console.log('hours', hours);
console.log('minutes', minutes);
console.log('seconds', seconds);
