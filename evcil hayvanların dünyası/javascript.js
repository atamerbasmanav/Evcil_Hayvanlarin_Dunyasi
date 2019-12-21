function formkontrol() {

    adi = document.getElementById('ad').value;
    sifre = document.getElementById('sifre').value;
    tsifre = document.getElementById('tsifre').value;

    var hata = new Array();
    var sembol = '*|,:<>[]{}`;()@&$#%!+-"/';

    var sembolvar = false;
    for (var i = 0; i < sifre.length; i++) {
        if (sembol.indexOf(sifre.charAt(i)) != -1) {
            sembolvar = true;
        }
    }


    if (adi == "")
        hata.push('Lütfen Kullanıcı adını boş geçmeyiniz');
    else if (adi.length < 4)
        hata.push('Lütfen kullanıcı adı alanını 3 karakterden büyük giriniz');


    if (sifre == '')
        hata.push('Şifre alanını boş geçmeyiniz');
    else {
        if (sifre != tsifre)
            hata.push('Şifreler aynı olmalıdır.');

        else if (sifre.length < 6)
            hata.push('Şifre 6 karekter veya daha büyük olmalıdır.');

        else if (sifre.search(/[a-z]/) < 0)
            hata.push("Şifre en az bir Küçük harf içermelidir.");

        else if (sifre.search(/[A-Z]/) < 0)
            hata.push("Şifre en az bir Büyük harf içermelidir.");

        else if (sifre.search(/[0-9]/) < 0)
            hata.push("Şifre en az bir rakam içermelidir.");
    }





    if (hata.length > 0) {
        alert(hata.join("\n"));
        return false;
    }
    else alert('Tamam şifre uygun'); //buraya return true diyebiliriz

}
