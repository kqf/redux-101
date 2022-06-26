import "mocha";
import store from "../src/store/store";

import { createVendor, removeVendor } from "../src/store/vendors";
const assert = require('assert');


describe('Vendors', function () {
    it("dispatches the event", () => {
        assert.strictEqual(store.getState().entities.vendors.length, 0);
        store.dispatch(createVendor({ name: "Vendor1" }));

        assert.strictEqual(store.getState().entities.vendors.length, 1);
        assert.strictEqual(store.getState().entities.vendors[0].id, 1);

        store.dispatch(removeVendor({ id: 1 }));
        assert.strictEqual(store.getState().entities.vendors.length, 0);
    });
});
