function calc(num) {
    let cal = num * Math.log2(num);
    return (cal);
}

for (let i = 0; i < 6; i ++) {
    let con = 2 ** i;
    console.log(calc(con));
}


function calc(num) {
    let cal2 = 2 ** num;
    return (cal2);
}

let count = 1;
for (let i = 1; i < 17; i++) {
    count = count * i;
    console.log(count); 
}