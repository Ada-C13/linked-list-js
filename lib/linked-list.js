const { transformFromAst } = require("@babel/core");

// Defines a node in the singly linked list
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
// Defines the singly linked list
class LinkedList {
    // keep the head private. Not accessible outside this class
    // note that this language feature is only available from Node 12 on
    #head;
    constructor() {
        this.#head = null;
    }

    /*
    method to add a new node with the specific data value in the linked list
    insert the new node at the beginning of the linked list
    Time Complexity: O(1)
    Space Complexity: O(1)
    */
    addFirst(value) {
        const newHead = new Node(value);
        newHead.next = this.head
        this.head = newHead
    }

    /*
    method to find if the linked list contains a node with specified value
    returns true if found, false otherwise
    Time Complexity: ?
    Space Complexity: ?
    */
    search(value) {
        let current = this.head
       
        while (current) {
            if (current.value === value){
                return true
            }else {
                current = current.next
            }
            }
            return false

    }

    /*
    method to return the max value in the linked list
    returns the data value and not the node
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    findMax(){
        let current = this.head
        let max = -Infinity
     
        if (this.head === null){
            return null
        }
        while(current){
          if (current.value > max){
            max = current.value
          }
          current = current.next

        }
          return max
    }
    /*
    method to return the min value in the linked list
    returns the data value and not the node
    Time Complexity: ?
    Space Complexity: ?
     */
    findMin() {
        let current = this.head
        let min = Infinity

        if (this.head === null){
            return null
        }
      
        while(current){
          if (current.value < min){
            min = current.value
          }
          current = current.next
       
        }
         return min
    }

    /*
    method that returns the length of the singly linked list
    Time Complexity: ?
    Space Complexity: ?
     */
    length() {
        let current = this.head
        let count = 0
   
        while(current){
          count += 1
          current = current.next
        }
         return count
    }

    /*
    method that returns the value at a given index in the linked list
    index count starts at 0
    returns nil if there are fewer nodes in the linked list than the index value
    Time Complexity: ?
    Space Complexity: ?
     */
    getAtIndex(index) {
        let current = this.head
        let i = 0
    
        while(current){
          if (i === index){
            return current.value
          } else {
            current = current.next
            i += 1
          }
        }
        return null
    }

    /*
    method to print all the values in the linked list
    Time Complexity: ?
    Space Complexity: ?
    */
    visit() {
        let current = this.head

        while(current){
          console.log(current.value)
        }
    }
    /*
    method to delete the first node found with specified value
    Time Complexity: ?
    Space Complexity: ?
    */
    delete(value) { 
        let current = this.head; 
        let prev = null; 
      
        // iterate over the list 
        while (current != null) { 
            // comparing element with current 
            // element if found then remove the 
            // and return true 
            if (current.value === value) { 
                if (prev == null) { 
                    this.head = current.next; 
                } else { 
                    prev.next = current.next; 
                } 
                this.size--; 
                return current.value; 
            } 
            prev = current; 
            current = current.next; 
        } 
        return -1; 
    }

    /*
    method to reverse the singly linked list
    note: the nodes should be moved and not just the values in the nodes
    Time Complexity: ?
    Space Complexity: ?
    */
    reverse() {
        let current = this.head
        let prev  = null
 
        while (current) {// check if current is at the end
          let next = current.next;
          current.next = prev;
          prev = current;
          current = next;
         
        }
        this.head = prev
      return prev
    }

    // Advanced Exercises

    /*
    returns the value at the middle element in the singly linked list
    Time Complexity: O(n)
    Space Complexity: O(1)
     */
    findMiddleValue() {
        let fast = this.head;
        let slow = this.head;
        let next = this.head.next
       
        while(fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }
      return slow

    }

    /*
    find the nth node from the end and return its value
    assume indexing starts at 0 while counting to n
    Time Complexity: ?
    Space Complexity: ?
    */
    findNthFromEnd(n) {
        throw new Error("This method hasn't been implemented yet!");
    }

    /*
    checks if the linked list has a cycle. A cycle exists if any node in the
    linked list links to a node already visited.
    returns true if a cycle is found, false otherwise.
    Time Complexity: ?
    Space Complexity: ?
    */
    hasCycle() {
        throw new Error("This method hasn't been implemented yet!");
    }


    // Additional Exercises 

    /*
    returns the value in the first node
    returns nil if the list is empty
    Time Complexity: O(1)
    Space Complexity: O(1)
    */
    getFirst() {
        return this.head
    }

    /*
    method that inserts a given value as a new last node in the linked list
    Time Complexity: ?
    Space Complexity: ?
    */
    addLast(value) {
        let node = new Node(value);
        let current;
    
        // If empty, make head
        if (!this.head) {
          this.head = node;
        } else {
          current = this.head;
    
          while (current.next) {
            current = current.next;
          }
    
          current.next = node;
    
        }
    
        this.size++;

    }

    /*
    method that returns the value of the last node in the linked list
    returns nil if the linked list is empty
    Time Complexity: ?
    Space Complexity: ?
    */
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode.value
    }

    /*
    method to insert a new node with specific data value, assuming the linked
    list is sorted in ascending order
    Time Complexity: ?
    Space Complexity: ?
    */
    insertAscending(value) {
        throw new Error("This method hasn't been implemented yet!");
    }

    /*
    Helper method for tests
    Creates a cycle in the linked list for testing purposes
    Assumes the linked list has at least one node
    */
    createCycle() {
        if (!this.#head) return; // don't do anything if the linked list is empty

        // navigate to the last node
        let current = this.#head;
        while (current.next) {
            current = current.next;
        }

        current.next = this.#head;
    }

    end

}

module.exports = LinkedList;