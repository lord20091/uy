let ism = prompt(`ismingizni kiriting.`);

let harf = prompt(`harf kiriting.`);

let lowerIsm = ism.toLocaleLowerCase()

let lowerHarf = harf.toLocaleLowerCase()

if(lowerIsm.includes(lowerHarf)) {
    alert(`${ism} ismida ${harf} harfi mavjud.`)
} else{
    alert(`${ism} ismida ${harf} harfi mavjud EMAS.`)
}
