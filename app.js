var pertanyaan = [  'Apakah kamu suka menonton movie?', 
'Genre apa yang kamu suka? jawab dengan genre(jawaban)',
'Artis favorit kamu?jawab dengan artis(jawaban) ']
console.log(pertanyaan[0] + 'jawab dengan jawab(ya/tidak)')

function jawab(input){
if(input === 'ya'){
for(var i = 1; i < pertanyaan.length; i++){
console.log(pertanyaan[i]);
}
}else{
console.log('kuis ini bukan untuk kamu')
}
}

function genre(input){
if (input === 'horror') {
console.log('Kamu bukan orang yang penakut')
} else if (input === 'cinta') {
console.log('Kamu romantis')
} else if (input === 'action') {
console.log('Kamu mempunyai jiwa yang pemberani')
} else {
console.log()
}

}

function artis(input){
if(input === 'Angelina Jolie'){
console.log('Pilihanmu menawan')
}else if(input === 'Bradd pitt'){
console.log('Pilihanmu menawan')
}else if(input === 'James franco'){
console.log('pilihanmu oke')
}else{
console.log('terserah kamu aja deh')
}

}



