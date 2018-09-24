const login = require("facebook-chat-api");
const credentials = require("./credentials");

login(credentials, (error, api) => {
    if(error) return console.error(error);

    api.setOptions({
        logLevel: "silent"
    });

    api.listen((error, event) => {
        if(error) return console.error(error);

        if(event.type === "message" && event.isGroup && event.threadID === 1093174407402744) {
            api.markAsRead(event.threadID, error => {
                if(error) console.error(error);
            });

            api.sendMessage("Oki to pa", event.threadID)
        }
    });
});