/*this content remove skills infor.and line also*/

var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablinks of tablinks){
        tablinks.classList.remove("active-link");
    }
    for(tabcontents of tabcontents){
        tabcontents.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");/*red underline*/
    /* cursor on experience it open all detail*/
    document.getElementById(tabname).classList.add("active-tab");
}
var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0"; 
}
function closemenu(){
    sidemenu.style.right="-200px"; 
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxh4AvO5T5s0pESgyAXvvaraFMOYl7jFu9BRI6JYqJ438t-yKtmYsnThO-EYMFT95ze/exec'

  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Messages sent succesfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
