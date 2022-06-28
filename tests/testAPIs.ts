import axios from "axios";
import nock from "nock";
import { expect } from "chai";

const fetchData = async () => {
    const res = await axios.get('https://api.example.com');
    const data = res.data;
    return data;
}


describe('expectedData', () => {

    it("checks if API returns expected data", async () => {
        nock('https://api.example.com')
            .get('/')
            .reply(200, {
                data: {
                    id: 1,
                    title: "The weather is nice",
                    completed: true
                }
            });
        expect((await fetchData()).data.title).to.equal("The weather is nice");
    });
});
