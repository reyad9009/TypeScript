// 1-10: Object, Type Alias and Interface
type Address = {
  streetName: string;
  holdingNum: number;
};
type TUser = {
  name: string;
  age: number;
  isActive: boolean;
  acttion: () => void;
  badges: string[];
  address: Address
};

interface IUser {
  name: string;
  age: number;
  isActive: boolean;
  acttion: () => void;
  badges: string[];
}

const user1: TUser = {
  name: "Tarek",
  age: 12,
  isActive: true,
  acttion: () => console.log("hello"),
  badges: ["abc", "def"],
  address: {
    streetName: "abc",
    holdingNum: 1123
  }
};
