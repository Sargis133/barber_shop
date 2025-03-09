const onFormatDateToday = (date) => {
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);

    return date.getFullYear()+"-"+(month)+"-"+(day) ;
}

export default onFormatDateToday