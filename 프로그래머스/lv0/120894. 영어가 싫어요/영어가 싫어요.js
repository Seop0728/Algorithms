function solution(numbers) {
    let find = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    find.forEach((item,index) => {
        numbers = numbers.replaceAll(item, index);
    })

    return Number(numbers)
}