const onFormatFirstTime = () => {
    const date = new Date()
    date.setHours(date.getHours() + 4)

    return date.toISOString().substring(11,16);
}

export default onFormatFirstTime