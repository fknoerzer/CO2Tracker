export  function formatReturningDate (date: string){
    let returning = new Date(date),
        month = '' + (returning.getMonth() + 1),
        day = '' + returning.getDate(),
        year = returning.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('.');}

export function formatDepartureDate (date: string)  {

    let departure = new Date(date),
        month = '' + (departure.getMonth() + 1),
        day = '' + departure.getDate()

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month].join('.');}