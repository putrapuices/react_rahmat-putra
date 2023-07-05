let a = 5
let b = "kampus merdeka"
const nama = "budi"
let terdaftar = true // value false diubah ke true agar dapat ditampilkan menampilkan baris 22 
let lengkap_arr = [a, b, nama, terdaftar]

function perkenalan() {
    let asal = "indonesia"
    return console.log(
        "perkenalkan nama saya " + 
        nama + 
        " nomor urut " + 
        b + 
        " sekarang sedang mengikuti " +
        b + 
        "berasal dari " + 
        asal
    )
}

if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka")
}

a = b;
// nama = b;   variabel 'nama' menggunakan variabel const
//variabel yang sudah di deklarasikan tidak dapat di deklarasikan kembali.

console.log("asal diakses " + asal)   
console.log("lengkap_arr = " + lengkap_arr[2]) // memanggil index kedua dari array pada baris ke 5
console.log("a adalah = " + a)
console.log("b adalah = " + b)
perkenalan() // Memanggil Function perkenalan baris 7