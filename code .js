// function GCD(a,b){
//     while(b!==0){
//         let rem=a%b;
//         a=b;
//         b=rem;
//     }
//     console.log(a)
// }

// // GCD(12,18)


// function isHappyNumber(num) {
//         let seen = new Set();

//             while (num !== 1) {
//                     if (seen.has(num)) {
//                                 return false;
//                                         }

//                                                 seen.add(num);

//                                                         let sum = 0;

//                                                                 while (num > 0) {
//                                                                             let digit = num % 10;
//                                                                                         sum += digit * digit;
//                                                                                                     num = Math.floor(num / 10);
//                                                                                                             }

//                                                                                                                     num = sum;
//                                                                                                                         }

//                                                                                                                             return true;
//                                                                                                                             }

//                                                                                                                             let n = 19;

//                                                                                                                             if (isHappyNumber(n)) {
//                                                                                                                                 console.log(n + " is a Happy Number");
//                                                                                                                                 } else {
//                                                                                                                                     console.log(n + " is not a Happy Number");
//                                                                                                                                     }
// }
// function LCM(a,b){
    
// }

// const searchInput = document.getElementById("search");
// function debouncing(callback,delay) {
    
//     return function(){
//         let timer;
//         clearTimeout(timer);
//         timer=setTimeout(()=>{
//             callback();
//         },delay)
//     }
// }

// function searching(event){
//     console.log("Searching for:", event);
// }

// const debouncedSearch=debouncing(searching,3000)

// searchInput.addEventListener("input",debouncedSearch)


let arr = [2, 1, 5, 1, 3, 2];
let k = 3;

// Calculate the sum of the first window
let sum = 0;

for (let i = 0; i < k; i++) {
    sum += arr[i];
}

let maxSum = sum;

// Slide the window
for (let i = k; i < arr.length; i++) {
    sum = sum - arr[i - k] + arr[i];

    if (sum > maxSum) {
        maxSum = sum;
    }
}

console.log(maxSum); // 9
