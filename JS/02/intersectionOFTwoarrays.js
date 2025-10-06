function findINtersection(arr1,arr2){
    const set1=new Set(arr1);
    const result=[];
    for(let num of arr2){
        if(set1.has(num)){
            result.push(num);
     set1.delete(num); // To avoid duplicates in result}
    }
}
return result;
}
console.log(findINtersection([1,2,2,1],[2,2])); //[2]
