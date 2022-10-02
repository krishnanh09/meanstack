let imageURL = '';
function submit() {
    let title = document.getElementById('title').value;
    let article = document.getElementById('article').value;
    let author = document.getElementById('author').value;
    let time = document.getElementById('time').value;
    let time_value='';
    var ele = document.getElementsByName('time');
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
           time_value = ele[i].value;
    }
    if(!title || !article || !author || !time || !time_value){
      alert("Fill the required fields");
      return false; 
    }else {
    createCard(imageURL, title, article,author,time, time_value);
    }
}
let container = document.querySelector('.main');

function readURL(event) {
    if (event.files && event.files[0] && imageURL == '') {
        let reader = new FileReader();
        reader.onload = event => {
            imageURL = event.target.result;
            console.log(event);
        }
        reader.readAsDataURL(event.files[0])
    }
}

function createCard(img, title, article, author, time, time_value) {
    let myDiv = document.createElement("div");
    let code = ` <div class="card">
                        <div class="card__header">
                             <img src="${img}" class="card-img-top" id="image2" width="200" height="200"/>
                        <div class="card-body">
                             <p class="card-title">${title}</p>
                             <p class="card-text">${article}</p>      
                        </div>
                        <div class="card__footer">
                            <div class="user">
                                <img src="https://i.pravatar.cc/40?img=1" alt="user__image" class="user__image">
                                    <div class="user__info">
                                        <h5>${author}</h5>
                                        <small>${time} ${time_value} ago</small>
                                    </div>
                            </div>
                        </div>`

    myDiv.innerHTML = code;
    container.appendChild(myDiv);
    document.getElementById('title').value = '';
    document.getElementById('article').value = '';
    document.getElementById('author').value = '';
    document.getElementById('time').value = '';
    let ele = document.getElementsByName('time');
    for(var i=0;i<ele.length;i++)
      ele[i].checked = false;
    imageURL='';
    document.getElementById('image').value='';        
}



