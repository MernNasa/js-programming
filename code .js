function GCD(a,b){
    while(b!==0){
        let rem=a%b;
        a=b;
        b=rem;
    }
    console.log(a)
}

// GCD(12,18)


function isHappyNumber(num) {
        let seen = new Set();

            while (num !== 1) {
                    if (seen.has(num)) {
                                return false;
                                        }

                                                seen.add(num);

                                                        let sum = 0;

                                                                while (num > 0) {
                                                                            let digit = num % 10;
                                                                                        sum += digit * digit;
                                                                                                    num = Math.floor(num / 10);
                                                                                                            }

                                                                                                                    num = sum;
                                                                                                                        }

                                                                                                                            return true;
                                                                                                                            }

                                                                                                                            let n = 19;

                                                                                                                            if (isHappyNumber(n)) {
                                                                                                                                console.log(n + " is a Happy Number");
                                                                                                                                } else {
                                                                                                                                    console.log(n + " is not a Happy Number");
                                                                                                                                    }
}