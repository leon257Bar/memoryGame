export const createArrayNumbers = (count) => {

    let numberArray = []

    for (let i = 1; i < count + 1; i++) {
    numberArray.push(i, i)
    }
    return numberArray
}
    
export const shuffleArr = (arr) => {
        
    for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
    }