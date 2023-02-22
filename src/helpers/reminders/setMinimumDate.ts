export default function setMinimumDate() : string {
    const currentTime = new Date();
    let filteredDay : number | string = (currentTime.getDate() <= 9) ? "0" + currentTime.getDate() : currentTime.getDate();
    let filteredMonth : number | string = Number(currentTime.getMonth()) + 1;
    filteredMonth = (filteredMonth <= 9) ? "0" + filteredMonth : filteredMonth;
    return `${currentTime.getFullYear()}-${filteredMonth}-${filteredDay}`;
};