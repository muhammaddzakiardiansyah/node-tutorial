const hitung = (a,b) => {
    return a + b;
};

// console.log(hitung(5,3));

const sapa = (nama, alamat, pekerjaan) => {
    return `hai namaku ${nama} aku tinggal di ${alamat} dan pekerjaanku sebagai ${pekerjaan};`
}

// console.log(sapa('Dzaki','Dekoro','web developer'));

let objek = {
    nama: 'komarudin',
    umur: '22',

    sapaKomar() {
        console.log(`hai nama saya ${this.nama}`);
    }
}

// objek.sapaKomar();

let hoby = ['coding','memasak','petualangan'];

// for(kesenangan of hoby) {
//     console.log(kesenangan);
// }

hoby.push('berenang');

// console.log(hoby.map(kesenangan => {
//     return `hobi saya adalah ${kesenangan}`;
// }));
const copyHoby = [...hoby]; // object {}, array []
// console.log(copyHoby);

// const toArray = (...arguments) => {
//     return arguments;
// }
// console.log(toArray(1,2,3,4,5,6,7,8,9,10));

// const destrak = ({nama}) => {
//     console.log(nama);
// }
// destrak(objek);

// const destrak2 = ({nama,umur}) => {
//     console.log(nama,umur)
// }
// destrak2(objek);

const http = require('http');

const server = http.createServer( (req, res) => {
    console.log(req.url, method);
});

server.listen(3000);
