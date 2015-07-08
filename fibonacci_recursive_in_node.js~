function fibonacci_recursive(number_to_reach) {
    if (number_to_reach > 2) {
        // console.log("Hit the > 2 conditional");
        return fibonacci_recursive(number_to_reach - 1) + fibonacci_recursive(number_to_reach - 2); }

    else if (number_to_reach == 1 || number_to_reach == 2) return 1;
    else if (number_to_reach == 0) return 0;
    else if ( number_to_reach < 0 ) console.log("Can't use a negative number to reach");
    else if ( isNaN(number_to_reach) ) console.log("Not a number");
}

i = 1;
end = process.argv[2];

while (i <= end) {
    console.log("The " + i + "th fibonacci number is " + fibonacci_recursive(i) );
    i++;
}
