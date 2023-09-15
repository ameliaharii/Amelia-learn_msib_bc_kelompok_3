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