var removeNthFromEnd = function(head, n) {
    let current = head
    let next = head
    let length=1
    let i=0
    if(head===null){
        return head
    }
    while(current.next!==null){
        current = current.next
        length++
    }
    if(n===length){
        head=head.next
        return head
    }
    if(n>length){
        return head
    }
    if(length===1){
        return null
    }
    current = head
    while((length-n-1)>i){
        current=current.next
        i++
    }
    current.next=current.next.next
    return head
};