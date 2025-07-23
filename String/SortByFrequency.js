// Sort Characters by frequency

/*  Intitution   
1) Count the frequency of every character
2) Sort On the basis of frequency
3) Append character on the basis of frequency count
*/

// Brute force


/* const frequecySort = (s) =>{
    let freq_Map = {};

    for(let char of s){
        if(freq_Map[char] === undefined){
            freq_Map[char] = 1;
        }else{
            freq_Map[char] += 1;
        }
    }

    let chars = Object.keys(freq_Map);

    chars.sort((a,b) => freq_Map[b] - freq_Map[a] );

    let result = '';
    for(let char of chars){
        result += char.repeat(freq_Map[char] );
    }

    return result;
}

let s = 'tree';
console.log(frequecySort(s));

*/

// Optimal Approach (Used Bucket Sort )

const frequecySort = (s) =>{
    const freq_Map = {};

    // Count frequency
    for(let char of s){
        if(freq_Map[char] === undefined){
            freq_Map[char] = 1;
        }else{
            freq_Map[char] += 1;
        }
    }

    // Create bucket Array 
    const bucket = Array(s.length + 1).fill().map(() => [] );    //[undefined, [], [], [], [] ]

    // fill Bucket By frequency 
    // [undefined, ['t', 'r'], ['e'], [], [] ];
    for(let char in freq_Map){
        const freq = freq_Map[char];
        bucket[freq].push(char);
    }

    
    let result = '';
    for(let i = bucket.length-1; i>0; i--){

        for(let char of bucket[i]){
            result += char.repeat(i);
        }
    }

    return result;
}


const s = 'tree';
console.log(frequecySort(s));

