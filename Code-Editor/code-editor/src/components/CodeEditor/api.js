/* eslint-disable no-unused-vars */
import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston",
});
// curl -X GET http://emkc.org/api/v2/piston:2000/api/v2/runtimes -H "Content-Type: application/json"

export const executeCode = async (language, sourceCode, input) => {
    const response = await API.post("/execute", {
        language: language,
        version: LANGUAGE_VERSIONS[language],
        files: [
            {
                content: sourceCode,
            },
        ],
        stdin: input,
    });
    return response.data;
};

const getRuntimes = async () => {
    const response = await API.get("/runtimes");
    // console.log(response.data);
};
getRuntimes();
