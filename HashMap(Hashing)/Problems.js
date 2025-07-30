
const createHashMap = () =>{
    let map = {};

    return {
        set: function(key,value){
            map[key] = value;
        },
        get: function(key){
            return map.hasOwnProperty(key) ? map[key] : undefined;
        },
        has: function(key){
            return map.hasOwnProperty(key);
        },
        key: function(){
            return Object.keys(map);
        },
        values:function(){
            return Object.values(map);
        },
        entries: function(){
            return Object.entries(map);
        }
    }
}


let hm = createHashMap();

hm.set('name','Bhavik');
hm.set('age',27);
hm.set('job','frontend Developer');

console.log(hm.get('name'));
console.log(hm.get('age'));
console.log(hm.has('name'));

console.log(hm.entries());
console.log(hm.key());
console.log(hm.values());