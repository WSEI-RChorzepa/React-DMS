import { UserResponse, PhotoResponse } from '../services/types';

export interface IUser {
    data: UserResponse.User | null;
    photo: PhotoResponse.Photo | null;
    status: null | 'pending' | 'rejected' | 'fulfilled';
}
