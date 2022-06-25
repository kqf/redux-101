import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Owner {
    id: number,
    name: string,
}


const slice = createSlice({
    name: "Owner",
    initialState: [] as Array<Owner>,
    reducers: {
        createOwner(
            owners: Array<Owner>,
            action: PayloadAction<{ name: string }>
        ) {
            owners.push({
                id: owners.length + 1,
                name: action.payload.name,
            });
        },
        removeOwner(
            owners: Array<Owner>, action: PayloadAction<{ id: number }>) {
            return owners.filter(owner => owner.id !== action.payload.id)
        }
    }

});

export const { createOwner, removeOwner } = slice.actions;
export default slice.reducer;
