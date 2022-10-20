/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    const map = {};
    students.forEach(item => map[item] ? map[item]++ : map[item] = 1);
    for (let i = 0; i < sandwiches.length; i++) {
        if (!map[sandwiches[i]]) return sandwiches.length - i;
        map[sandwiches[i]] -= 1;
    }
    return 0;
};


console.log(countStudents(students = [1, 1], sandwiches = [0, 1]));