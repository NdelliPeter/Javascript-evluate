let array = [1,5,3,7,0,3,4,6,];

function sort(a){
    for (i = 0; i < a.length; i++){
        for (j = 0; j < array.length; j++){
            if(a[j + 1] < a[j]){
                let temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
    return a;
}

let sorted = sort(array);

console.log(sorted)