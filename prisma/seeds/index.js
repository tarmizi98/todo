const prisma = require('../../src/lib/prisma');
const seedCategories = require('./categories');
const seedTodos = require('./todos');
const seedUser = require('./user');

async function main() {
    await seedUser();
    await seedCategories();
    await seedTodos();
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
