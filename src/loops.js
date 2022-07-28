export function forLoop(h){
    let arr = h.split(",")
    let newArr = []

    for (let i=0; i < arr.length; i++)
    newArr.push(i)
    return newArr
}

export function indexofAlphabetsArray(k,n){
    var newArray = k.map((e,i) => e + " " + n[i])
    return newArray
}