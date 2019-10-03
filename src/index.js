module.exports = function zeros(expression) {
  var zeroes = [0,0];
  
  var parseStr = (str) =>{
      if(str.includes("*")==true){
          return str.trim().split('*');
      }else{
          return [str];
      }
  }
  
  var findZeros = (n, check = null) => {
      let countBegin = check=="even" ? 2: 1;
      let incr = check=="even" || check=="odd" ? 1 : 0;
  
      for(i=countBegin; i<=n; i++){
          if(i%2==0) zeroes[0] +=1;
          if(i%5==0) {
            zeroes[1] +=1
            let j = i/5;
            if(j%5==0){
              zeroes[1] +=1
            }
        }
          i +=incr;
      } 

  }
  
  
  var calcFactorial = (elem) =>{
      if(elem.slice(-2)=="!!"){
          if(parseInt(elem)%2==0){
              findZeros(parseInt(elem), "even");
          }else{
              findZeros(parseInt(elem), "odd");
          }
      }else{
          findZeros(parseInt(elem));
      }
  }
  
  parseStr(expression).forEach(el=>calcFactorial(el));
  return Math.min(...zeroes);
}
