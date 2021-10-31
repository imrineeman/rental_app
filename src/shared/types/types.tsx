export interface Apartment {
	city: string;
	address: string;
	rooms: number;
	price: number;
	id: string;
	features?: ApartmentFeatures[];
}

export type ApartmentFeatures =
	| 'air conditioning'
	| 'elevator'
	| 'parking'
	| 'furnished'
	| 'running water'
	| 'mamad';

export type ApartmentFilters = Omit<Apartment, 'id' | 'rooms' | 'price'> & {
	rooms: number[];
	price: number[];
};

export type ApartmentTextFilters = Exclude<ApartmentFilters, number>;
export type ApartmentFilter = keyof ApartmentFilters;

export const featureFilters: ApartmentFeatures[] = [
	'air conditioning',
	'elevator',
	'parking',
	'furnished',
	'running water',
	'mamad',
];
