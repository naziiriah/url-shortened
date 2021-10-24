// For top Menu
function openMenu(){
    document.querySelector('.col-8').style.display = 'block'
}


let shortenUrl = document.querySelector('.display-url')
let submitBtn = document.querySelector('#submitButton')
let value = document.querySelector('#value')


submitBtn.addEventListener('click', checkInputValue)

function checkInputValue(){
    !value.value ? errorDisplay() : setTimeout(CheckDisplay(value.value),1000)
}

function errorDisplay(){
    value.style.border = 'red solid 0.1rem';
    console.log('error');
    document.querySelector('.error-text').style.display= "block";
}
function CheckDisplay(value){
    fetch(`https://api.shrtco.de/v2/shorten?url=${value}`, {method:'GET'})
    .then(res => res.json())
  .then(datas =>{ 
    ({ ok, result } = datas)
    showUrl(result.full_short_link, value)
    // displayLink.innerHTML = link.value
  })
  .catch(error=>alert(error))
  
  let url = document.querySelector('.display-url')
  url.style.display = 'grid'
}

function spreadAPI(data){
    ({ok, result} =  data)
    console.log(result.short_url_link)
    showUrl(result.full_short_link, value.value)
}

// for displaying other urls and new urls
function showUrl(short, full){ 
    shortenUrl.style.display = 'block'
    let originalAddress = document.querySelector('#address')
    let shortenAdresss = document.querySelector('#short')

    originalAddress.innerHTML = `${full}`
    shortenAdresss.innerHTML = `${short}`
}


function correctFunction(){
  value.style.border = "0.1rem solid hsl(180, 66%, 49%)" 
  
}
function myFunction(value){
    var copyText = document.getElementById("short");
    let copyBtn  = document.querySelector('.copy-btn')
    copyBtn.value = `${value}`
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}