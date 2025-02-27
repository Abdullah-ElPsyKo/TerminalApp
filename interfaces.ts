
export interface Car {
    id: number;
    brand: string;
    model: string;
    description: string;
    year: number;
    isElectric: boolean;
    releaseDate: string;
    imageUrl: string;
    category: string;
    features: string[];
    manufacturer: Manufacturer;
}

export interface Manufacturer {
    id: number;
    name: string;
    country: string;
    founded: number;
    logoUrl: string;
}
