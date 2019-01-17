let daysWorkingWeek:number = 5;
let weeksSemester: number = 17;

let hoursCodingDaily:number = 6;
let hoursCodingWeekly:number = hoursCodingDaily * daysWorkingWeek;
let workingWeek:number = 52;

let hoursCodingPerSemester: number = weeksSemester * daysWorkingWeek * hoursCodingDaily;
let percentageCodingWeekly: number = Math.round((hoursCodingWeekly/workingWeek)*100);

console.log("At GreenFox an average participant codes " + hoursCodingPerSemester + " hours weekly");
console.log("During a semester approximately" + percentageCodingWeekly + "% of the time is spent coding");


