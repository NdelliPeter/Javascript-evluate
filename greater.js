

function greaterthan(x,y){
    let great = 0;
    if(x > y){
        great =+ x;
    }else{
        great =+ y;
    }
    return (great);
}

let greater = greaterthan(9,5)

console.log(greater);