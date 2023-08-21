function replaceData(a,b,c){
    console.log("Before : "+a)
    return "After  : "+a.replace(b,c)
}

var kalimat = "Saya belajar masak nasi goreng"

console.log(replaceData(kalimat,"masak","makan"))