function solution(age) {
    var answer = '';
    let ageNum = (age+'').split("")
    let age962  = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

    for ( let i = 0; i < ageNum.length; i++ ) {
        answer += age962[ageNum[i]]
    }
    return answer;
}
