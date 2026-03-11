import fs from "fs";
import path from "path";

export const streamMockMail = async (res) => {
    const filePath = path.join(process.cwd(), "constant", "sampleResponse.txt");

    const content = fs.readFileSync(filePath, "utf-8");

    const chunks = content.split(" ");

    let index = 0;

    const interval = setInterval(() => {

        if (index >= chunks.length) {
            res.write(`data: ${JSON.stringify({ type: "response.completed" })}\n\n`);
            res.end();
            clearInterval(interval);
            return;
        }

        const fakeEvent = {
            type: "response.output_text.delta",
            delta: chunks[index] + " "
        };

        res.write(`data: ${JSON.stringify(fakeEvent)}\n\n`);

        index++;

    }, 35);
};

export const streamActualResponse = (res, text) => {
    const chunks = text.split(" ");
    let index = 0;

    const interval = setInterval(() => {
        if (index >= chunks.length) {
            res.write(`data: ${JSON.stringify({ type: "response.completed" })}\n\n`);
            res.end();
            clearInterval(interval);
            return;
        }

        const event = {
            type: "response.output_text.delta",
            delta: chunks[index] + " "
        };

        res.write(`data: ${JSON.stringify(event)}\n\n`);
        index++;
    }, 35);
};
