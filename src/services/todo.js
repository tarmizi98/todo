const prisma = require('../lib/prisma');

class TodoService {
  static getAll = async () => {
    const todos = await prisma.todos.findMany({
      include: {
        user: true,
      },
    });

    return todos;
  };

  static getById = async (id) => {
    const todo = await prisma.todos.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
      },
    });

    return todo;
  };

  static create = async (todoData) => {
    const todo = await prisma.todos.create({
      data: {
        title: todoData.title,
        description: todoData.description,
        user: {
          connect: {
            id: todoData.userId,
          },
        },
        categories: {
            connect: {
                id: todoData.categoryId,
            }
        }
      },
    });

    return todo;
  };

  static update = async (id, todoData) => {
    const todo = await prisma.todos.update({
      where: {
        id,
      },
      data: {
        title: todoData.title,
        description: todoData.description,
        dueDate: todoData.dueDate,
        status: todoData.status,
        dueDate: todoData.dueDate,
      },
    });

    return todo;
  };

  static delete = async (id) => {
    const todo = await prisma.todos.delete({
      where: {
        id,
      },
    });

    return todo;
  };
}

module.exports = TodoService;