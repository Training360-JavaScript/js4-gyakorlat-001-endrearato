const x = ['egy','kettő', 'három', 'négy', 'öt']
x.forEach(converterPromise)
function converterPromise(item){
    let string = item.typeof
    if (string === string){
        console.log(item.toUpperCase())
    }else{
        console.error('error')
    }
}




export default converterPromise;
