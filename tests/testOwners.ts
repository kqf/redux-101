import "mocha";
import store from "../src/store/store";

import { createOwner, removeOwner } from "../src/store/owners";
import { expect } from "chai";


describe('Owners', function () {
    it("dispatches the event", () => {
        expect(store.getState().entities.owners.length).equal(0);
        store.dispatch(createOwner({ name: "Bob" }));

        expect(store.getState().entities.owners.length).equal(1);
        expect(store.getState().entities.owners[0].id).equal(1);

        store.dispatch(removeOwner({ id: 1 }));
        expect(store.getState().entities.owners.length).equal(0);
    });
});
