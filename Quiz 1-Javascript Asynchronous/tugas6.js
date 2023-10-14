// soal 1
console.log("=================");
console.log("soal 1");

/* Tulis code function promise di sini */

const myCountPromise = (input) => {
  return new Promise((resolve, reject) => {
    if (input != undefined) {
      setTimeout(() => {
        resolve(input * 2);
      }, 500);
    } else {
      reject("Maaf tidak ada nilai dalam parameter");
    }
  });
};

//kode dibawah ini jangan dihapus atau diedit sama sekali ya
myCountPromise(2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// soal 2
console.log("=================");
console.log("soal 2");

function filterBooksPromise(colorful, amountOfPage) {
  return new Promise(function (resolve, reject) {
    var books = [
      { name: "shinchan", totalPage: 50, isColorful: true },
      { name: "Kalkulus", totalPage: 250, isColorful: false },
      { name: "doraemon", totalPage: 40, isColorful: true },
      { name: "algoritma", totalPage: 250, isColorful: false },
    ];
    if (amountOfPage >= 40) {
      resolve(
        books.filter(
          (x) => x.totalPage >= amountOfPage && x.isColorful == colorful
        )
      );
    } else {
      var reason = "Maaf buku di bawah 40 halaman tidak tersedia";
      reject(reason);
    }
  });
}

//cara 2

const execute1 = async () => {
  try {
    let result = await filterBooksPromise(true, 40);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
console.log("execute 2");
const execute2 = async () => {
  try {
    let result = await filterBooksPromise(false, 250);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
console.log("execute 3");
const execute3 = async () => {
  try {
    let result = await filterBooksPromise(true, 30);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

execute1();
execute2();
execute3();

//cara3 => buat fungsi khusus execute
const execute = async (colorful, amountOfPage) => {
  try {
    let res1 = await filterBooksPromise(colorful, amountOfPage);
    console.log(res1);
  } catch (error) {
    console.log(error);
  }
};
execute(true, 40);
execute(false, 250);
execute(true, 30);
