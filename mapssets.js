// Maps and Sets Exercise
// Quick Question #1

// What does the following code return?

new Set([1,1,2,2,3,4]);

//returns the set

// Quick Question #2

// What does the following code return?

[...new Set("referee")].join("");

//[referee]
//no repeats, should return [ref]

// Quick Questions #3

// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//([1,2,3]: false),[1,2,3]:true 
//each array has a different reference

// hasDuplicate

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

function hasDuplicate(arr){
    let mySet = new Set(arr);
    

    if(mySet.size <arr.length){
        return true;
    }
    else return false;

}

hasDuplicate([1,3,2,1]); // true
hasDuplicate([1,5,-1,4]); // false

// vowelCount

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
function vowelCount(inputStr){
    let finalMap = new Map();
    strLowered = inputStr.toLowerCase();

    for (let char of strLowered){
        if(char === 'a'||char === 'e'||char === 'i'||char === 'o'||char === 'u'){
            if(finalMap.has(char)){
                finalMap.set(char, finalMap.get(char)+1) ;

            }
            else{
                finalMap.set(char,1);
            }
        }
    }
    return finalMap;
}





vowelCount('awesome'); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt'); // Map { 'o' => 1 }


