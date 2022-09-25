console.log("this is the mod");
function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    console.log(sum);


}
// module.exports={
//     avg:average,
//     name:"harsh"
// }
module.exports.name="harsh";
//arr=[100,200];
//average(arr);