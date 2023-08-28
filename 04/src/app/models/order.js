import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
      Order.hasMany(models.MenuItem, {
        foreignKey: 'orderId',
      });
    }
  }
  Order.init(
    {
      isActive: DataTypes.BOOLEAN,
      items: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
