import { Response, UserResponse, PhotoResponse } from './types';
import { buildUrl, GET } from './http';

const url = buildUrl('https://jsonplaceholder.typicode.com/');

export const getUserData = async (userId: number): Promise<Response<UserResponse.User>> => {
    return await GET<UserResponse.User>(url(`users/${userId}`));
};

export const getUserPhoto = async (userId: number): Promise<Response<PhotoResponse.Photo>> => {
    return await GET<PhotoResponse.Photo>(url(`photos/${userId}`));
};
