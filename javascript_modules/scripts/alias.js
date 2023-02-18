
// variable
const asalSekolah = "SMK Teknologi 1 Sidoarjo";

// function
function cekLulus(nilai) {
    if (nilai > 80) {
        console.info(`Nilai Anda : ${nilai}. Anda lulus dengan Grade A`);
    } else if (nilai > 60) {
        console.info(`Nilai Anda : ${nilai}. Anda lulus dengan Grade B`);
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
    // Alias pada Export
    // export{asalSekolah as sekolah, cekLulus as lulus, person as murid};