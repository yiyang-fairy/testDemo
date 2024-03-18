/**
 * 输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
示例 2：

输入：height = [1,1]
输出：1
 */
const maxArea = function (height) {
  const n = height.length;
  let l = 0;
  let r = n - 1;
  let max = 0;
  while (l < r) {
    if (height[l] < height[r]) {
      max = Math.max(max, height[l] * (r - l));
      l++;
    } else {
      max = Math.max(max, height[r] * (r - l));
      r--;
    }
  }
  return max;
};

const height = [1, 1];
console.log(maxArea(height));
