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


// let arr = [2, 1, 5, 1, 3, 2];
// let k = 3;

// // Calculate the sum of the first window
// let sum = 0;

// for (let i = 0; i < k; i++) {
//     sum += arr[i];
// }

// let maxSum = sum;

// // Slide the window
// for (let i = k; i < arr.length; i++) {
//     sum = sum - arr[i - k] + arr[i];

//     if (sum > maxSum) {
//         maxSum = sum;
//     }
// }

// console.log(maxSum); // 9



//! to get the sum
// function longestSubarray(arr, k) {
//     let left = 0;
//     let sum = 0;
//     let maxLength = 0;

//     for (let right = 0; right < arr.length; right++) {
//         // Step 1: Expand the window
//         sum += arr[right];

//         // Step 2: Shrink the window if sum exceeds k
//         while (sum > k) {
//             sum -= arr[left];
//             left++;
//         }

//         // Step 3: Update the maximum length
//         let length = right - left + 1;
//         maxLength = Math.max(maxLength, length);
//     }

//     return maxLength;
// }

// let arr = [2, 1, 5, 1, 3, 2];
// let k = 7;

// console.log(longestSubarray(arr, k)); // Output: 3


//! to get the subarray

// function longestSubarray(arr, k) {
//     let left = 0;
//     let sum = 0;
//     let maxLength = 0;
//     let start = 0;
//     let end = -1;

//     for (let right = 0; right < arr.length; right++) {
//         sum += arr[right];

//         while (sum > k) {
//             sum -= arr[left];
//             left++;
//         }

//         let length = right - left + 1;

//         if (length > maxLength) {
//             maxLength = length;
//             start = left;
//             end = right;
//         }
//     }

//     return arr.slice(start, end + 1);
// }

// let arr = [2, 1, 5, 1, 3, 2];

// console.log(longestSubarray(arr, 7));
// // Output: [1, 3, 2]



//! to get the value
function minSubarrayLength(arr, k) {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];

        while (sum >= k) {
            let length = right - left + 1;

            minLength = Math.min(minLength, length);

            sum -= arr[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

let arr = [2, 3, 1, 2, 4, 3 ];

console.log(minSubarrayLength(arr, 10)); // Output: 2

//! to get the subarray

// function minSubarray(arr, k) {
//     let left = 0;
//     let sum = 0;
//     let minLength = Infinity;
//     let start = 0;
//     let end = -1;

//     for (let right = 0; right < arr.length; right++) {
//         sum += arr[right];

//         while (sum >= k) {
//             let length = right - left + 1;

//             if (length < minLength) {
//                 minLength = length;
//                 start = left;
//                 end = right;
//             }

//             sum -= arr[left];
//             left++;
//         }
//     }

//     return end === -1 ? [] : arr.slice(start, end + 1);
// }

// let arr = [2, 3, 1, 2, 4, 3];

// console.log(minSubarray(arr, 7)); // Output: [4, 3]




//! to get the length
// function longestSubstringLength(str) {
//     let left = 0;
//     let maxLength = 0;
//     let set = new Set();

//     for (let right = 0; right < str.length; right++) {

//         // Shrink the window if a duplicate exists
//         while (set.has(str[right])) {
//             set.delete(str[left]);
//             left++;
//         }

//         // Add the current character
//         set.add(str[right]);

//         // Update the maximum length
//         let length = right - left + 1;
//         maxLength = Math.max(maxLength, length);
//     }

//     return maxLength;
// }

// let str = "abcabcbb";

// console.log(longestSubstringLength(str)); // Output: 3


//! to get the substring
// function longestSubstring(str) {
//     let left = 0;
//     let maxLength = 0;
//     let start = 0;
//     let set = new Set();

//     for (let right = 0; right < str.length; right++) {

//         // Shrink the window if a duplicate exists
//         while (set.has(str[right])) {
//             set.delete(str[left]);
//             left++;
//         }

//         // Add the current character
//         set.add(str[right]);

//         // Update the longest substring
//         let length = right - left + 1;

//         if (length > maxLength) {
//             maxLength = length;
//             start = left;
//         }
//     }

//     return str.slice(start, start + maxLength);
// }

// let str = "abcabcbb";

// console.log(longestSubstring(str)); // Output: "abc"
