---
title: "Why abbreviating isn't necessarily the best option"
date: "2026-02-22"
excerpt: "Abbreviating variable, function, or type names saves keystrokes but can cost readability and maintainability. When it helps and when it doesn't."
---

# Abbreviating in code: when it helps and when it ruins everything

There's one abbreviation that makes me close the PR without reviewing it: `fl` for a boolean.

Not because it's the worst in the world, but because it's the clearest symptom of a habit that seems harmless and ends up being costly: abbreviating without criteria, at the moment of writing, without thinking about who will read it later.

## The cost you don't see

Code is written once but read many times. When we abbreviate, we take a shortcut that helps us when we write but can hurt anyone who reads it later, including our future selves.

```python
def calc(a: int, b: int, fl: bool) -> int:
    return a * b if fl else a + b
```

What does this function do? You have to guess. Now compare it to this:

```python
def calculate_total(base_price: int, quantity: int, apply_discount: bool) -> int:
    return base_price * quantity if apply_discount else base_price + quantity
```

The second version doesn't need a comment. It explains itself. Readability isn't a luxury, it's part of the job.

## When it does make sense to abbreviate

Not every abbreviation is bad. There are contexts where it's completely valid, and forcing the full name can make the code artificially verbose.

**Widely known conventions.** Some abbreviations are so standard in the ecosystem that writing them out would be the weird thing: `i`, `j`, `k` for loop iterators in short loops; `e` or `exc` for exceptions in `except` blocks; `cls` for the first parameter of class methods; `args` and `kwargs` for variable arguments; `id` for identifier. If your team uses Go, Rust, or any other language with its own conventions, respecting them matters more than any general rule.

**Very narrow scope.** When a variable lives only a few lines and its purpose is obvious from context, abbreviating is reasonable:

```python
nums: list[int] = [1, 2, 3, 4, 5]
doubled: list[int] = [n * 2 for n in nums]
```

Here, `n` is perfectly readable. The context explains everything.

**Consolidated domain names.** If your application has its own terminology and the team uses it consistently across the codebase, breaking it can create more confusion than keeping it.

## When not to abbreviate

**Functions and methods.** A function name is its contract. If you have to guess what it does, the name is wrong.

```python
# ❌
def proc_usr(data: dict) -> None: ...

# ✅
def process_user_registration(data: dict) -> None: ...
```

A long, clear function name is almost always better than a short, ambiguous one. Autocomplete exists; the cost of typing it is minimal.

**Long-lived variables.** The longer a variable lives in the code and the farther it is from where it's defined, the more descriptive its name needs to be. If it's defined on line 10 and used on line 80, it needs to stand on its own.

**Public function parameters.** Parameters are the interface of your function. If someone is going to call your code from another module, the names need to speak for themselves.

```python
# ❌
def send(to: str, subj: str, bod: str) -> None: ...

# ✅
def send_email(recipient: str, subject: str, body: str) -> None: ...
```

**Booleans.** Abbreviated booleans are a classic source of silent bugs. The name has to make it clear what `True` means and what `False` means.

```python
# ❌ What does True mean here?
fl: bool = True
actv: bool = False

# ✅
is_discount_applied: bool = True
is_account_active: bool = False
```

**Classes and types.** Types are used in many places. Abbreviating them creates confusion as the project grows.

```python
# ❌
class UsrMgr: ...

# ✅
class UserManager: ...
```

## The test that always works

_"If someone who doesn't know the domain reads this line in six months, will they understand what it does without looking anything up?"_

If the answer is yes, the name is fine. If you have to hesitate, change it.

You can also use the pull request test: if in a review you need to explain what a variable or function means, it's a sign the name isn't clear enough.

## At a glance

| ✅ Abbreviating is fine                                 | ❌ Better not to abbreviate               |
| ------------------------------------------------------ | ----------------------------------------- |
| Language conventions (`i`, `cls`, `exc`, `args`)      | Function and method names                 |
| Variables in very narrow scope                         | Public function parameters                |
| Domain terms consolidated in the team                  | Long-lived variables                       |
| Loop iterators and comprehensions                      | Booleans                                  |
| Universal abbreviations (`id`, `url`, `dto`)           | Custom classes and types                   |

The golden rule isn't "never abbreviate" or "abbreviating saves time". It's simpler: the code you write today will be read by you, your team, or someone you haven't met yet. Write it for them.

_— Juan Cruz Medina_
