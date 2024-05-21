// addresses
export const ADDRESS_STORE_SERVER: string = "http://localhost:8080";
export const ADDRESS_AUTHENTICATION_SERVER: string = "***";

// authentication
export const REALM: string = "***";
export const CLIENT_ID: string = "***";
export const CLIENT_SECRET: string = "***";
export const REQUEST_LOGIN: string = "/auth/realms/" + REALM + "/protocol/openid-connect/token";
export const REQUEST_LOGOUT: string = "/auth/realms/" + REALM + "/protocol/openid-connect/logout";

// requests
export const REQUEST_SEARCH_PRODUCTS: string = "/products/search/by_name";
export const REQUEST_ADD_USER: string = "/users";
