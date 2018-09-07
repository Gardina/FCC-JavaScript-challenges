//  to double array without loops or array helper methods
const numbers = [0,2, 3, 4, 5, -2];

function double([n, ...rest]){
 return rest.length>0 ? [n*2, ...double(rest)] : [n*2]
}

double(numbers)
