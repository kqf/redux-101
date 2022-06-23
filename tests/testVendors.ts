import { configureStore } from "@reduxjs/toolkit";
import "mocha";
import { addedItem, dispatchedItem, removedItem } from "../src/store/orders";

import { createVendor, removeVendor } from "../src/store/vendors";
import reducer from "../src/store/vendors"
const assert = require('assert');


describe('Store', function () {
    it("dispatches the event", () => {
        const store = configureStore({
            reducer: reducer as any,
        });

        assert.strictEqual(store.getState().length, 0);
        store.dispatch(createVendor({ name: "Vendor1" }));

        assert.strictEqual(store.getState().length, 1);
        assert.strictEqual(store.getState()[0].id, 1);

        store.dispatch(removeVendor({ id: 1 }));
        assert.strictEqual(store.getState().length, 0);
    });
});
