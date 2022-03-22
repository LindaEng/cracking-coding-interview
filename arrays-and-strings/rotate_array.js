// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

function rotate(matrix) {
    for(let i = 0; i < (matrix.length / 2); i ++){
        let length = matrix.length 
        for(let j = i; j < length - i - 1; j++){
            // let A = matrix[i][j]
            // let B = matrix[j][length - i - 1]
            // let C = matrix[length - 1 - i][length - 1 - j]
            // let D = matrix[length - 1 - j][i]
            
            let temp = matrix[j][length - i - 1]
            matrix[j][length - i - 1] = matrix[i][j]
            matrix[i][j] = temp

            temp = matrix[length - 1 - i][length - 1 - j]
            matrix[length - 1 - i][length - 1 - j] = matrix[i][j]
            matrix[i][j] = temp

            temp = matrix[length - 1 - j][i]
            matrix[length - 1 - j][i] = matrix[i][j]
            matrix[i][j] = temp
            console.log(matrix)
        }
    }

    
};

rotate([[1,2,3,4,5],
        [6,7,8,9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25]])