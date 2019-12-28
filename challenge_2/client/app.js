const http = new XMLHttpRequest();
document.getElementById("myform").addEventListener("click", function(event){
    event.preventDefault()
    const url = "/hello"
    http.open("GET",url);
    http.send()
    http.onreadystatechange = function(){
        if(this.readyState ===4 && this.status ===200){
        let test = JSON.parse(http.responseText)
            console.log(iterate(test))
          document.getElementById("text").innerText += iterate(test)
        
        
        }
    }
    
  });
  let str = ""
  const iterate = (obj) => {
    Object.keys(obj).forEach(key => {

      str += key +" || "+ obj[key]+"\n"

    if (Array.isArray(obj[key]) && obj[key].length !== 0 ) {
            obj[key].forEach(elm=>{
                iterate(elm)
            })
        }
    })
    return str
}