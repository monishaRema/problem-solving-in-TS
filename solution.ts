type AlphaNeumericBool = string | number | boolean;

const formatValue = (value: AlphaNeumericBool): string | number | boolean => {
  if (typeof value === "string") {
    if (value.trim() === "") return "Please provide a valid string";
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }

  return "Please provide a vlaue in string, number or boolean";
};

const getLength = (value: string | unknown[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

interface ItemWithRating {
  title: string;
  rating: number;
}

const filterByRating = (value: ItemWithRating[]): ItemWithRating[] => {
  return value.filter((item: ItemWithRating) => item.rating > 4);
};

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (value: User[]): User[] => {
  const result = value.filter((user: User) => user.isActive === true);
  return result;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (value: Book): void => {
  console.log(
    `Title: ${value.title}, Author: ${value.author}, Published: ${
      value.publishedYear
    }, Available: ${value.isAvailable === true ? "Yes" : "No"}`
  );
};

function getUniqueValues(value: string[], value2: string[]): string[];
function getUniqueValues(value: number[], value2: number[]): number[];

function getUniqueValues(
  value1: (string | number)[],
  value2: (string | number)[]
): (string | number)[] {
  const temp = [...value1, ...value2];
  const set = new Set(temp);
  const result = [...set];
  return result;
}

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (value: Product[]): number => {
  if (value.length === 0) {
    return 0;
  }
  const result = value.reduce((subtotal, item) => {
    let totalPrice = item.price * item.quantity;
    let discount = 0;
    if (item.discount) {
      discount = (totalPrice * item.discount) / 100;
    }
    let priceAfterDiscount = totalPrice - discount;

    return subtotal + priceAfterDiscount;
  }, 0);

  return result;
};



