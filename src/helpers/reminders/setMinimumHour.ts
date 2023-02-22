import { MinimumDateType } from "../../types/otherTypes";

export default function setMinimumHour(inputDate : string) : MinimumDateType {
    const minimumDate : MinimumDateType = {
        type: "",
        minDate: ""
    };
    const currentTime = new Date();
    let filteredDay = (currentTime.getDate() <= 9) ? "0" + currentTime.getDate() : currentTime.getDate();
    let filteredMonth : string | number = Number(currentTime.getMonth()) + 1;
    filteredMonth = (filteredMonth <= 9) ? "0" + filteredMonth : filteredMonth;
    const currentDay : string | number = (inputDate).substring(8, 10);
    const currentMonth : string | number = (inputDate).substring(5, 7);
    const currentYear : number = Number((inputDate).substring(0, 4));
    if (currentDay == filteredDay && currentMonth == filteredMonth && currentYear == currentTime.getFullYear()) {
        let filteredMinute = (currentTime.getMinutes() <= 9) ? "0" + currentTime.getMinutes() : currentTime.getMinutes();
        let filteredHour = (currentTime.getHours() <= 9) ? "0" + currentTime.getHours() : currentTime.getHours();
        minimumDate.type = "set";
        minimumDate.minDate = `${filteredHour}:${filteredMinute}`;
    }
    else {
        minimumDate.type = "remove";
        minimumDate.minDate = "";
    }
    return minimumDate;
};