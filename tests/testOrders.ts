import "mocha";
import { addedItem, dispatchedItem, removedItem } from "../src/store/orders";
import store from "../src/store/store";
const assert = require('assert');

describe('Store', function () {
    it("dispatches the event", () => {
        assert.strictEqual(store.getState().entities.orders.length, 0);
        store.dispatch(addedItem({ description: "test item" }));

        assert.strictEqual(store.getState().entities.orders.length, 1);
        assert.strictEqual(store.getState().entities.orders[0].dispatched, false);

        store.dispatch(dispatchedItem({ id: 0 }));
        assert.strictEqual(store.getState().entities.orders[0].dispatched, true);

        store.dispatch(removedItem({ id: 0 }));
        assert.strictEqual(store.getState().entities.orders.length, 0);
    });
});