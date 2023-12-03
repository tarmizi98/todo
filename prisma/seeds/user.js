const prisma = require('../../src/lib/prisma');

const USERS = [
    {
        user: {
            id: 1,
            name: 'mizi',
            password: '1234',
        }
    }
]

const seedUser = async () => {
    await Promise.all(
        USERS.map(async ({ user }) => {
            await prisma.user.upsert({
                where: { id: user.id },
                update: {},
                create: user,
            });
        }),
    );
};

module.exports = seedUser;