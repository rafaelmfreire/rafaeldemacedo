---
title: While learning Rust I was struggling with certain concepts
tag: tutorial
---
While learning Rust I was struggling with certain concepts so I tried to organize my thoughts by writing them down in markdown files and I soon had several markdown files.
<!--more-->
## Interpreting brainfuck

Let's write a quick brainfuck interpreter first. We're going to parse brainfuck programs into an `Vec<Inst>` where `Inst` is defined as:

```rust
struct Inst {
    idx: usize,         // index of instruction
    kind: InstKind,     // kind of instruction
    times: usize,       // run-length encoding of instruction
}
enum InstKind {
    IncPtr,
    DecPtr,
    IncByte,
    DecByte,
    WriteByte,
    ReadByte,
    // end_idx = index of instruction after matching LoopEnd
    LoopStart { end_idx: usize },
    // start_idx = index of instruction after matching LoopStart
    LoopEnd { start_idx: usize },
}
```

Parsing brainfuck programs into the above format, namely: keeping track of every instruction's run-length encoding and calculating the `start_idx` and `end_idx` of loop instructions ahead of time, will allow us to write a much more efficient interpreter and also produce much more efficient assembly from our compilers.

We'll skip going over the remaining brainfuck interpreter code as it's very unexciting. Let's get to the fun part and try interpreting some brainfuck programs!

> If you're following along using the [companion code repository](https://github.com/pretzelhammer/brainfuck_compilers) the command we'll be using to interpret brainfuck programs is `just interpret {{name}}` where `{{name}}` is the name of the brainfuck source file in the `./input` directory.
```sh
# prints "Hello world!"
> just interpret hello_world
Hello World!
# prints fibonacci numbers under 100
> just interpret fibonacci
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
# encrypts lines from stdin using rot13 cipher
> just interpret rot13
unencrypted text
harapelcgrq grkg
```

Cool, we have a working brainfuck interpreter. Let's start digging into assembly.



## What is assembly?

A slightly better first question is what is an ISA? ISA stands for Instruction Set Architecture. An ISA is an interface which CPUs can implement. The most popular ISAs today are x86_64 and aarch64. If we write code using x86_64 instructions then any CPU which implements the x86_64 ISA will be able to run that code. So is "assembly" the same thing as an ISA? Well, not quite. The short answer is that "assembly" is any syntax understood by an assembler. An assembler is a utility program that allows people to write machine-code in a more human-friendly way, like with comments, whitespace, and symbolic names for machine instructions. "Assembly" therefore is a thin layer of abstraction over an ISA offered by an assembler. The assembler we will be using to assemble all of our x86_64 and aarch64 programs will be the GNU Assembler, often abbreviated to GAS. We'll be using Intel syntax instead of the default AT&T syntax for x86_64 assembly because it's closer to ARM syntax for aarch64 assembly which makes it less jarring to switch between the two. If that last sentence made no sense to you don't worry you're in good company. Also, we'll be executing all the compiled binaries in a Linux environment so we'll be making direct Linux system calls in our assembly programs when necessary.



## Intro to x86

x86_64 is a register-based ISA. A register is a container where we can store data. We can store data in RAM too but RAM is very far from the CPU whereas registers are directly _in_ the CPU and are where the CPU does all of its actual work. All of the instructions in x86_64 operate on registers directly or indirectly in some way. There are many different kinds of registers: some store integers, some store floats, some store vectors of integers, some are general purpose and some have a special purpose, and some we can modify directly and others we can only modify indirectly (as a byproduct of certain instructions). For the purposes of this article the only registers we'll be using are `rax`, `rdi`, `rsi`, `rdx`, and `r12` which all store 64-bit integers.

Let's learn some instructions.

```s
mov <dest>, <src>       # dest <- src
```

`mov` moves something from `<src>` to `<dest>` where `<src>` can be a literal value, register, or memory address and `<dest>` can be a register or memory address.

```s
mov rax, 5              # store 5 in rax
mov rsi, rdi            # copy value in rdi to rsi
mov [r12], 15           # store 15 at the memory address in r12
```

The last instruction is actually illegal because it's ambiguous. In the first 2 examples it's clear we're working with 64-bit integers since we're using 64-bit registers as operands, however in the last example we're trying to store the value 15 in the memory address in `r12` but how "big" is the value "15"? Does it take up 1, 2, 4, or 8 bytes? We need to know how many bytes to write to memory, after all. We can clear up ambiguities by suffixing the ambiguous instruction with `b` (byte), `w` (word, 2 bytes), `l` (longword, 4 bytes), or `q` (quadword, 8 bytes). So we can fix the last instruction in any number of these ways:

```s
movb [r12], 15           # write 15 as 1 byte to memory address in r12
movw [r12], 15           # write 15 as 2 bytes to memory address in r12
movl [r12], 15           # write 15 as 4 bytes to memory address in r12
movq [r12], 15           # write 15 as 8 bytes to memory address in r12
```

Also, although it may have already been made obvious, if we want to dereference a memory address stored in a register or label we wrap it with square brackets `[]`.

```s
mov rax, r12            # copy value from r12 to rax
mov rax, [r12]          # copy value from memory address stored in r12 to rax
```

<div class="center-text">
    <p class="text-blue-400">teste</p>
</div>

> **NOTE:** Check out the third [Real Python](https://realpython.com) course for a more in-depth tutorial on Django REST Framework.

This application uses:

- Python v3.6.0
- Django v1.11.0
- Django REST Framework v3.6.2
- Postgres v9.6.1
- Psycopg2 v2.7.1