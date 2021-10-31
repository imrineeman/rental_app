import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { featureFilters } from '../../shared/types/types';
import { useEffect } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
	return {
		fontWeight:
			personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

interface ApartmentFeatureSelectProps {
	setNewApartmentFeatures: React.Dispatch<
		React.SetStateAction<typeof featureFilters>
	>;
}
const ApartmentFeatureSelect = ({
	setNewApartmentFeatures,
}: ApartmentFeatureSelectProps) => {
	const theme = useTheme();
	const [selectedFeatureFilters, setSelectedFeatureFilters] = React.useState<
		typeof featureFilters
	>([]);

	const handleChange = (
		event: SelectChangeEvent<typeof selectedFeatureFilters>,
	) => {
		const {
			target: { value },
		} = event;
		setSelectedFeatureFilters(value as typeof featureFilters);
	};

	useEffect(() => {
		setNewApartmentFeatures(selectedFeatureFilters);
	}, [selectedFeatureFilters, setNewApartmentFeatures]);

	return (
		<div>
			<FormControl sx={{ m: 1, width: 300 }}>
				<InputLabel id="demo-multiple-chip-label">
					Select Features
				</InputLabel>
				<Select
					labelId="demo-multiple-chip-label"
					id="demo-multiple-chip"
					multiple
					value={selectedFeatureFilters}
					onChange={handleChange}
					input={
						<OutlinedInput id="select-multiple-chip" label="Chip" />
					}
					renderValue={(selected) => (
						<Box
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: 0.5,
							}}>
							{selected.map((value) => (
								<Chip key={value} label={value} />
							))}
						</Box>
					)}
					MenuProps={MenuProps}>
					{featureFilters.map((feature) => (
						<MenuItem
							key={feature}
							value={feature}
							style={getStyles(
								feature,
								selectedFeatureFilters,
								theme,
							)}>
							{feature}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

export default ApartmentFeatureSelect;
