/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color
are adjacent, with the colors in the order red, white, and blue.We will use the integers 0, 1, and 2 
to represent the color red, white, and blue, respectively.

 */

function sort(nums) {

    let red=0, white=0, blue=0;                             
    for (let i = 0; i < nums.length; i++) {              
        if (nums[i] === 0) {                           
            red++;                             
        } else if (nums[i] === 1) {            
            white++;                        
        } else {
            blue++;                        
        }
    }
    for (let i = 0; i < red; i++) {            
        nums[i] = 0;                       
    }
    for (let i = red; i < red + white; i++) {            
        nums[i] = 1;                                
    }
    for (let i = red + white; i < nums.length; i++) {      
        nums[i] = 2;                                   
    }
    return nums;   
}
let nums = [2,0,2,1,1,0];        
console.log(sort(nums));  