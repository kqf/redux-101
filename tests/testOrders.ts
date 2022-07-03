import { expect } from "chai";
import "mocha";
import { addedItem, assignItemOwner, dispatchedItem, removedItem, selectOrdersLength, selectOrdersOf } from "../src/store/orders";
import { buildStore } from "../src/store/store";

describe('Orders', function () {
    const store = buildStore();

    it("dispatches the event", () => {
        expect(selectOrdersLength(store.getState())).to.equal(0);
        store.dispatch(addedItem({ description: "test item1" }));

        expect(selectOrdersLength(store.getState())).to.equal(1);
        expect(store.getState().entities.orders[0].dispatched).to.equal(false);

        store.dispatch(dispatchedItem({ id: 0 }));
        expect(store.getState().entities.orders[0].dispatched).to.equal(true);
        expect(store.getState().entities.orders[0].ownerId).to.equal(undefined);

        expect(selectOrdersOf(0)(store.getState()).length).to.equal(0);
        store.dispatch(assignItemOwner({ id: 0, ownerId: 0 }));

        expect(store.getState().entities.orders[0].ownerId).to.equal(0);
        store.dispatch(addedItem({ description: "test item2" }));
        expect(selectOrdersOf(0)(store.getState()).length).to.equal(1);
        store.dispatch(assignItemOwner({ id: 1, ownerId: 0 }));
        expect(selectOrdersOf(0)(store.getState()).length).to.equal(2);

        store.dispatch(removedItem({ id: 0 }));
        expect(selectOrdersLength(store.getState())).to.equal(1);
        expect(selectOrdersOf(0)(store.getState()).length).to.equal(1);
    });

    it("Middleware catches an error", () => {
        store.dispatch({
            type: "error",
            payload: { message: "this is an error" },
        });
    });

});
