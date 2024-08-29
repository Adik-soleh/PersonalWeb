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
    // alert(`Nama: ${nama}Email: ${email}\nPhone: ${phone}\nMasage: ${msg}`)
    const link =  document.createElement("a");
    link.href = `mailto: ${email}
    ?subject=${sub}
    &body=Nama: ${nama} 
    Nomor Hp: ${phone} 
    Masage: ${msg}`;

    link.click()
};

const a = document.querySelectorAll('nav ul li a ');
console.log(a);
for(let i = 0; i<a.length; i++) {
    a[i].addEventListener('mouseover', myFunction) ;
    function myFunction() {
        a[i].style.backgroundColor = 'black';
        a[i].style.color = 'white';
    }
}
