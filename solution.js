// node
function Node(val) {
    this.value = val
    this.next = null
}
// linked list 
function LinkedList() {
    this.head = null
    this.addNode = function(val){
        if (!this.head) this.head = new Node(val)
        else{
            let lastNode = null
            let curr = this.head
            while(curr){
                lastNode = curr
                curr =curr.next
            }
            lastNode.next= new Node(val)
        } 
    }
}
// linked list setup
const linkedList = new LinkedList()
linkedList.addNode(1)
linkedList.addNode(2)
linkedList.addNode(3)

// 1 -> 2 -> 3 -> 4 reverse
// 4 -> 3 -> 2 -> 1
function reverseLinkedList(root) {
    let current = root
    let prev = null
    let nxt = null

    while (current) {
        nxt = current.next
        current.next = prev
        prev = current
        current = nxt
    }
    return prev
}
// driver code
console.log(reverseLinkedList(linkedList.head))
 
