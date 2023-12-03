const prisma = require('../../src/lib/prisma');

const CATEGORIES = [
    {
        id: 1,
        userId: 1,
        name: 'School',
    },
    {
        id: 2,
        userId: 1,
        name: 'Pet',
    },
    {
        id: 3,
        userId: 1,
        name: 'Work Out',
    },
    {
        id: 4,
        userId: 1,
        name: 'House',
    },
    {
        id: 5,
        userId: 1,
        name: 'Work',
    },
];

const seedCategories = async () => {
    await Promise.all(
        CATEGORIES.map(async (category) => {
            await prisma.categories.upsert({
                where: { id: category.id },
                update: {},
                create: category,
            });
        }),
    );
};

module.exports = seedCategories;
