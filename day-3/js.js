function sandEmail (event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value ;
    const email = document.getElementById('email').value ;
    const phone = document.getElementById('phone').value ;
    const msg = document.getElementById('msg').value ;
    const sub = document.getElementById('select').value

    if(!nama.length) {
      return alert('nama tidak boleh kosong');   
    }else if(!email.length) {
        return alert('email tidak boleh kosong')
    }else if(!phone.length) {
        return alert('email tidak boleh kosong')
    }else if(!msg.length) {
        return alert('email tidak boleh kosong')
    }
    // alert(`Nama: ${nama}\nEmail: ${email}\nPhone: ${phone}\nMasage: ${msg}`)
    const link =  document.createElement("a");
    link.href = `mailto: ${email}?subject=${sub}&body=Nama: ${nama}\nNomor Hp: ${phone}\nMasage: ${msg}`;

    link.click()
}