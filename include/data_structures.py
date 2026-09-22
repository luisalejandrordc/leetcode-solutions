# Data structures module

from typing import Optional


class ListNode:
    def __init__(self, val: int = 0, next: Optional[ListNode] = None) -> None:
        self.val = val
        self.next = next

    def __str__(self) -> str:
        curr = self
        string = "["
        while curr is not None:
            if curr != self:
                string += ", "
            string += str(curr.val)
            curr = curr.next
        string += "]"
        return string
