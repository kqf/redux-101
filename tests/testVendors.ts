import { expect } from "chai";
import "mocha";
import store from "../src/store/store";

import { createVendor, removeVendor } from "../src/store/vendors";

describe('Vendors', function () {
    it("dispatches the event", () => {
        expect(store.getState().entities.vendors.length).to.equal(0);
        store.dispatch(createVendor({ name: "Vendor1" }));

        expect(store.getState().entities.vendors.length).to.equal(1);
        expect(store.getState().entities.vendors[0].id).to.equal(1);

        store.dispatch(removeVendor({ id: 1 }));
        expect(store.getState().entities.vendors.length).to.equal(0);
    });
});
