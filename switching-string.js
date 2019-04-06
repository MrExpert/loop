//  assignement is to take given string - AAAA, and convert to new string 
// based on specific rules 
//  1) given the name of function, pass the veriable 'dna'
function DNAStrand(dna){
  // 2) split the 'string' to array
    var newArr = dna.split('');
    // 3) create a new array
    var switchArr = [];
    // 4) run the new [array] thru the loop 
    // we'r running it only once, so BigO notation be = linear, longer the string- longer the time complexity 
    for (var i = 0; i < newArr.length; i++) {
        // in if stmt we'r passing "newArr[i]"-  it's crucial to Remember that
        //  newArr[i] - is index(number of order) of each array(letter in this case) 
        if ( newArr[i] === 'A') {
    // 5) then we'r taking [switchArr] array and pushing letter 'T' into it.
            switchArr.push('T');    
        } else if (newArr[i] === 'T') {
            switchArr.push('A');
        } else if (newArr[i] === 'G') {
            switchArr.push('C');
        } else if (newArr[i] === 'C') {
            switchArr.push('G');
        } else {
            return 'err';
        }
    }; // end of For loop
return switchArr.join(''); // return will finish the function at the point its called -end of function
       //  above method - gets all elements of [switchArr] and concats together as '1 string'
}
console.log(DNAStrand('AAAA')); // result is consoles out 'TTTT' which is expected, Works!

// check code: codepen.io https://codepen.io/anon/pen/QPEYgo?editors=0012