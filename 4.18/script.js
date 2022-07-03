function divideArray(numbers) {
    let evenNums = [];
    let oddNums = [];
    for (i in numbers) {
        if (numbers[i] % 2 == 0) {
            evenNums.push(numbers[i]);
        }
        else {
            oddNums.push(numbers[i]);
    }
    }
    evenNums.sort(function (a, b) {  return a - b;  });;
    oddNums.sort(function (a, b) {  return a - b;  });;

    console.log("Even numbers:");
    if (evenNums.length == 0) {
        console.log("None");
    }
    else {
        for (i in evenNums) {
            console.log(evenNums[i]);
        }
    }

    console.log("Odd numbers:");
    if (oddNums.length == 0) {
        console.log("None");
    }
    else {
        for (i in oddNums) {
            console.log(oddNums[i]);
        }
    }
}