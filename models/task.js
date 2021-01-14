'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.User, {foreignKey: 'userId'})
    }
  };
  Task.init({
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    category: {
      type: {
        type: DataTypes.STRING,
        isIn: [['backlog', 'todo', 'ongoing', 'done']]
      }
    },
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};