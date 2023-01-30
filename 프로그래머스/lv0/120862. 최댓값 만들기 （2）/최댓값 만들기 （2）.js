function solution(numbers) {
    const num_len = numbers.length;

    numbers.sort((a,b) => a - b);

    return Math.max(
        numbers[num_len-1] * numbers[num_len-2],
        numbers[0] * numbers[1]
    )
}