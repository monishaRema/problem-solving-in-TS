# Blog Post On TypeScript

<a href="#interface-types"><h4>1. What are some differences between interfaces and types in TypeScript

</h4></a>

<h2 id="interface-types">Interfaces vs Types in TypeScript - সহজ ভাষায় পার্থক্য</h2>

TypeScript-এ আমরা দুইভাবে ডেটার স্ট্রাকচার ডিফাইন করি: type এবং interface।
দুইটাই দেখতে প্রায় একই রকম, কিন্তু কাজের জায়গায় কিছু গুরুত্বপূর্ণ পার্থক্য আছে।

চলো বিষয়টা খুব সহজ ভাষায় বোঝার চেষ্টা করি।


### Interface মূলত Object-এর গঠন নির্ধারণে ব্যবহৃত হয়।  যেমন:

- Object-এর shape নির্ধারণ করতে
- Class-এর সাথে কাজ করতে
- বড় সিস্টেমে ডেটার shape define করতে

উদাহরণ:

```ts
interface User {
  id: number;
  name: string;
}
```
*এক কথায় Interface মানে - “এই object কেমন হবে তা আমি ঠিক করে দিচ্ছি।”*

#### Interface সহজে extend করা যায় 
উদাহরণ:
```ts
interface Admin extends User {
  role: string;
}
```
#### Interface সহজে Merge করা যায় | একই interface আবার declare করলে merge হয়ে যায়

উদাহরণ:
```ts
interface Admin{
  role: string;
}
interface Admin{
  id: number;
  isActive: boolean;
}
// convert to 
interface Admin{
  role: string;
  id: number;
  isActive: boolean;
}
```

### টাইপ - আরও শক্তিশালী, আরও flexible এবং আরও বহুমুখী।
Type দিয়ে আপনি বানাতে পারেন:
- object shape
- union
- intersection
- যেকোনো ধরনের ডেটা টাইপ
- function type
- tuple
- [] Array Type

উদাহরণ:

```ts
// Object Shape
type User = {
  id: number;
  name: string;
};

// Union
type ID = string | number;

// Intersection
type Name = { name: string };
type Age = { age: number };
type Person = Name & Age;

// যেকোনো ধরনের ডেটা টাইপের alias
type Anything = string | number | boolean | null | undefined;

// Function Type
type Add = (a: number, b: number) => number;

// Tuple
type Point = [number, number];

// Array
type StringArray = string[];

```
*সংক্ষেপে Type হল TypeScript-এর সবচেয়ে flexible এবং শক্তিশালী feature যার মাধ্যমে আপনি যেকোনো ধরনের টাইপ তৈরি করতে পারেন।*

### Type ও extend করা যায় (অনেকেই ভুল ভাবে যে Type তো extend করা যায় না) 

```ts
type User = {
  name: string;
};

type Admin = User & {
  role: string;
};

```
Intersection দিয়ে Type ও Extend করা যায়


## Interface ও Type-এর মূল পার্থক্য
#### ১. Declaration Difference
- type ডিক্লেয়ার করার সময় "=" ব্যবহার করা হয়
- Interface ডিক্লেয়ার করা হয় সরাসরি {} দিয়ে, কোন "=" থাকে না

```ts
// Type Declaration
type Data = {
    id: number;
    name: string
}
// Interface Declaration
Interface Data = {
    id: number;
    name: string
}
```

#### ২. Interface merge হয়, কিন্তু Type merge হয় না
- একই নামে একাধিকবার Interface declare করলে সেগুলি একত্রে merge হয়ে যায় যা ইন্টারফেস সেকশনে already উদাহরণসহ দেওয়া আছে|
- কিন্তু Type-এর ক্ষেত্রে: একই নামে দ্বিতীয়বার Type declare করলে error হবে। 

```ts
type User = {
  name: string;
};
// Error: Duplicate identifier 'User'
type User = {   
  age: number;
};
```

#### ৩. Type দিয়ে primitive এবং non-primitive দু’ধরনের ডেটাই declare করা যায়, কিন্তু Interface primitive data declare করতে পারে না

- type → primitive (string, number, boolean) এবং non-primitive (object, array, tuple, function) — দু’ধরনেরটাই declare করতে পারে
- interface → শুধুমাত্র object-এর structure declare করতে ব্যবহৃত হয়

## কখন interface ব্যবহার করবেন?

- যখন object shape define করতে হয়

- যখন OOP বা class-এর সাথে কাজ করবেন

- যখন একটি বড় সিস্টেমে “contract/shape” define করা হয়

- যখন declaration merging প্রয়োজন

## কখন type ব্যবহার করবেন?

- যখন union / intersection দরকার

- যখন primitive alias বানাতে চান

- যখন tuple বা function type define করবেন

- যখন flexible টাইপ লাগবে


## শেষ কথা

- Object structure → দুটোতেই করা যায়

- Declaration merging → শুধু interface

- Union/advanced typing → শুধু type

- Extend করা → দুটোতেই করা যায়

- Flexibility → type বেশি powerful

Type & Interface—দুটোই শিখতে হবে, এবং দুটোই শক্তিশালী।
কিন্তু কোনটি ব্যবহার করবেন তা নির্ভর করবে use case-এর উপর।


