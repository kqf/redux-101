import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Vendor {
    id: number,
    name: string,
}


const slice = createSlice({
    name: "vendors",
    initialState: [] as Array<Vendor>,
    reducers: {
        createVendor(
            vendors: Array<Vendor>,
            action: PayloadAction<{ name: string }>
        ) {
            vendors.push({
                id: vendors.length + 1,
                name: action.payload.name,
            });
        },
        removeVendor(
            vendors: Array<Vendor>, action: PayloadAction<{ id: number }>) {
            return vendors.filter(vendor => vendor.id !== action.payload.id)
        }
    }

});

export const { createVendor, removeVendor } = slice.actions;
export default slice.reducer;
