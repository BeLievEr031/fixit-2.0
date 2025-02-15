import { checkSchema } from 'express-validator';

export const userRegisterValidator = checkSchema({
  // Validate and sanitize email
  email: {
    in: ['body'],
    isEmail: {
      errorMessage: 'Please enter a valid email address',
    },
    normalizeEmail: true,
  },

  // Validate and sanitize name
  name: {
    in: ['body'],
    isString: {
      errorMessage: 'Name must be a string',
    },
    isLength: {
      options: { min: 3, max: 50 },
      errorMessage: 'Name must be between 3 and 50 characters long',
    },
    trim: true, // Removes whitespace from the beginning and end
  },

  // Validate and sanitize password
  password: {
    in: ['body'],
    isLength: {
      options: { min: 6 },
      errorMessage: 'Password must be at least 6 characters long',
    },
  },
  phone: {
    in: ['body'],
    isLength: {
      options: { min: 10, max: 10 },
      errorMessage: 'Phone number must be exactly 10 digits long',
    },
    isNumeric: {
      errorMessage: 'Phone number must contain only numbers',
    },
  },
  pincode: {
    in: ['body'],
    isLength: {
      options: { min: 6, max: 6 },
      errorMessage: 'PIN code must be exactly 6 digits long',
    },
    isNumeric: {
      errorMessage: 'PIN code must contain only numbers',
    },
  },
});

export const userLoginValidator = checkSchema({
  // Validate and sanitize email
  email: {
    in: ['body'],
    isEmail: {
      errorMessage: 'Please enter a valid email address',
    },
    normalizeEmail: true,
  },

  // Validate and sanitize name
  password: {
    in: ['body'],
    isLength: {
      options: { min: 6 },
      errorMessage: 'Password must be at least 6 characters long',
    },
  },
});

export const changePasswordValidator = checkSchema({
  // Validate and sanitize email
  oldpassword: {
    in: ['body'],
    isLength: {
      options: { min: 6 },
      errorMessage: 'Password must be at least 6 characters long',
    },
  },

  // Validate and sanitize name
  newpassword: {
    in: ['body'],
    isLength: {
      options: { min: 6 },
      errorMessage: 'Password must be at least 6 characters long',
    },
  },
});

export const forgetPasswordValidator = checkSchema({
  // Validate and sanitize email
  email: {
    in: ['body'],
    isEmail: {
      errorMessage: 'Please enter a valid email address',
    },
    normalizeEmail: true,
  },
});
