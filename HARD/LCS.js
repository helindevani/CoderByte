function lcs(str, str1 , length, length2){
    if(length === 0 || length2 === 0){
      return "";
    }
  
    if(str.charAt(length-1) === str1.charAt(length2-1)){
      return lcs(str,str1,length-1,length2-1)+str.charAt(length-1);
    }else{
       let ans1 = lcs(str,str1,length-1,length2);
       let ans2 =lcs(str,str1,length,length2-1);
       return ans1.length > ans2.length ? ans1 : ans2;
    }
  
    
  }
  
  let str1="abcabb";
  let str2="bacb";
  console.log(lcs(str1,str2,str1.length,str2.length));