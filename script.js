var sec=0
var min=0
var hr=0

var interval

function doisDigitos(digit){
    if(digit<10){
        return("0"+digit)
    }else{
        return(digit)
    }
}

function iniciar(){
    cronometro()
    interval= setInterval(cronometro,10)


}

function parar(){
    clearInterval(interval)

}

function resetar(){
    clearInterval(interval)
    sec=0
    min=0
    //window.alert("Você parou em: "+document.getElementById("cronometro").innerText)
    document.getElementById("cronometro").innerText="00:00:00"

}

function cronometro(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById("cronometro").innerText=doisDigitos(hr)+":"+doisDigitos(min)+":"+doisDigitos(sec)
} 