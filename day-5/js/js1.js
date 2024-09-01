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
    
    
    //add-project
    document.getElementById('projectForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nameProjek = document.getElementById('nama').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const description = document.getElementById('deskripsi').value;
    const technologies = Array.from(document.querySelectorAll('input[name="technologies"]:checked')).map(checkbox => checkbox.value);
    const imageFile = document.getElementById('uploadImage').files[0];
    
    let iconStatus=[];
    
    for(let i = 0 ; i < technologies.length; i++) {
        
        if(technologies[i] === "CSS"){
            //iconStatus = `<i class="fa-brands fa-css3"></i>`;
            iconStatus.push(`<img src="https://w7.pngwing.com/pngs/393/49/png-transparent-css-logo-thumbnail.png".`);
        }else if (technologies[i] === "HTML") {
            iconStatus.push(`<img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png">`);
        }else if (technologies[i] === "TypeScript") {
            iconStatus.push(`<img src="https://w7.pngwing.com/pngs/270/103/png-transparent-typescript-language-javascript-static-type-typescript-logo-frontend-3d-icon.png">`);
        }else if (technologies[i] === "JavaScript") {
            iconStatus.push(`<img src="https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png">`);
            
        }
        
    }
    
    const upTo = new FileReader();
    upTo.onload = function(event) {
        const imageSrc = event.target.result;
        card_Poject(nameProjek, startDate, description, description, technologies, imageSrc);
    };
    upTo.readAsDataURL(imageFile);
    
    this.reset();
    
    //card-event
    function card_Poject(name, start, desc, tec,kosong, imgSrc) {
        const projectContainer = document.getElementById('cardContainer');
        const card = document.createElement('div');
        card.className = 'project-card';
        
        // Duration
        const startDate = new Date(start);
        const duration = calculateDuration(startDate, new Date());
        
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
        
        
        for(let j= 0 ;j < iconStatus.length;j++){
            iconStatus;
            console.log(iconStatus);
        }
    
card.innerHTML = `
<div calass="containerCard">
<img src="${imgSrc}" alt="">
        <h3>${name}</h3>
        <p>${start}</p>
        <div class="detailCard">
        <p>${desc}</p>
        <p ><b>Post Time:</b> ${duration}</p>
        </div>
        <div class"icontec">
        <p>${iconStatus}</p>
        </div>  
        <div class="actions">
        <button onclick="editProject(this)">Edit</button>
        <button onclick="deleteProject(this)">Delete</button>
        </div>
        
        </div>
        
        `;
        
        
        projectContainer.appendChild(card);
        
        
        //Details-Card
        const details = document.querySelectorAll('.project-card img')
        console.log(details);
        
        details[0].addEventListener('click', myFunction)
        
        function myFunction() {
            
            const detail = document.getElementById('detail')
            detail.innerHTML= `
            <div class="details">
            <img src="${imgSrc}" alt="">
            <h3>${name}</h3>
            <p>${start}</p>
            <div class="detailCard">
            <p>${desc}</p>
            <p ><b>Post Time:</b> ${duration}</p>
            </div>
            <div class"icontec">
            <p>${iconStatus}</p> 
            </div>
            <div class="actions">
            <button onclick="editProject(this)">Edit</button>
            <button onclick="deleteProject(this)">Delete</button>
            </div>
            </div>
            `
            
        }
        
        
    }
    
    
    
    
    
    
});



function editProject(button) {
    const card = button.closest('.project-card');
    alert('Masih Belum Nemu Gais Caranya hehehe')
    
}

function deleteProject(button) {
    const card = button.closest('.project-card');
    card.remove();
}
function editProject(button) {
    const card = button.closest('.details');
    alert('Masih Belum Nemu Gais Caranya hehehe')
    
}

function deleteProject(button) {
    const card = button.closest('.details');
    card.remove();
}

