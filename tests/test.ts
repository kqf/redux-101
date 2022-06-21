import "mocha";
import store from "../src/store";
import { addedItem, dispatchedItem, removedItem } from "../src/actions";

describe('Store', function () {
    it("dispatches the event", () => {
        console.log("Before the actions");
        console.log(store.getState());
        store.dispatch(addedItem("test item"));
        console.log("Before dispatch", store.getState());
        store.dispatch(dispatchedItem(0))
        console.log("After dispatch", store.getState());
        store.dispatch(removedItem(0));
        console.log("After remove item")
        console.log(store.getState());
    });
});
