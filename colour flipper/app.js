const btn=document.getElementById("btn")
const color=document.getElementById("color")
const wrap=document.getElementById("wrap")

const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',function() 
{
    let hexc='#'
    for(let i=1;i<=6;i++){
        hexc+=random()

    }
    wrap.style.backgroundColor=hexc
    color.innerHTML="HASH CODE:"+hexc
})
function random(){
    let rand=Math.floor(Math.random()*16)
    return hex[rand]
}
