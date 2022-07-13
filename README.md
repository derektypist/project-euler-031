# Project Euler 031 - Coin Sums

In the United Kingdom the currency is made up of pound (£) and pence (p).  There are eight coins in general circulation:

    1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).

It is possible to make £2 in the following way:

    1x£1 + 1x50p + 2x20p + 1x5p + 1x2p + 3x1p

The aim is to find the number of different ways that `n` pence can be made using any number of coins.  

Information at [Project Euler 031](https://projecteuler.net/problem=31)

**Hint**

- There are 100 pence in a pound (£1 = 100p)
- There are coins (in pence) are available: 1, 2, 5, 10, 20, 50, 100, 200
- How many different ways you can combine these values to make n pence

**Example**

To make 5p there are 4 ways:

    1,1,1,1,1
    1,1,1,2
    1,2,2
    5

## UX

**User Stories**

As a user, I expect the function `coinSums(50)` to return a number.

As a user, I expect the function `coinSums(50)` to return 451.

As a user, I expect the function `coinSums(100)` to return 4563.

As a user, I expect the function `coinSums(150)` to return 21873.

As a user, I expect the function `coinSums(200)` to return 73682.

**Information Architecture**

The function `coinSums(n)` returns a number, where `n` is a number.