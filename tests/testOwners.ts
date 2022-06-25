import "mocha";
import store from "../src/store/store";

import { createOwner, removeOwner } from "../src/store/owners";
const assert = require('assert');


describe('Store', function () {
    it("dispatches the event", () => {
        assert.strictEqual(store.getState().entities.owners.length, 0);
        store.dispatch(createOwner({ name: "Bob" }));

        assert.strictEqual(store.getState().entities.owners.length, 1);
        assert.strictEqual(store.getState().entities.owners[0].id, 1);

        store.dispatch(removeOwner({ id: 1 }));
        assert.strictEqual(store.getState().entities.owners.length, 0);
    });
});
