import "mocha";
import store from "../src/store/store";
import { addedItem, dispatchedItem, removedItem } from "../src/store/orders";

describe('Store', function () {
    it("dispatches the event", () => {
        store.dispatch(addedItem({ description: "test item" }));

        console.log("Before dispatch", store.getState());
        store.dispatch(dispatchedItem({ id: 0 }));
        console.log("After dispatch", store.getState());

        store.dispatch(removedItem({ id: 0 }));
    });
});
