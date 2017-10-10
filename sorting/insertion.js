function insertion(array){
    for(var j = 1; j < array.length; j++){
        var key = array[j];
        var i = j - 1;
        while(i >= 0 && array[i] > key){
            array[i + 1] = array[i];
            i -= 1;
        }
        array[i + 1] = key;
    }
    return array;
}

console.log("insertion sort");
console.log(insertion([5,2,4,6,1,3]));