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
    
    price: string;
    availability: string;
    bathroom: string;
    kitchen: string;
    other: string;
    image: string;
    rules: string;
    curfew: string;



    
    
    created_at: string;
    updated_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    listing:Listing;
};
