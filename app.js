const {default: axios} = require("axios");

const url="https://api.telegram.org/bot6990771979%3AAAHvfp98NTsMjBmefdSbp5iQhQ4oPkZDQIg/sendMessage?parse_mode=markdown&chat_id=6426015756&text=tt";

async function sendMessage() {
    try {
        while(true) {
            await axios.get(url)
                .then((response) => console.log("OK"))
        }
    } catch (error) {
        console.log("Down!");
        sendMessage();
    }
}

for (let i = 0; i < 1000; i++) {
    sendMessage();
}