/**
 * routes doesnt need auth
 * @type {string[]}
 */

export const publicRoutes = [
    "/"
];

/**
 * routes auth
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
]

/**
 * prefix for api auth routes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * prefix for api auth routes
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";