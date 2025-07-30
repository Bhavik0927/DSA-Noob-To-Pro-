const groupOfAnagram = (words) => {
    let map = {};

    for (let word of words) {
        const key = word.split('').sort().join('');
        
        if(!map[key]){
            map[key] = []
        }
        map[key].push(word);
    }

    return Object.values(map);
}

let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupOfAnagram(arr));