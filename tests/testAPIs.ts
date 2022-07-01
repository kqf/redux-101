import axios from "axios";
import nock from "nock";
import { expect } from "chai";
import { apiCallBegan } from '../src/store/api';
import store from "../src/store/store";


describe('works with fetching data', () => {
    it("checks if API returns expected data", async () => {
        nock('https://api.example.com')
            .get('/test')
            .reply(200, {
                data: {
                    id: 1,
                    title: "The weather is nice",
                    completed: true
                }
            });

        store.dispatch(apiCallBegan({
            baseURL: "https://api.example.com",
            url: "test",
            method: "GET",
            data: {},
        }));
        // expect((await fetchData()).data.title).to.equal("The weather is nice");
    });
});
