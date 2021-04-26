export type Response<T> = {
    status: number;
    statusText: string;
    body: T | null;
};

export namespace UserResponse {
    export interface Geo {
        lat: string;
        lng: string;
    }

    export interface Address {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: Geo;
    }

    export interface Company {
        name: string;
        catchPhrase: string;
        bs: string;
    }

    export interface User {
        id: number;
        name: string;
        username: string;
        email: string;
        address: Address;
        phone: string;
        website: string;
        company: Company;
    }
}

export namespace PhotoResponse {
    export interface Photo {
        albumId: number;
        id: number;
        title: string;
        url: string;
        thumbnailUrl: string;
    }
}
