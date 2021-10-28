export interface Apartment {
	city: string;
	address: string;
	rooms: number;
	price: number;
	features?: ApartmentFeatures[];
}

export type ApartmentFeatures =
	| 'air conditioning'
	| 'elevator'
	| 'parking'
	| 'furnished'
	| 'running water'
	| 'mamad';
