const BASE_API_URL = 'http://localhost:8080/api/v1';

export const SIGN_IN_URL = BASE_API_URL + '/guest/sign-in';
export const SIGN_UP_URL = BASE_API_URL + '/guest/admin-sign-up';

const BASE_USERS_URL = BASE_API_URL + '/users';
export const FILTER_USERS_URL = BASE_USERS_URL;
export const DISABLE_USER_URL = BASE_USERS_URL + '/disable';
export const ENABLE_USER_URL = BASE_USERS_URL + '/enable';
export const DELETE_USER_URL = BASE_USERS_URL + '/delete';
