// soal 1 
console.log("soal 1")
let namaLengkap = 'Tengku Surya Al-Furqan';
console.log("nama Lengkap : " + namaLengkap)

console.log("------------------------------")
//soal 2 
console.log("soal 2")
let word = 'JavaScript';
let second = 'is';
let third = 'awesome';

let outputGabunganVariable = word +" "+ second+" "+ third; //pakai +
let CS6outputGabunganVariable =`${word} ${second} ${third}` ; // pakai Template Literals CS6

console.log("output gabungan dengan \'+'\ = "  + outputGabunganVariable)
console.log("output gabungan dengan template = " + CS6outputGabunganVariable)

console.log("------------------------------")
//soal 3
console.log("soal 3")
let hello = 'Hello '; 
let world = 'World!!'; 

// let output = hello + world 
let output = `${hello} ${world}`
console.log(output)

console.log("------------------------------")
//soal 4
console.log("soal 4")
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5"; 

panjangPersegiPanjang = parseInt(panjangPersegiPanjang)
lebarPersegiPanjang = parseInt(lebarPersegiPanjang)

let kelilingPersegiPanjang = 2*(panjangPersegiPanjang + lebarPersegiPanjang)
console.log(kelilingPersegiPanjang)

console.log("------------------------------")
//soal 5
console.log("soal 5")
let sentences = 'wah javascript itu keren sekali';

let firstWords= sentences.substring(0, 3); 
let secondWords = sentences.substring(4,14); // do your own! 
let thirdWords = sentences.substring(15,19); // do your own! 
let fourthWords =sentences.substring(19,25); // do your own! 
let fifthWords = sentences.substring(25,31); // do your own! 

console.log('Kata Pertama: ' + firstWords); 
console.log('Kata Kedua: ' + secondWords); 
console.log('Kata Ketiga: ' + thirdWords); 
console.log('Kata Keempat: ' + fourthWords); 
console.log('Kata Kelima: ' + fifthWords);


console.log("------------------------------")
//soal 6
console.log("soal 6")

var sentence = "I am going to be React JS Developer"; 

var exampleFirstWord = sentence[0] ; 
var exampleSecondWord = sentence[2] + sentence[3]  ; 
var thirdWord=sentence[5]+sentence[6] + sentence[7]+ sentence[8] +sentence[9]; // lakukan sendiri, wajib mengikuti seperti contoh diatas 
var fourthWord=sentence[11]+sentence[12]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var fifthWord=sentence[14]+sentence[15]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var sixthWord=sentence[17]+sentence[18]+sentence[19]+sentence[20]+sentence[21]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var seventhWord=sentence[23]+sentence[24]+sentence[25]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var eighthWord=sentence[26]+sentence[27]+sentence[28]+sentence[29]+sentence[30]+sentence[31]+sentence[32]+sentence[33]+sentence[34]; // lakukan sendiri , wajib mengikuti seperti contoh diatas

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)
console.log("------------------------------")
//soal 7
console.log("soal 7")

let txt = "I can eat bananas all day";

let hasil = txt.slice(10,18); //lakukan pengambilan kalimat di variable ini
let hasil_split = txt.split(" "); //lakukan pengambilan kalimat di variable ini

console.log(hasil)  
console.log(hasil_split) //split 
console.log("------------------------------")
//soal 8
console.log("soal 8")

var nilai = 50;
if (nilai >= 80){
    console.log("indeks =  A")
} 
else if (nilai >= 70 && nilai < 80) {
    console.log("indeks = B")
}
else if (nilai >= 60 && nilai < 70) {
    console.log("indeks = C")
} 
else if (nilai >= 50 && nilai < 60) {
    console.log("indeks = D")
}
else if(nilai < 50) {
    console.log("indeks = E")
}
console.log("------------------------------")
//soal 9
console.log("soal 9")

let angka = 2

var tebakAngka= angka === 2 ?"angka nya 2" : "bukan angka 2";
console.log(tebakAngka)

console.log("------------------------------")
//soal 10
console.log("soal 10")

var traffic_lights = "red";
switch (traffic_lights) {
    case "red": {console.log("berhenti"); break;}
    case "yellow":{console.log("hati-hati"); break;}
    case "green":{console.log("berjalan"); break;}

}