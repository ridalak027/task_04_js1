/* function to calculate Average to a group of numbers in table */

const T = [1,2,3,4,5,6,7,8,9,10,11,12];

function moyene(tab,n){
    var S=0,M=0;
    for (let i = 0; i < n; i++) {
        S += tab[i];
    }
    M=S/n;
    return M;
}

console.log(moyene(T,4));

/* function return area of  triangle */

function triangle(rise,base){
    return (rise*base*0.5);
}

console.log(triangle(1,4));

/* function return the age in days */

function age_days(age) {
    return (age*365);
}

console.log(age_days(18));

/* function return sum of two numbers */

function sum_two(n1,n2) {
  return (n1+n2);  
}

/* function print the first name in the array */

const T_names = ["rida","salma","fatima","farouk","akram","ines","hadjer","hanan","ahmed","mohammed"];

function first_name_tab(tab){
    document.getElementById("firstnameintab").innerHTML=`the first name in the array is: ${tab[0]}` 
}

first_name_tab(T_names);

/* function print my name */

function my_name(){
    document.getElementById("myname").innerHTML=`my name is: LAKHDARI MOHAMMED RIDA!` 
    return 0;
}

my_name();

/* function return the time in Seconds */

function hour_Seconds(hour) {
   return (hour*3600); 
}

console.log(hour_Seconds(1));

/* function return true or false version 1*/

function four_numbers1(n1,n2,n3,n4) {
    if((sum_two(n1,n2)+sum_two(n3,n4)) > 350){
        document.getElementById("fournumbers1").innerHTML= "true";
    }else{
        document.getElementById("fournumbers1").innerHTML= "false";
    }
}

four_numbers1(1,2,3,0);

/* function return true or false version 2*/

function four_numbers2(n1,n2,n3,n4) {
    if((n1+n2+n3+n4) > 350){
        document.getElementById("fournumbers2").innerHTML= "true";
    }else{
        document.getElementById("fournumbers2").innerHTML= "false";
    }
}

four_numbers2(1,2,3,0);