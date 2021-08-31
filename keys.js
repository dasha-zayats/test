function sum(a, b) {
  return a+b; 
}

function counter(func){
  let count=0;

  function wrapper(){
    count++;
  }

  function call(){
    wrapper();
    return func(...arguments);
  } 

  return call;
}

let counterSum=counter(sum);

alert(counterSum(1,3));
alert(counterSum(2,3));
// alert(counterSum(4,5));