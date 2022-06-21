import "mocha";
import store from "../src/store/store";
import { addedItem, dispatchedItem, removedItem } from "../src/store/orders";

describe('Store', function () {
    it("dispatches the event", () => {
        store.dispatch(addedItem("test item"));

        console.log("Before dispatch", store.getState());
        store.dispatch(dispatchedItem(0));
        console.log("After dispatch", store.getState());

        store.dispatch(removedItem(0));
    });
});
