// prompt: Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3
 

// Constraints:

// 1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears two or more times.
 

// Follow up:

// How can we prove that at least one duplicate number must exist in nums?
// Can you solve the problem in linear runtime complexity?

//Strategy: Floyd's Algo 
//find a cycle by using a slow and fast pointer. 
//the slow and fast pointer will eventually point to the same value if there is a duplicate.
//only if the values are inclusive from 1 -> n
//a third pointer will catch up with the slow pointer.
//return the pointer

// function findDuplicate(nums) {
//     let slow = 0
//     let fast = 0

//     while(nums[slow] !== nums[nums[fast]]) {
//         slow = nums[slow]
//         fast = nums[nums[fast]]
//     }

//     let pointer = 0
//     while(pointer !== slow) {
//         pointer = nums[pointer]
//         slow = nums[slow]
//     }
//     console.log(pointer)
//     return pointer
// }


function findDuplicate(nums) {
    let slow = 0
    let fast = 0
    
    do{
        slow = nums[slow]
        fast = nums[nums[fast]]
    } while (slow !== fast)

    console.log(slow, fast)
    let p = 0
    while(p !== slow) {
        p = nums[p]
        slow = nums[slow]
    }
    
    console.log(p)
    return p
}


findDuplicate([1,2,3,2,4])