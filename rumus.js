// rumus.js
function hitung(angka1, angka2, operator) {
    let hasil;
    switch (operator) {
        case "+":
            hasil = angka1 + angka2;
            break;
        case "-":
            hasil = angka1 - angka2;
            break;
            //Menambahkan operator *
        case "*":
            hasil = angka1 * angka2;
            break;
            //MEnambahkan operator /
        case "/":
            // Cek pembagian dengan nol
            if (angka2 == 0) {
                return "Error: Tidak bisa membagi dengan nol!";
            }
            hasil = angka1 / angka2;
            break;
        default:
            return "Operator tidak valid!";
    }
    return `Hasil dari ${angka1} ${operator} ${angka2} adalah: ${hasil}`; //memanggil tiap paramenter
}

// Ekspor fungsi untuk digunakan di menu.js
module.exports = { hitung };
