import { LembreteType } from "../../types/reminderTypes";

export default function remindersOrganizer(reminders : Array<LembreteType>) : Array<LembreteType> {
    let filteredReminders : Array<LembreteType> = [];
    while (reminders.length !== 0) {
        let earlierReminder = reminders[0];
        for (let reminder of reminders) {
            let minute = Number((reminder.hora).substring(4, 5));
            let earlierMinute = Number((earlierReminder.hora).substring(4, 5))
            if (minute < earlierMinute) {
                earlierMinute = minute;
                earlierReminder = reminder;
            }
        }
        filteredReminders.push(earlierReminder)
        reminders = reminders.filter((lembrete) => lembrete.id !== earlierReminder.id);
    }
    reminders = filteredReminders;
    filteredReminders = [];
    while (reminders.length !== 0) {
        let earlierReminder = reminders[0];
        for (let reminder of reminders) {
            let hour = Number((reminder.hora).substring(0, 2));
            let earlierHour = Number((earlierReminder.hora).substring(0, 2))
            if (hour < earlierHour) {
                earlierHour = hour;
                earlierReminder = reminder;
            }
        }
        filteredReminders.push(earlierReminder)
        reminders = reminders.filter((lembrete) => lembrete.id !== earlierReminder.id);
    }
    reminders = filteredReminders;
    filteredReminders = [];
    while (reminders.length !== 0) {
        let earlierReminder = reminders[0];
        for (let reminder of reminders) {
            let day = Number((reminder.data).substring(0, 2));
            let earlierDay = Number((earlierReminder.data).substring(0, 2))
            if (day < earlierDay) {
                earlierDay = day;
                earlierReminder = reminder;
            }
        }
        filteredReminders.push(earlierReminder)
        reminders = reminders.filter((lembrete) => lembrete.id !== earlierReminder.id);
    }
    reminders = filteredReminders;
    filteredReminders = [];
    while (reminders.length !== 0) {
        let earlierReminder = reminders[0];
        for (let reminder of reminders) {
            let month = Number((reminder.data).substring(3, 5));
            let earlierMonth = Number((earlierReminder.data).substring(3, 5))
            if (month < earlierMonth) {
                earlierMonth = month;
                earlierReminder = reminder;
            }
        }
        filteredReminders.push(earlierReminder)
        reminders = reminders.filter((lembrete) => lembrete.id !== earlierReminder.id);
    }
    reminders = filteredReminders;
    filteredReminders = [];
    while (reminders.length !== 0) {
        let earlierReminder = reminders[0];
        for (let reminder of reminders) {
            let year = Number((reminder.data).substring(6, 10));
            let earlierYear = Number((earlierReminder.data).substring(6, 10))
            if (year < earlierYear) {
                earlierYear = year;
                earlierReminder = reminder;
            }
        }
        filteredReminders.push(earlierReminder)
        reminders = reminders.filter((lembrete) => lembrete.id !== earlierReminder.id);
    }
    return filteredReminders;
}