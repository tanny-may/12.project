import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type OFZ = {
	name: string;
	repayment: string;
	yearsUntilRepayment: number;
	profitability: number;
};

type OFZState = {
	data: OFZ[];
	loading: boolean;
	error: string | null;
};

const initialState: OFZState = {
	data: [],
	loading: false,
	error: null,
};

const ofzSlice = createSlice({
	name: 'ofz',
	initialState,
	reducers: {
		fetchOFZStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		fetchOFZSuccess: (state, action: PayloadAction<OFZ[]>) => {
			state.loading = false;
			state.data = action.payload;
		},
		fetchOFZFailure: (state, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { fetchOFZStart, fetchOFZSuccess, fetchOFZFailure } = ofzSlice.actions;
export default ofzSlice.reducer;