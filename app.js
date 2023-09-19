// tes index.js

let nama = 'Amelia Hari Ambarwati';
var nama_2;

console.log('variable sebelum ada nilainya: ', nama, nama_2);

nama = 'Amelia Hari Ambarwat';


// if
const berat_badan = 45;
let berat;
if (berat_badan >= 50) {
    console.log('berat saya lebih kecil dari 50, yaitu ', berat_badan);
}

// if else if else
if (berat_badan <= 45) {
    berat = 'Kurus';
} else if (berat_badan <= 50) {
    berat = 'Sedang';
} else {
    berat = 'Gemuk';
}

console.log('berat saya yaitu ', berat);

// if else
if (berat_badan <= 45) {
    berat = 'Kurus';
} else {
    berat = 'Gemuk';
}
console.log('berat saya yaitu ', berat);


// switch case
const gaji = 10000000;
switch (gaji) {
    case 15000000:
        console.log('diatas rata-rata');
        break;
    case 10000000:
        console.log('rata-rata');
        break;
    default:
        console.log('dibawah rata-rata');
        break;
}
// array adalah type data yg memiliki beberapa data dgn type yg berbeda-beda.
let array1 = ["A", "AB", 3, 4.5, true, false, { "key": "value" }, ["array dalam array"]];
    // index   0    1    2   3    4     5, ...
console.log("tampilkan array: ", array1);
console.log("array index 5 adalah: ", array1[6]["key"]);
console.log("array di dalam di array: ", array1[7][0]);