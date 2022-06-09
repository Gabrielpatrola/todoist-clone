import * as Yup from "yup";
import User from "../models/user";
import Todo from "../models/todo";

class TodoController {
  async index(req, res) {
    const { page = 1 } = req.query;
    
    const todos = await Todo.findAll({
      where: { user_id: req.userId, deleted_at: null },
      order: ["created_at"],
      attributes: ["id", "title", "completed", "created_at", "updated_at"],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(todos);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const { title } = req.body;

    const todo = await Todo.create({
      title,
      user_id: req.userId,
    });

    return res.json(todo);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const todo = await Todo.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: "user",
          attributes: ["name", "email"],
        },
      ],
    });

    if (todo.user_id !== req.userId) {
      return res.status(401).json({ error: "You can not update this todo" });
    }

    todo.title = req.body.title;

    await todo.save();

    return res.json(todo);
  }

  async toggleCompleted(req, res) {
    const todo = await Todo.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: "user",
          attributes: ["name", "email"],
        },
      ],
    });

    if (todo.user_id !== req.userId) {
      return res.status(401).json({ error: "You can not toggle this todo" });
    }

    todo.completed = !todo.completed;

    await todo.save();

    return res.json(todo);
  }

  async delete(req, res) {
    const todo = await Todo.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: "user",
          attributes: ["name", "email"],
        },
      ],
    });

    if (todo.user_id !== req.userId) {
      return res.status(401).json({ error: "You can not delete this todo" });
    }

    if (todo.deleted_at != null) {
      return res.status(401).json({ error: "Todo already canceled" });
    }

    todo.deleted_at = new Date();

    await todo.save();

    return res.json(todo);
  }
}

export default new TodoController();
