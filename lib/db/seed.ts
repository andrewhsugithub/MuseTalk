import { db } from "./db.js";
import { faker } from "@faker-js/faker";
import { avatars, type AvatarType } from "./schema/avatar.js";

// const insertUser = async (user: UserType) => {
//   return db.insert(users).values(user);
// };

// const randomName = faker.person.fullName();
// console.log(randomName);
// const newUser: UserType = { name: randomName };
// // await insertUser(newUser);
