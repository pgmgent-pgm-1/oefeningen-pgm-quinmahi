function generateDigitalClockAsString() {
    const date = Date();
    return `${date.getHours(2)}`
}

console.log(generateDigitalClockAsString())