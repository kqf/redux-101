import "mocha";
import { addedItem, dispatchedItem, removedItem, selectOrdersLength, assignItemOwner } from "../src/store/orders";
import store from "../src/store/store";
const assert = require('assert');

describe('Store', function () {
    it("dispatches the event", () => {
        assert.strictEqual(selectOrdersLength(store.getState()), 0);
        store.dispatch(addedItem({ description: "test item1" }));

        assert.strictEqual(selectOrdersLength(store.getState()), 1);
        assert.strictEqual(store.getState().entities.orders[0].dispatched, false);

        store.dispatch(dispatchedItem({ id: 0 }));
        assert.strictEqual(store.getState().entities.orders[0].dispatched, true);
        assert.strictEqual(store.getState().entities.orders[0].owner, undefined);

        store.dispatch(assignItemOwner({ id: 0, owner: "Bob" }));
        assert.strictEqual(store.getState().entities.orders[0].owner, "Bob");
        store.dispatch(addedItem({ description: "test item2" }));

        store.dispatch(removedItem({ id: 0 }));
        assert.strictEqual(selectOrdersLength(store.getState()), 1);
    });
});
