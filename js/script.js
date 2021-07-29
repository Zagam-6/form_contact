const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
    e.preventDefault();
    statusTxt.style.color = "#0d6efd";
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest(); // creating new xml object
    xhr.open("POST", "message.php", true); //sending post request to message.php
    xhr.onload = ()=>{ //o data ce ajax se incarca
        if(xhr.readyState == 4 && xhr.status == 200){
            
            let response = xhr.response;
            if(response.indexOf("Email and message field is required!") != -1 || response.indexOf("Enter a valid email address!") !=-1||response.indexOf("Sorry, failed to send your message!")!=-1){
                statusTxt.style.color = "red";
            }else{
                form.reset();
                setTimeout(()=>{
                    statusTxt.style.display = "none";
                }, 3000);
            }
              statusTxt.innerText = response;
              form.classList.remove("disabled");
         }

    }
    let formData = new FormData(form); //creeaza o nouaformData obj.this obj is used to send from data
    xhr.send(formData); //trimitere prin data
}