export const chatlistItemDate = (isoDate:Date): string => {
    const date = new Date(isoDate)
    let yesterday = new Date(new Date().toLocaleDateString())
    yesterday.setDate(yesterday.getDate()-1)
    
    if (date < yesterday) {
        let day =  `${date.getDate()}`;
        let mo =  `${date.getMonth()}`;
        if (day.length < 2) day = '0' + day;
        if (mo.length < 2) mo = '0' + mo;
        return `${day}/${mo}/${date.getFullYear()}`.substr(0,8)
    } else if (date < new Date(new Date().toLocaleDateString())) {
        return "Yesterday"
    } else return formatAMPM(date)
}

function formatAMPM(date: Date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    let strTime = hours + ':' + (minutes < 10 ? `0${minutes}` : `${minutes}`) + ' ' + ampm;
    return strTime;
  }