
// variable
const asalSekolah = "SMK Teknologi 1 Sidoarjo";

// function
function cekLulus(nilai) {
    if (nilai > 80) {
        console.info("Anda Lulus dengan Grade A");
    } else if (nilai > 60) {
        console.info("Anda Lulus dengan Grade B");
    }else{
        console.info("Silahkan mengulangi kembali");
    }
    
}

// class
class person {

    constructor() {
        
    }
    
     sayWelcome(name){
        console.info(`Hallo ${name}, Selamat Datang di Portal ${asalSekolah}`);
     }
    
}

    export {asalSekolah, cekLulus, person};