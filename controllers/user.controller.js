const users = require('../data/users');
const { AppError, asyncHandler } = require('../middleware/error-handler');

const getUsers = asyncHandler(async (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      users
    }
  });
});

const getUserById = asyncHandler(async (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  if (!user) {
    throw new AppError('User not found', 404);
  }

  res.status(200).json({
    status: 'success',
    data: {
      user
    }
  });
});

const testErrors = {
  notFound: asyncHandler(async (req, res) => {
    throw new AppError('Resource not found', 404);
  }),

  serverError: asyncHandler(async (req, res) => {
    throw new AppError('Internal server error', 500);
  }),

  validation: asyncHandler(async (req, res) => {
    throw new AppError('Validation failed', 400);
  }),

  success: asyncHandler(async (req, res) => {
    res.status(200).json({
      status: 'success',
      data: {
        users
      }
    });
  })
};

module.exports = {
  getUsers,
  getUserById,
  testErrors
};