/*
Input: "cats AND*Dogs-are Awesome"
Output: cats_and_dogs_are_awesome
Input: "a b c d-e-f%g"
Output: a_b_c_d_e_f_g
*/
function snakecase(str){
    return str.split(/[^a-zA-Z]/).map((a)=>(a.toLowerCase())).join('_');
}
console.log(snakecase("cats AND*Dogs-are Awesome"));