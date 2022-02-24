var majorityElement = function(nums) {
    let majority = 0;
    let majNum = 0;
    let dupObj = {};
    for(let i = 0; i < nums.length; i++){
        let currNum = nums[i];
        if(dupObj[currNum]){
            dupObj[currNum] +=1;
        }
        else{
            dupObj[currNum] = 1;
        }
    }
    for(let key in dupObj){
        if(dupObj[key] > majority){
            majority = dupObj[key];
            majNum = key;
        }
    }
    return majNum;
};
