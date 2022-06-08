import Sequelize, { Model } from "sequelize";

class Todo extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        completed: Sequelize.BOOLEAN,
        deleted_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
}

export default Todo;
