
let bad = 0;
const isBadVersion = (val) =>{
    if(val >= bad){
        return true;
    }else{
        return false;
    }
}


const FirstBadVersion = (n) =>{
    let low = 1;
    let high = n;
    let fbv = -1;

    let mid = low +((high - low)/2);

    while(low < high){
        if(isBadVersion(mid) === true){
            fbv = mid;  
            high = mid - 1
        }else{
            low = mid + 1;
        }
    }
    return fbv;
}


