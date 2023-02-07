function age (dateInput){
    let d = new Date();
    let x = Date.parse(d.toString());
    let y = Date.parse(dateInput);
    let ageGap = 0
    if (x>y){
        ageGap = x - y

    } else if (x<=y){
        ageGap = y - x
    }
    return Math.floor(ageGap/31556952000)
}
console.log(age('1990-01-01'))