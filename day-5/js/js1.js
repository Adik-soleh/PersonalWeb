// // const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"]
// // const convertDate = getfullTime(new Date());

// // console.log(convertDate);


// function getfullTime(time) {
//     const date = time.getDate()
//     const monthIndex = time.getMonth()
//     const year = time.getFullYear()
//     let hours = time.getHours()
//     let minutes = time.getMinutes()

//     if(hours < 10) {
//         hours= "0" + hours
//     }

//     if(minutes < 10) {
//         minutes = "0" + minutes
//     }

//     return `${date} ${months[monthIndex]} ${year} ${hours} : ${minutes} WIB`

    
// }


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

    // Calculate the duration between the start and end dates
    const startDate = new Date(start);
    const duration = calculateDuration(startDate, new Date());

    card.innerHTML = `<div onclick="details(this)">
    <div calass="containerCard">
    <a href="home.html" target="_blank">
        <img src="${imgSrc}" alt="${name}">
        <h3>${name}</h3>
        <p>${start}</p>
        <div class="detailCard">
        <p><strong>Technologies:</strong> ${tec.join(', ')}</p>
        <p>${desc}</p>
        <p ><b>Post Time:</b> ${duration}</p>
        </div>
        </a>
        <div class="actions">
        <button onclick="editProject(this)">Edit</button>
        <button onclick="deleteProject(this)">Delete</button>
        </div>
        </div>
          
          </div>
    `;

    projectContainer.appendChild(card);
}



function calculateDuration(startDate) {

        const distance = new Date() - startDate ;
        const seconds = Math.floor(distance / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const day = Math.floor(hours / 24);
        const months = Math.floor(day / 30);
    
        console.log("Second" , seconds);
        console.log("Minutes", minutes);
        console.log("Hours", hours);
        console.log("Day", day);
    
        if(seconds < 60) {
            return `${seconds} Second ago`
        }else if (minutes <60){
            return `${minutes} minutes ago`
        }else if(hours < 24) {
            return `${hours} hours ago`
        }else if(day < 30) {
            return `${day} day ago`
        }
        
       
    }
    
function editProject(button) {
    const card = button.closest('.project-card');
    alert('Masih Belum Nemu Gais Caranya hehehe')

}

function deleteProject(button) {
    const card = button.closest('.project-card');
    card.remove();
}

const a = document.querySelectorAll('nav ul li a ');
for(let i = 0; i<a.length; i++) {
    a[i].addEventListener('mouseover', myFunction) ;
    function myFunction() {
        a[i].style.backgroundColor = 'black';
        a[i].style.color = 'white'
    }
}
