function one(callback) {
    setTimeout(function() {
        console.log('1');
    }, 0);
    callback();
}

function two() {
    console.log('2');
}

one(two);