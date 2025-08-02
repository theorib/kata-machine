# Notes

## Polynomial vs. Exponential

### Polynomial Time:

An algorithm runs in polynomial time if its runtime does not grow faster than n^k where k is any constant (eg. n^2 or n^3) and n is the size of the input

- O(1)
- O(n)
- 0(n\*logn)
- O(n^2)
- O(n^3)
- O(n^4)

### Exponential Time:

- O(2^n)
- O(3^n)
- ...
- O(n^n)
- O(n!) (technicaly O(n!) is factorial)

## Trees

### Depth First Tree Traversal

All of the traversals are O(n)

```
        (7)
  (23)       (3)
(5)  (4)  (18) (21)
```

Visiting the node means going in and doing something with the value. In all of these cases, the functions we write to traverse the tree, use an implicit data structure which is stack. In this case it's the call stack that is being used but we could instead of using recursion, solve all of these using a stack data structure and manually doing it.

#### Pre-order traversal

We visit a node, do something in that node, then recurse, first left, then right.

```
visitNode()
recurseLeft()
recurseRight()
```

Order of Visited Nodes = `7,23,5,4,3,18,21`

In pre-order, root is at the beginning

#### In-order traversal

```
recurseLeft()
visitNode()
recurseRight()
```

Order of Visited Nodes = `5,23,4,7,18,3,21`

In In-order, root is at the middle

#### Post-order traversal

```
recurseLeft()
recurseRight()
visitNode()
```

Order of Visited Nodes = `5,4,23,18,21,3,7`

In Post-order, root is at the end

### Breadth First Tree Traversal

(Could be known as tree level traversal) A breadth first traversal is in many ways the opposite of a Depth First traversal. In a breadth first traversal, the inplicit data structure that is used when recursing is a queue.

```
        (7)
  (23)       (3)
(5)  (4)  (18) (21)
```

Order of Visited Nodes = `7,23,3,5,4,18,21`

#### Breadth First Tree Traversal does not preserve shape

Because breadth first search uses a queue, which does not preserve the shape of the tree, it's not a suitable algorithm to check if a tree is equal to another tree in both shape and values

### Binary Search Tree (BST)

A binary tree that enforces two rules for every node:

- all left child nodes have to be <= than Node
- all right child nodes have to be > than node

The Time complexity of a BST search is between O(log n) and O(n) in which case n is not the size of the tree but the height of the tree

## Two Pointers

- Normally used to avoid nested loops
- Typical use cases:
    - Palindromes
    - Reversals
    - Merging sorted data
    - "K" sized comparisons

Tell tale signs:

- brute force solution is checking all pairs = brute force solution is scanning repeatedly

### Same Directions

- Used usually when you are doing a single pass over the data but you need to track a range, not just one element at a time
- If you use a fast/slow pointer technique it's really useful to find the middle of a data structure such as a linked list. If the fast point reaches the end and the slow pointers moves at half the speed, you've found the middle. You can also use this technique to identify a cycle. If the slow pointer reaches the fast pointer you've identified a cycle

### Opposite Directions

- With the opposite direction pointer:
    - finding simetry (like finding palindromes)
    - avoiding nested loops when looking at all pairs
    - specially powerful in sorted lists

- Reduces the number of iterations
- One of the few techniques that can actually optimise both time and space complexity at once
- track a relationship between two places

## Sliding Window

- If a problem is asking about contiguous segments such as a sub string, sub array,

### Fixed Window

- When a size is defined such as:
    - find the maximum average of any sub-array of size k
    - return the sum of every k length block
    - find the sub-array of length k with the smalles/largest x

```python
def sliding_window_fixed(input, window_size):
  ans = window = input[0:window_size]
  for right in range(len(input)):
    left = right - window_size
    remove input[left] from window
    append input[right] to window
    ans = optimal(ans,window)
  return ans
```

### Dynamic Window

- finding the largest, smallest or optimal range that satisfies some condition such as:
    - find the length of the longest substring with at most K unique characters
    - what's the smallest subarray with the sum greater than the target
    - return the longest window where a certain rule is valid

```python
def sliding_window_flexible_longest(input):
  initialize window, ans
  left = 0
  for right in range(len(input)):
    append input[right] to window
    while invalid(window):
      remove input[left] from window
      left+=1
    ans = max(ans, window)
  return ans
```

## Binary Serch

- Does not have to be on ordered arrays only. It can work with any monotonic value such as:
    - Find the minimum in a rotated sorted array All we need to do here is transform every case in a boolean and then find the first true or false value depending on the problem
