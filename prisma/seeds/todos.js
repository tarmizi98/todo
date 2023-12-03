const prisma = require('../../src/lib/prisma');

const TODOS = [
    {
        id: 1,
        userId: 1,
        categoriesId: 1,
        title: 'Math Homework',
        description: 'Do the math homework for the next class',
        dueDate: '1998-09-15T00:00:00.000Z',
        status: 'ONPROGRESS',
        isImportant: false  
    },
    {
        id: 2,
        userId: 1,
        categoriesId: 2,
        title: 'Walk the dog',
        description: 'Walk the dog around the park',
        dueDate: '1998-09-15T00:00:00.000Z',
        status: 'ONPROGRESS',
        isImportant: false  
    },
    {
        id: 3,
        userId: 1,
        categoriesId: 3,
        title: 'Work Out',
        description: 'Go to the gym and work out',
        dueDate: '1998-09-15T00:00:00.000Z',
        status: 'ONPROGRESS',
        isImportant: false  
    },
    {
        id: 4,
        userId: 1,
        categoriesId: 4,
        title: 'Clean the house',
        description: 'Clean the house and do the laundry',
        dueDate: '1998-09-15T00:00:00.000Z',
        status: 'ONPROGRESS',
        isImportant: false  
    },
    {
        id: 5,
        userId: 1,
        categoriesId: 5,
        title: 'Work',
        description: 'Work on the project',
        dueDate: '1998-09-15T00:00:00.000Z',
        status: 'ONPROGRESS',
        isImportant: true
    },
];

const seedTodos = async () => {
    await Promise.all(
        TODOS.map(async (todos) => {
            await prisma.todos.upsert({
                where: { id: todos.id },
                update: {},
                create: todos,
            });
        }),
    );
};

module.exports = seedTodos;
