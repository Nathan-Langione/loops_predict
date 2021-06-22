/* Will print the number stored in num and increment by one as long as num is less than 15. The result would be 0-14 */
for(var num = 0; num < 15; num++){
    console.log(num);
}



/* Will print the number stores in i if it is divisible by 3 and then increment by 2. The result would be 3 and 9  */
for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}



/* Will print the number stored in j. If the number is divisible by 2 it will increment by 2, if divisible by 3 it will increment by 1, 
and if not divisible by either it will increment by 1. The result would be 1, 4, 5, 8, 10, 11, 14, 16 */
for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}
