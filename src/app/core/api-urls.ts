const BASE_API_URL = 'http://localhost:8080/api/v1';

export const SIGN_IN_URL = BASE_API_URL + '/guest/sign-in';
export const SIGN_UP_URL = BASE_API_URL + '/guest/admin-sign-up';

const BASE_USERS_URL = BASE_API_URL + '/users';
export const FILTER_USERS_URL = BASE_USERS_URL;
export const DISABLE_USER_URL = BASE_USERS_URL + '/disable/:id';
export const ENABLE_USER_URL = BASE_USERS_URL + '/enable/:id';
export const DELETE_USER_URL = BASE_USERS_URL + '/delete/:id';

const BASE_PROJECTS_URL = BASE_API_URL + '/projects';
export const FILTER_PROJECTS_URL = BASE_PROJECTS_URL;
export const CREATE_PROJECT_URL = BASE_PROJECTS_URL + '/create';
export const GET_PROJECT_URL = BASE_PROJECTS_URL + '/:id';
export const UPDATE_PROJECT_URL = BASE_PROJECTS_URL + '/update/:id';
export const DELETE_PROJECT_URL = BASE_PROJECTS_URL + '/delete/:id';
export const GET_PROJECT_DETAILS_URL = BASE_PROJECTS_URL + '/details/:id';
export const ADD_MEMBER_URL = GET_PROJECT_DETAILS_URL + '/add-member/:email';
