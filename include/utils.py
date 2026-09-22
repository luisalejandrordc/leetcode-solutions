# Utils functions module
import time


def print_title(title: str) -> None:
    print("-" * (len(title) + 10))
    print("|    " + title + "    |")
    print("-" * (len(title) + 10))


def timed_call(func, *args):
    start = time.perf_counter()
    func(*args)
    print(f"Execution time: {time.perf_counter() - start:.6f} seconds")


def my_func(foo):
    print(foo)
    string = ""
    a = ord("a")
    for x in range(10000):
        string += chr(a + x % 26)

    counter = 0
    for char1 in string:
        for char2 in string:
            if char1 == char2:
                counter += 1

    print(counter)


timed_call(my_func, 1)
