const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  get size() {
    // throw new Error('Not implemented');
    return ListNode.length;
  }

  enqueue(element) {
    // throw new Error('Not implemented');
    ListNode.appendChild(element);
  }

  dequeue() {
    ListNode.removeChild(ListNode.firstChild);
  }
}

module.exports = Queue;
