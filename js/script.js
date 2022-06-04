let adds = document.getElementById('add')
let background = document.getElementById('numberofhex')
let text1 = document.getElementById('hex1')
let color1 = document.getElementsByClassName('hex1')[0]
let push1 = document.querySelector('#line')
let push2 =document.querySelector('#rad')
let color2 = document.getElementsByClassName('hex2')[0]
let text2 = document.getElementById('hex2')
let hex1 = '#ffffff';
let hex2 = '#ffffff';
let grLorR = 'line';
document.getElementById('createhex').onclick = () =>{
    hex1 = renderHex();
    hex2 = renderHex();
    color1.value = `#${hex2}`
    color2.value =`#${hex1}`
    if(grLorR == 'line'){
        document.getElementById('main').style.background = `linear-gradient(to left, #${hex1} , #${hex2})`
        document.querySelector('.oops').style.background = `linear-gradient(to left, #${hex1} , #${hex2})`   
    }else if(grLorR == 'rad'){
        document.getElementById('main').style.background = `radial-gradient(#${hex1} , #${hex2})`
    document.querySelector('.oops').style.background = `radial-gradient(#${hex1} , #${hex2})`   
    }
}


    
function renderHex(){
    let hexNums = ['0','1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F']
    let hexCode = '';
    let randHex;
    for(let i = 0; i< 6; i++){
        randHex = Math.floor(Math.random()* hexNums.length)
        hexCode += hexNums[randHex]            
    } 
    return hexCode
}

function add(){
    let samcolor1 = document.getElementsByClassName('hex1')[0].value
    let samcolor2 = document.getElementsByClassName('hex2')[0].value
    if(grLorR == 'line'){
        document.getElementById('main').style.background = `linear-gradient(to left,${samcolor1} , ${samcolor2})`
        document.querySelector('.oops').style.background = `linear-gradient(to left, ${samcolor1} , ${samcolor2})`   
    }else if(grLorR == 'rad'){
        document.getElementById('main').style.background = `radial-gradient(${samcolor1} , ${samcolor2})`
        document.querySelector('.oops').style.background = `radial-gradient(${samcolor1} , ${samcolor2})`   
    }
}
adds.addEventListener('click', add)
color1.addEventListener('click', add)
color2.addEventListener('click', add)
///rad or line
function switchGrLine(){
    grLorR = 'line'
}
function switchGrRad(){
    grLorR = 'rad'
}
console.log(grLorR)
push2.addEventListener('click', switchGrRad)
push1.addEventListener('click', switchGrLine)
const copy = document.querySelector('#copy').onclick = () =>{
    let text = document.getElementById('main').style.background
    navigator.clipboard.writeText(text)
}

