function conv(){
    let inp=Number(document.getElementById("in").value)
    let fa=inp*9/5+32
    let anss=document.getElementById("ans")
    anss.innerHTML=fa.toFixed(1) + "  °F"
    
}