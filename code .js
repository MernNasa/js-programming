// function GCD(a,b){
//     while(b!==0){
//         let rem=a%b;
//         a=b;
//         b=rem;
//     }
//     console.log(a)
// }

// // GCD(12,18)

// function LCM(a,b){
    
// }

const searchInput = document.getElementById("search");
function debouncing(callback,delay) {
    
    return function(){
        let timer;
        clearTimeout(timer);
        timer=setTimeout(()=>{
            callback();
        },delay)
    }
}

function searching(event){
    console.log("Searching for:", event);
}

const debouncedSearch=debouncing(searching,3000)

searchInput.addEventListener("input",debouncedSearch)