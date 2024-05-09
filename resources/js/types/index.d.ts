export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Listing {
    id: number;
    property_name: string;
    property_address: string;
    
    user_id: string;
    permit : string;
    price: string;
    availability: string;
    description: string;
    rooms: string;
    
    image: string;
    status: string;


    
    
    created_at: string;
    updated_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    listing:Listing;
};
