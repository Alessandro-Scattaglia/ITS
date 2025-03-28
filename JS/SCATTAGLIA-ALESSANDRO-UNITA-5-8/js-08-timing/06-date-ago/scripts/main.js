function getDateAgo(date, days) {

    let dateCopy = new Date(date);
    dateCopy.setDate(dateCopy.getDate() - days);

    return dateCopy.getDate();
}


console.log(getDateAgo(new Date(2025, 2, 28), 5));
console.log(getDateAgo(new Date(2025, 2, 28), -2));