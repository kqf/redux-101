import "mocha";
import store from "../src/store";
import { addItem, dispatchItem, removeItem } from "../src/actions";

describe('Store', function () {
    it("dispatches the event", () => {
        console.log("Before the actions");
        console.log(store.getState());
        store.dispatch(addItem("test item"));
        console.log(store.getState());
        store.dispatch(dispatchItem(0))
        console.log(store.getState());
        store.dispatch(removeItem(0));
        console.log("After remove item")
        console.log(store.getState());
    });
});
