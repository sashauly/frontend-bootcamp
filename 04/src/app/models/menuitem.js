import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class MenuItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MenuItem.belongsTo(models.Order, {
        foreignKey: 'orderId',
        onDelete: 'CASCADE',
      });
    }
  }
  MenuItem.init(
    {
      title: DataTypes.STRING,
      picture: DataTypes.STRING,
      cost: DataTypes.INTEGER,
      callQuantity: DataTypes.INTEGER,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'MenuItem',
    }
  );
  return MenuItem;
};
