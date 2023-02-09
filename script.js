// Variables
const sizeSelect = document.getElementById('sizeSelect')
const textInput = document.getElementById('textInput')
const btn = document.getElementById('btn')
const container = document.querySelector('.code')

let textValue;
let sizeValue;
let OR_Code;


// Get Text input
textInput.addEventListener('input', ()=>{
    textValue = textInput.value
    console.log(textValue)
})

// Get Size Input
sizeValue = sizeSelect.selectedOptions[0].value
console.log(sizeValue)

let btn2 = document.createElement('button')
const getQRCode = async () =>{
    container.innerHTML = ""
    if(container.innerHTML == ""){
        OR_Code = await new QRCode(
            container, {
                text: textValue,
                width: sizeValue,
                height: sizeValue,
            }
        )
        btn2.textContent = "Cancel"
        btn2.className = "btn btn-secondary btn-sm"
        btn2.addEventListener('click', ()=>{
            container.innerHTML = ""
            document.querySelector('.buttons').removeChild(btn2)
            btn.removeAttribute('disabled')
        })
        document.querySelector('.buttons').appendChild(btn2)
        btn.setAttribute('disabled', 'true')
    }
}

btn.addEventListener('click', ()=>{
    if(textInput.value !== ""){
        getQRCode()
    }else{
        alert("Enter url or text")
    }
})

