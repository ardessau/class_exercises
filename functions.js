
var total = add(3,4);

if(canDrink(19)) {
    console.log("Cheers!");  // line only runs if condition is true, i.e. is age >= 21
}

var total = add(add(1,add(2,3)), add(1,2));  // total = 9 here

function add (x, y){
    // debugger;
    // console.log(x + y);
    return x + y;
}

function canDrink(age){
    if(age >= 21) {
        return true;
    } else {
        return false;
    }

    // var z = 3;  // will not compute because function canDrink returns a value
}
