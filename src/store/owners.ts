import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Owner {
    id: number,
    name: string,
}


const slice = createSlice({
    name: "owners",
    initialState: [] as Array<Owner>,
    reducers: {
        createVendor(
            vendors: Array<Owner>,
            action: PayloadAction<{ name: string }>
        ) {
            vendors.push({
                id: vendors.length + 1,
                name: action.payload.name,
            });
        },
        removeVendor(
            vendors: Array<Owner>, action: PayloadAction<{ id: number }>) {
            return vendors.filter(vendor => vendor.id !== action.payload.id)
        }
    }

});

export const { createVendor, removeVendor } = slice.actions;
export default slice.reducer;
