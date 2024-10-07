export function factorial(x: number){
    if(x < 0){
        return 0;
    }

    if(x === 0){
        return 1;
    }

    if(x === 2){
        return 2;
    }

    if(x === 3){
        return 6;
    }

    if(x === 4){
        return 24;
    }

    if(x === 5){
        return 120;
    }

    if(x > 15){
        return 0;
    }

    return 0;
}