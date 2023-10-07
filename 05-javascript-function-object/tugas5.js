console.log("------------------------------");
//soal 1
console.log("soal 1");

cetakFunction = (nama) => {
  let cetak = "Hallo nama saya " + nama;
  return cetak;
};

console.log(cetakFunction("tengku"));

console.log("------------------------------");
//soal 2
console.log("soal 2");

myFunction = (angka1, angka2) => {
  return angka1 + angka2;
};

let angka1 = 20;

let angka2 = 7;

let output = myFunction(angka1, angka2);

console.log(output);

console.log("------------------------------");
//soal 3
console.log("soal 3");

// function Hello(){

//     return "Hello"

//     }

//Arrow Functions ES6

Hello = () => {
  return "hello";
};
console.log(Hello());

console.log("------------------------------");
//soal 4
console.log("soal 4");

let obj = {
  nama: "john",

  umur: 22,

  bahasa: "indonesia",
};

let language1 = obj["bahasa"]; //atau
let language2 = obj.bahasa;
console.log(language1);
console.log(language2);

console.log("------------------------------");
//soal 5
console.log("soal 5");

let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];
let objDaftarPeserta = {
  nama: arrayDaftarPeserta[0],
  ["jenis kelamin"]: arrayDaftarPeserta[1],
  hobi: arrayDaftarPeserta[2],
  ["tahun lahir"]: arrayDaftarPeserta[3],
};
console.log(objDaftarPeserta);

console.log("------------------------------");
//soal 6
console.log("soal 6");

let buah = [
  { nama: "Nanas", warna: "Kuning", adaBijinya: false, harga: 9000 },
  { nama: "Jeruk", warna: "Oranye", adaBijinya: true, harga: 8000 },
  { nama: "Semangka", warna: "Hijau & Merah", adaBijinya: true, harga: 10000 },
  { nama: "Pisang", warna: "Kuning", adaBijinya: false, harga: 5000 },
];

var buahFilter = buah.filter(function (item) {
  return item.warna == "Kuning";
});

console.log(buahFilter);

console.log("------------------------------");
//soal 7
console.log("soal 7");

let phone = {
  name: "Galaxy Fold 5",
  brand: "Samsung",
  year: 2023,
};
// kode diatas ini jangan di rubah atau di hapus sama sekali

/* 
 Tulis kode jawaban destructuring di sini 
 */

let { name, brand, year } = phone;

// kode di bawah ini jangan dirubah atau dihapus
console.log(name, brand, year);

console.log("------------------------------");
//soal 8
console.log("soal 8");

let dataBukuTambahan = {
  penulis: "john doe",
  tahunTerbit: 2020,
};

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
};

let objOutput = {};

// kode diatas ini jangan di rubah atau di hapus sama sekali

/* 
      Tulis kode jawabannya di sini 
  */
objOutput = { ...dataBukuTambahan, ...buku };
// kode di bawah ini jangan dirubah atau dihapus
console.log(objOutput);

console.log("------------------------------");
//soal 9
console.log("soal 9");
let mobil = {
  merk: "bmw",

  color: "red",

  year: 2002,
};

const functionObject = (param) => {
  return param;
};

newMobil = functionObject(mobil);
console.log(mobil);
