let val= 0
 let first= document.getElementById('count').innerHTML= val
 let savingtext= document.getElementById('saving').innerHTML
 let opp = document.getElementById('increase')

 
function valid() {
    val = val + 1
    document.getElementById('count').innerHTML= val
   
    
}
function save() {
    
    let saved = val  + " - "
    document.getElementById('saving').innerHTML+= saved
    val =0
    document.getElementById('count').innerHTML= 0

}
