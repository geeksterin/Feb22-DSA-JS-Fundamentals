/**
 *
 * Priority Q is a linear data structure, where apart from value, another field exists with every element.
 * And Removal of element from Q is always done on the basis of this another field.
 *
 * Operations
 * - insert - enqueue
 * - peekMax()
 * - removeMax() - dequeue
 *
 * Arrays - Unsorted:
 *  insertion: O(1)
 *  peekMax:   O(n)
 *  removeMax: O(n)
 *
 * Arrays - Sorted:
 *  insertion: O(n)
 *  peekMax:   O(1)
 *  removeMax: O(1)
 *
 * LinkedList - Unsorted:
 *  insertion: O(1)
 *  peekMax:   O(n)
 *  removeMax: O(n)
 *
 * LinkedList - Sorted (if we only have the head pointer):
 *  insertion: O(n)
 *  peekMax:   O(n)
 *  removeMax: O(n)
 *
 * Binary Search Tree
 *            [balanced]   [sorted-input]
 *  insertion: O(log n)        O(n)
 *  peekMax:   O(log n)        O(n)
 *  removeMax: O(log n)        O(n)
 *
 * Binary Heap - Max Heap
 *  insertion: O(log n)
 *  peekMax:   O(1)
 *  removeMax: O(log n)
 */
