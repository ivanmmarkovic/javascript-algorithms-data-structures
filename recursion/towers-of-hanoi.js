
function printMove(start, end){
    console.log(`Moving from ${start} to ${end}`);
}

function towers(n, start, spare, end){
    if(n == 1){
        printMove(start, end);
    }
    else{
        towers(n - 1, start, end, spare);
        towers(1, start, spare, end);
        towers(n - 1, spare, start, end);
    }

}




towers(3, 'start', 'spare', 'end');