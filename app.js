function accum(str){
    let letters = str.toLowerCase().split('');
    for (let i = 0; i < letters.length; i++) {
      letters[i] = letters[i].toUpperCase() + letters[i].repeat(i);
    }
    return letters.join('-');
  }
  
  console.log(accum("abcd"));    //==>  "A-Bb-Ccc-Dddd"
  console.log(accum("RqaEzty")); //==>  "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  console.log(accum("cwAt"));    //==>  "C-Ww-Aaa-Tttt"