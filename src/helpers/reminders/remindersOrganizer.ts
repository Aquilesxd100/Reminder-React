import { LembreteType, ReminderType } from "../../types/reminderTypes";

export default function remindersOrganizer(reminders : Array<ReminderType>) : Array<ReminderType> {
    if(!reminders.length) return reminders;
    let filteredReminders : Array<ReminderType> = [];
    while (reminders.length !== 0) {
        let earlierReminder = reminders[0];
        for (let reminder of reminders) {
            let minute = Number((reminder.time).substring(4, 5));
            let earlierMinute = Number((earlierReminder.time).substring(4, 5))
            if (minute < earlierMinute) {
                earlierMinute = minute;
                earlierReminder = reminder;
            };
        }
        filteredReminders.push(earlierReminder)
        reminders = reminders.filter((lembrete) => lembrete.id !== earlierReminder.id);
    }
    reminders = filteredReminders;
    filteredReminders = [];
    while (reminders.length !== 0) {
        let earlierReminder = reminders[0];
        for (let reminder of reminders) {
            let hour = Number((reminder.time).substring(0, 2));
            let earlierHour = Number((earlierReminder.time).substring(0, 2))
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
            let day = Number((reminder.date).substring(0, 2));
            let earlierDay = Number((earlierReminder.date).substring(0, 2))
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
            let month = Number((reminder.date).substring(3, 5));
            let earlierMonth = Number((earlierReminder.date).substring(3, 5))
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
            let year = Number((reminder.date).substring(6, 10));
            let earlierYear = Number((earlierReminder.date).substring(6, 10))
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