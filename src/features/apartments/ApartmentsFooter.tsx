import React from 'react';

const ApartmentsFooter = ({
	apartmentMatches,
}: {
	apartmentMatches: number;
}) => {
	return <div>Matches {apartmentMatches} results</div>;
};

export default ApartmentsFooter;
