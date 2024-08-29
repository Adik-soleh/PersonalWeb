document.getElementById('projectForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameProjek = document.getElementById('nama').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const description = document.getElementById('deskripsi').value;
    const technologies = Array.from(document.querySelectorAll('input[name="technologies"]:checked')).map(checkbox => checkbox.value);
    const imageFile = document.getElementById('uploadImage').files[0];

    const upTo = new FileReader();
    upTo.onload = function(event) {
        const imageSrc = event.target.result;
        card_Poject(nameProjek, startDate, endDate, description, technologies, imageSrc);
    };
    upTo.readAsDataURL(imageFile);

    this.reset();
});

function card_Poject(name, start, end, desc, tec, imgSrc) {
    const projectContainer = document.getElementById('cardContainer');
    const card = document.createElement('div');
    card.className = 'project-card';

    card.innerHTML = `
        <img src="${imgSrc}" alt="${name}">
        <h3>${name}</h3>
        <p><b>Duration:</b> ${start} - ${end}</p>
        <p><b>Technologies:</b> ${tec.join(', ')}</p>
        <p>${desc}</p>
        <div class="actions">
            <button onclick="editProject(this)">Edit</button>
            <button onclick="deleteProject(this)">Delete</button>
        </div>
    `;

    projectContainer.appendChild(card);
}

function editProject(button) {
    const card = button.closest('.project-card');
    alert('Masih Belum Nemu Gais Caranya hehehe')

}

   
//     document.getElementById('nama').value = name;
//     document.getElementById('startDate').value = start;
//     document.getElementById('endDate').value = end;
//     document.getElementById('deskripsi').value = desc;

//     /
//     document.querySelectorAll('input[name="technologies"]').forEach(checkbox => {
//         checkbox.checked = false;
//     });

    
//     tech.forEach(technology => {
//         document.querySelector(`input[name="technologies"][value="${technology.trim()}"]`).checked = true;
//     });

//     // Remove the card after editing
//     card.remove();
// }

function deleteProject(button) {
    const card = button.closest('.project-card');
    card.remove();
}

const a = document.querySelectorAll('nav ul li a ');
console.log(a);
for(let i = 0; i<a.length; i++) {
    a[i].addEventListener('mouseover', myFunction) ;
    function myFunction() {
        a[i].style.backgroundColor = 'black';
        a[i].style.color = 'white'
    }
}
