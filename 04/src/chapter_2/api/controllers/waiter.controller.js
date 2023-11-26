const { User } = require('../../models');

/**
 * @description Create New User
 * @type POST
 * @path /api/users/
 * @param {*} req
 * @param {*} res
 * @returns JSON
 */
exports.createWaiter = async (req, res) => {
  const { name, orders } = req.body;
  if (!name || !orders) {
    return res.status(400).json({
      success: false,
      error: `${name}, ${orders} and are required`,
    });
  }
  try {
    const newWaiter = {
      name,
      orders,
      role: 'waiter',
    };
    const data = await User.create(newWaiter);
    return res
      .status(201)
      .json({ success: true, data, message: 'User has been created' });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};
