# Blog Post On TypeScript

### 1. [Interface vs Type in TypeScript](#interface-vs-type)

### 2. [TypeScript Enum — কী এবং কেন ব্যবহার করা হয়?](#ts-enum)

---

<span id="interface-vs-type"></span>

## Interface vs Type in TypeScript — সহজ ভাষায় পার্থক্য

TypeScript-এ আমরা দুইভাবে ডেটার স্ট্রাকচার ডিফাইন করি: type এবং interface।
দুইটাই দেখতে প্রায় একই রকম, কিন্তু কাজের জায়গায় কিছু গুরুত্বপূর্ণ পার্থক্য আছে।

চলো বিষয়টা খুব সহজ ভাষায় বোঝার চেষ্টা করি।

### Interface

Interface মূলত Object-এর গঠন নির্ধারণে ব্যবহৃত হয়। যেমন:

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

_এক কথায় Interface মানে - “এই object কেমন হবে তা আমি ঠিক করে দিচ্ছি।”_

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
interface Admin {
  role: string;
}
interface Admin {
  id: number;
  isActive: boolean;
}
// convert to
interface Admin {
  role: string;
  id: number;
  isActive: boolean;
}
```

### Type

Type আরও শক্তিশালী, আরও flexible এবং আরও বহুমুখী। Type দিয়ে আপনি বানাতে পারেন:

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

_সংক্ষেপে Type হল TypeScript-এর সবচেয়ে flexible এবং শক্তিশালী feature যার মাধ্যমে আপনি যেকোনো ধরনের টাইপ তৈরি করতে পারেন।_

#### Type ও extend করা যায় (অনেকেই ভুল ভাবে যে Type তো extend করা যায় না)

```ts
type User = {
  name: string;
};

type Admin = User & {
  role: string;
};
```

Intersection দিয়ে Type ও Extend করা যায়

### Interface ও Type-এর মূল পার্থক্য

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
interface Data {
  id: number;
  name: string;
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

### কখন interface ব্যবহার করবেন?

- যখন object shape define করতে হয়

- যখন OOP বা class-এর সাথে কাজ করবেন

- যখন একটি বড় সিস্টেমে “contract/shape” define করা হয়

- যখন declaration merging প্রয়োজন

### কখন type ব্যবহার করবেন?

- যখন union / intersection দরকার

- যখন primitive alias বানাতে চান

- যখন tuple বা function type define করবেন

- যখন flexible টাইপ লাগবে

### শেষ কথা

- Object structure → দুটোতেই করা যায়

- Declaration merging → শুধু interface

- Union/advanced typing → শুধু type

- Extend করা → দুটোতেই করা যায়

- Flexibility → type বেশি powerful

Type & Interface—দুটোই শিখতে হবে, এবং দুটোই শক্তিশালী।
কিন্তু কোনটি ব্যবহার করবেন তা নির্ভর করবে use case-এর উপর।

---

<span id="ts-enum"></span>

## TypeScript Enum — কী এবং কেন ব্যবহার করা হয়?

TypeScript-এ Enum (Enumeration) হলো এমন একটি ফিচার যা আপনাকে নির্দিষ্ট কিছু স্থির (constant) মানকে একটি গ্রুপে সংগঠিত করতে সাহায্য করে।

যখন কোনো ভেরিয়েবল কিছু নির্দিষ্ট মানই গ্রহণ করতে পারে তখন Enum ব্যবহার করলে :

- Code আরও readable হয়
- ভুল মান pass হওয়ার সম্ভাবনা কমে
- auto-complete সুবিধা পাওয়া যায়
- constant গুলো এক জায়গায় সুন্দরভাবে manage করা যায়

### কেন Enum ব্যবহার করবেন?

ধরুন, আপনার অ্যাপে কিছু নির্দিষ্ট role আছে:

- Admin
- User
- Guest

এগুলো যদি আপনি সরাসরি "admin", "user" স্ট্রিং দিয়ে ব্যবহার করেন, টাইপো বা ভুল লিখলে bug হতে পারে।

Enum ব্যবহার করলে TypeScript কম্পাইল-টাইমেই ভুল ধরবে।

### Numeric Enum Example
Numeric enum এ মানগুলো অটোমেটিকভাবে 0 থেকে শুরু হয়, বা আপনি চাইলে নিজে থেকে মান দিতে পারেন।

```ts
enum Status {
  Pending, // 0
  Shipped, // 1
  Delivered, // 2
}

const orderStatus: Status = Status.Shipped;
console.log(orderStatus); // Output: 1
```

আপনি চাইলে শুরু মান কাস্টম করতে পারেন:

```ts
enum Status {
  Pending = 1,
  Shipped = 5,
  Delivered = 10,
}
```

### String Enum Example

String enum-এ প্রতিটি মানকে আপনি একটি meaningful string দিতে পারেন।
এটি API, UI labels বা logs এ খুব useful।

```ts
enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}
const role: UserRole = UserRole.Admin;
console.log(role); // Output: "ADMIN"
```
এতে করে ভুলের সম্ভাবনা অনেক কমে যায়, কারণ আপনি আর ইচ্ছে করলেও ভুল বানান লিখতে পারবেন না।

### সংক্ষেপে Enum-এর সুবিধা:

- নির্দিষ্ট মানগুলোর একটি গ্রুপ
- টাইপো-মুক্ত, নিরাপদ কোড
- পড়তে ও debug করতে সহজ
- constant মানগুলো centralize করে
- API, status, roles, categories — এসব জায়গায় খুব উপযোগী

### শেষ কথা

Enum হলো TypeScript-এর একটি শক্তিশালী ফিচার যা আপনার কোডকে:

- আরও নিরাপদ,
- আরও পরিষ্কার,
- আরও maintainable করে।

যখনই কোনো ভেরিয়েবল নির্দিষ্ট কিছু মানের মধ্যে সীমাবদ্ধ — Enum ব্যবহার করাই সেরা পদ্ধতি।
