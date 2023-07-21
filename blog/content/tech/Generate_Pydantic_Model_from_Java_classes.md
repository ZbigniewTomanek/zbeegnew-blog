---
title: "Generating Pydantic Models from Java Classes"
date: 2023-07-21T14:17:10+02:00
author: Zbigniew Tomanek
draft: false
---

<br>

Today, I once again encountered a common development issue. In our **Big Fat Java Codebase**™️, there's a crucial HTTP endpoint that accepts a large and often changing model as a payload. Updating this model to stay in sync with our Python codebase has always been a tedious task.

So far, no one has taken on the herculean task of rewriting this entire model in Python. Instead, we've been selectively porting over smaller subparts as needed. While this ostrich strategy has served us well for a while, it became untenable when I found myself facing the task of rewriting most of the model into Python. That's when I decided to automate the process.

## How to do it?

<br>

Unfortunately, a quick Google search revealed that I might be the pioneer in figuring out how to achieve this. This inspired me to write this post - to potentially save you some time. With 7 billion people on Earth, I'm certain that someone else will face this problem in the future, and there are certainly better ways to spend your time than trying to solve it from scratch.

Given that [Pydantic](https://docs.pydantic.dev/latest/) is a solid, well-considered library, and that Java's support for reflection is robust, I chose to use these tools to my advantage. The idea is to employ reflection to extract the model metadata from Java, and then compile it into a string that can be saved as a single Python file. This file can then be imported and used with minor adjustments.

In order to achieve this, I implemented support for the following:
- [x] Java primitive types
- [x] Set, List, Map collections 
- [x] Nested classes
- [x] Enums (compiled to literals)
- [x] Subclasses of interfaces and abstract classes (I compile them to Union)
- [x] Recursive types (I use `__future__.annotations` to support forward references)
- [x] Using names from `SerializedName` annotation instead of field names
- [x] Optional annotations for fields that can be null

`MetadataModel` is used because Pydantic versions prior to 2.0 have a well-known issue with parsing `Union` types. 

If you don't use the `smart_union` feature, it tries to parse classes in the order they're defined. This means if you have a class with a field of type `Union[ClassA, ClassB]` and `ClassA` is defined after `ClassB`, and `ClassB` is more specific, Pydantic will forcefully parse anything as `ClassA`. This problem was finally resolved in Pydantic 2.0.

## Final code

<br>

These code snippets still need to be incorporated into your own codebase, but at least the hard part is already done 🎉

{{< rawhtml >}}
<div class="gist-container">
<script src="https://gist.github.com/ZbigniewTomanek/53d6b8da786150d663dcd421d87fbac4.js"></script>
</div>
{{< /rawhtml >}}
