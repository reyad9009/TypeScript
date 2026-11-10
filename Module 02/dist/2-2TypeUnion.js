const id = 123456;
const name = "Tarek";
const status = true;
console.log(id, name, status);
const userRole = "admin";
console.log(userRole);
const checkStatus = (status) => {
    console.log(status);
};
checkStatus("error");
const user = { id: 123, role: "member", plans: ["abc", "def"] };
const user2 = { id: 123, role: "admin", privileges: ["abc", "def"] };
console.log(user, user2);
export {};
