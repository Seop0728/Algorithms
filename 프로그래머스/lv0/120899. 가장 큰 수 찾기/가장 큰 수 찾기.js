function solution(array) {
    let answer = Math.max(...array)
    let index = array.indexOf(answer)

    return [answer, index];
}