const removeFromArray = function(array, ...remove) {
    let newArray = array;
    let removed;

    for (let i = 0; i < remove.length; i++) {
        const index = newArray.indexOf(remove[i]);
        
        if (index >= 0) {
            removed = newArray.splice(index, 1); 
        }
    }

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
