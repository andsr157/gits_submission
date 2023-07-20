oeis  = (input) =>{
    data = []
    for (let i = 0; i < input; i++){
        temp = ((i ** 2) + i + 2)/2;
        data.push(temp);
    }

    return data.join('-')
}

console.log(oeis(9));
console.log(oeis(4));
console.log(oeis(7));