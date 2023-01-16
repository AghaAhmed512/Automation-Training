let arr=[3,8,5,99,6,24,98,66];      
let largest=[0];

 for(let i=0;i<arr.length;i++){                     
	                                    
   if(arr[i] > largest)    
      {                                                 
	  largest = arr[i];                    
	                                      
	  }
 }
 console.log("Biggest number in array is "+largest);
 console.log("Index of the biggest number is "+ arr.indexOf(largest));