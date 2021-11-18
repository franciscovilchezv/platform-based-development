var my_variable = "Hola!!!!";
var my_number = 14;
var my_number_2 = 18;


console.log(my_number + my_number_2);
console.log(my_number - my_number_2);
console.log(my_number * my_number_2);
console.log(my_number / my_number_2);

if (my_number_2 > my_number) {
    // Hacer esto si es true
    console.log("Si es trueeee!");
}
else {
    console.log("si es falseeeee!");
    // hacer si es false
}

for (var i = 0; i < 100; i++) {
    console.log("My value i: " + i);
}

let j = 0;
while(j < 100) {
    console.log("My j value: " + j);
    j++;

    if(j == 10){
        break;
    }
}

function my_first_function(my_var1, my_var2){
    console.log("estopy en mi primera function " + my_var1 + " " + my_var2);
}

my_first_function(4, "chaiii");