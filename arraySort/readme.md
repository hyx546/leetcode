# 排序

## 冒泡排序

1. 两个for 循环，每次对边前后两个元素大小， arr[i] > arr[i+1] 则swap
2. 每次遍历循环找到最大的值
3. 平均时间复杂度是O(n2)， 最差是O(n2), 最好是O(n), 空间复杂度O(1);

## 选择排序

1. 每次从未排序的数组里找到最小的元素的位置，然后交换位置
2. 接着从剩下未排序的数组中找到最小的元素的位置，继续交换位置
3. 知道所有数都排序完
4. 平均时间复杂度是O(n2)， 最差是O(n2), 最好是O(n2), 空间复杂度O(1);

## 冒泡和选择排序的区别

1. 冒泡排序每轮交换的次数比较多，而选择排序每轮只会交换一次
2. 当数组碰到相同的数字时，冒泡排序相对而言是稳定的，选择排序相对而言不够稳定
3. 在时间效率上，选择排序比冒泡排序高

## 快速排序

1. 选择一个元素作为基准
2. 所有小于基准的数都移到左边， 大于基准的数都移到右边
3. 对于基准左右两个子集，不断重复1，2步骤直到子集只剩下一个元素为止
4. 平均时间复杂度是O(nlogn)， 最差是O(n2), 最好是O(nlogn),空间复杂度(nlogn)


## 归并排序

1. 把数组从中间分成两部分
2. 将前后两部分分别排序，然后再将排好序的两部分合并
3. 将前后两部分分别重复1，2 步骤 直到子集只剩下一个元素为止
4. 平均时间复杂度是O(nlogn)， 最差是O(nlogn), 最好是O(nlogn)，空间复杂度O(n)
