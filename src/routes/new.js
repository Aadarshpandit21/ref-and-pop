// let arr=[1,2,3,4,5,7,8,9];
// let a=0;
// for(let i=0;i<arr.length;i++){
//     if((arr[i+1]-arr[i])!==1){
//         a=arr[i]+(arr[i]-arr[i-1]);
//         break;
//     }
// }
// console.log(a);
// let arr = [1, 2, 4, 5, 6,7, 8];
// function findNumber(arr) {
//     let n = arr.length;
//     let total = ((n + 2) * (n + 1)) / 2;
//     for (let i = 0; i < n; i++) {
//       total = total - arr[i];
//     }
//     return total;
//   }
  
  
//   console.log(findNumber(arr));

// function neww(){
//     let a=0;
//     function new1(){
//         a=25;
//         var b=11;
//         function new2(){
//             b=25;
//             console.log(a)
//             console.log(b);
//         }
//         new2();
//     }
//     new1()
// }
// neww();


let players = [
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
        "swimming"
        ]
        },
        {
            "name": "aadarsh",
            "dob": "21/07/2000",
            "gender": "male",
            "city": "chhindwara",
            "sports": [
            "Chess"
            ]
            }
          ,
          {
            "name": "Akshay",
            "dob": "6/07/1998",
            "gender": "male",
            "city": "nagpur",
            "sports": [
            "Boxing"
            ]
            }
              ,{
                "name": "bobby",
                "dob": "4/12/1997",
                "gender": "male",
                "city": "indore",
                "sports": [
                "drawing"
                ]
                }                
]
const obj = {
            "name": "bobby",
                "dob": "4/12/1997",
                "gender": "male",
                "city": "indore",
                "sports": [
                "drawing"
                ]
}
flag=1;
for(let i=0;i<players.length;i++){
    if(players[i].name===obj.name){
        flag=0;
        break;
    }
}
if(flag==1){
    players.push(obj);
}
console.log(players);