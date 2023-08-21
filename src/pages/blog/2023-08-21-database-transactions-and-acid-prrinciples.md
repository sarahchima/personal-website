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

A﻿ database transaction is a tool to ensure that multiple read and write operations are carried out together. If a set of operations are grouped in a transaction, they are only committed to the database if all of them succeed. If any of these operations fail, then nothing is committed to the database. Conceptually, the database sees all the operations in a transaction as one operation.\
\
T﻿o understand this further, let's give a breakdown of why we need transactions



\- Why do we need transactions

\-﻿ Acid properties

\-﻿ Examples