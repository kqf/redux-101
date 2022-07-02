import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Vendor {
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
        receiveVendor(
            vendors: Array<Vendor>,
            action: PayloadAction<{
                it: number,
                title: string,
                completed: boolean,
            }>
        ) {
            vendors.push({
                id: vendors.length + 1,
                name: action.payload.title,
            });
        },
        removeVendor(
            vendors: Array<Vendor>, action: PayloadAction<{ id: number }>) {
            return vendors.filter(vendor => vendor.id !== action.payload.id)
        },
    }

});

export const { createVendor, removeVendor, receiveVendor } = slice.actions;
export default slice.reducer;
