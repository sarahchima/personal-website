---
path: database-transaction
layout: blog
title: Database transactions and ACID Prrinciples
description: Database transaction
date: 2023-08-19T00:25:57.122Z
tags:
  - database
---
A database transaction is one of the fundamental concepts to understand when working with databases. Let's take a look at what database transactions are, their properties and some tips about using them.

## W﻿hat is a Database transaction?

A﻿ database transaction is a tool to ensure that multiple read and write operations are carried out together. If a set of operations are grouped in a transaction, they are only committed to the database if all of them succeed. Conceptually, the database sees all the operations in a transaction as one operation. Nothing is committed to the database if any of the operations fail.\
\
Y﻿ou may wonder, why do we need transactions? Let's use an example of a common bank transaction that happens between bank accounts. We have two bank accounts: 

A﻿ccount A = $500

A﻿ccount B = $200

W﻿e want to transfer $100 from account A to account B. How will we do this?

F﻿irst, we subtract $100 from Account A 

N﻿ext, we add this amount to Account B.

E﻿ven though this transaction is made up of two steps, we know one should not happen without the other. If remove money from Account A without adding it to Account B, then there will be a missing amount and the database will be in an inconsistent state. So it is best that they all happen together or none happens at all.

H﻿ere's a code example in postgres to understand this





L﻿et's say we want to transfer money from one bank account to another w

\- Why do we need transactions

\-﻿ Acid properties

\-﻿ Examples