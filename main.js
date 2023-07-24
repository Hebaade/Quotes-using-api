var quoteArray=[]
var index=0
var textPosition=0
var flag=true
var destination=document.getElementById("typedText")
function loadQuote(){
    const url = 'https://api.quotable.io/random';
    fetch(url)
    .then(response=>{
        if(response.ok){
            return response.json()
        }
        else{
            console.log(response.status)
        }
    })
    .then(data=>{
            quoteArray[index] = data.content
    })
}
function typeWriter(){
    if(flag){
        loadQuote()
        quoteArray[index] += ''
        flag = false
    }
    destination.innerHTML=quoteArray[index].substring(0,textPosition)+'<span>\u25ae</span>'
   if(textPosition++ != quoteArray[index].length)
   {
      setTimeout(typeWriter,100)
   }
   else{
    quoteArray[index] = ''
    setTimeout(typeWriter,10000)
    textPosition=0
    flag=true
   }
 }
 window.addEventListener('load',typeWriter)
