export default {
  admin: '/admin',
  home: '/',
  welcome: '/welcome',
  recipes: {
    list: '/recipes',
    find: (recipeId = ':recipeId') => `/recipes/${recipeId}`,
  },
  users: {
    list: '/users',
    find: (userName = ':userName') => `/users/${userName}`,
  },
  auth: {
    login: '/login',
    register: '/register',
    confirmEmail: '/confirm_email',
    resetPassword: '/reset_password',
    confirmation: '/confirmation',
    passwordReset: '/password_reset',
  },
}
