export default function dateOrganizerBR(date : string, format : string):string {
    let dateReturn : string = "";
    if (format === "BR-Format") {
        let year = date.substring(0, 4);
        let month = date.substring(5, 7);
        let day = date.substring(8, 10);
        dateReturn = `${day}/${month}/${year}`;
    }
    else if (format === "NA-Format") {
        let day = date.substring(0, 2);
        let month = date.substring(3, 5);
        let year = date.substring(6, 10);
        dateReturn = `${year}-${month}-${day}`;
    }
    return dateReturn;
};