import nock from "nock";
import { apiCallBegan } from '../src/store/api';
import { buildStore } from "../src/store/store";
import { receiveVendor } from "../src/store/vendors";


describe('works with fetching data', () => {
    it("checks if API returns expected data", async () => {
        nock('https://api.example.com')
            .get('/vendors')
            .reply(200, {
                id: 123,
                title: "The weather is nice",
                completed: true
            });

        const store = buildStore()
        const payload = {
            baseURL: "https://api.example.com",
            url: "vendors",
            method: "GET",
            data: {
                id: 123
            },
            onSuccess: receiveVendor.type
        }


        store.dispatch(apiCallBegan(payload));
        console.log("Finished")
        console.log(store.getState());
    });
});
