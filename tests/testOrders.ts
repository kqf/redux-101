import "mocha";
import { addedItem, dispatchedItem, removedItem, selectOrdersLength, assignItemOwner, selectOrdersOf } from "../src/store/orders";
import store from "../src/store/store";
const assert = require('assert');

describe('Orders', function () {
    it("dispatches the event", () => {
        assert.strictEqual(selectOrdersLength(store.getState()), 0);
        store.dispatch(addedItem({ description: "test item1" }));

        assert.strictEqual(selectOrdersLength(store.getState()), 1);
        assert.strictEqual(store.getState().entities.orders[0].dispatched, false);

        store.dispatch(dispatchedItem({ id: 0 }));
        assert.strictEqual(store.getState().entities.orders[0].dispatched, true);
        assert.strictEqual(store.getState().entities.orders[0].ownerId, undefined);

        assert.strictEqual(selectOrdersOf(0)(store.getState()).length, 0);
        store.dispatch(assignItemOwner({ id: 0, ownerId: 0 }));

        assert.strictEqual(store.getState().entities.orders[0].ownerId, 0);
        store.dispatch(addedItem({ description: "test item2" }));
        assert.strictEqual(selectOrdersOf(0)(store.getState()).length, 1);
        store.dispatch(assignItemOwner({ id: 1, ownerId: 0 }));
        assert.strictEqual(selectOrdersOf(0)(store.getState()).length, 2);

        store.dispatch(removedItem({ id: 0 }));
        assert.strictEqual(selectOrdersLength(store.getState()), 1);
        assert.strictEqual(selectOrdersOf(0)(store.getState()).length, 1);
    });
});
