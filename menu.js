// menu.js
const readline = require("readline"); // Import readline untuk input dari terminal
const { hitung } = require("./rumus"); // Import fungsi hitung dari rumus.js

//argumen untuk mengambil 2 proses input dan output
const inputUser = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
});


inputUser.question("Masukkan angka pertama: ", (angka1) => {
        inputUser.question("Masukkan angka kedua: ", (angka2) => {
            inputUser.question("Masukkan operator (+, -, *, /): ", (operator) => {
            angka1 = parseFloat(angka1);
            angka2 = parseFloat(angka2);

            const hasil = hitung(angka1, angka2, operator);
            console.log(hasil);

            inputUser.close();
        });
    });
});
