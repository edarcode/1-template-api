import { fakerES as faker } from "@faker-js/faker";
import { Role } from "@prisma/client";
import { getRandomStr } from "../utils/getRamdonStr";
import { connDb } from "./connDb";

const SIZE_DATA = 20;
const usernames = faker.helpers.uniqueArray(faker.internet.userName, SIZE_DATA);

const fakerUsers = Array.from({ length: SIZE_DATA }).map((_, i) => {
  const user = {
    id: faker.string.uuid(),
    username: usernames[i].toLowerCase().replace(/[^a-zA-Z0-9]/g, ""),
    name: faker.person.firstName().toLowerCase(),
    isActive: faker.datatype.boolean(),
    role: getRandomStr([Role.ADMIN, Role.CLIENT]) as Role,
  };
  return user;
});

async function seedDb() {
  await connDb.user.createMany({
    data: fakerUsers,
  });
}

seedDb()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    connDb.$disconnect();
  });
