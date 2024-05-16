const ZukiChatCall = require("../SubCallers/ZukiChatCall.cjs")
const ZukiImageCall = require("../SubCallers/ZukiImageCall.cjs");

class ZukiImage {

    constructor(API_KEY, API_BACKUP_KEY = "") {

        this.API_KEY = API_KEY;
        this.API_BACKUP_KEY = API_BACKUP_KEY;
        this.API_ENDPOINT = "https://zukijourney.xyzbot.net/v1/images/generations";
        this.API_ENDPOINT_BACKUP = "https://api.webraft.in/api/images/generations";
        this.API_CALLER = new ZukiImageCall(API_KEY);
        this.API_BACKUP_CALLER = new ZukiImageCall(API_BACKUP_KEY);

    }


    changeBackupEndpoint(newEndpoint) {

        /** 
         * Changes the backup endpoint to the new endpoint. 
        */

        this.API_ENDPOINT_BACKUP = newEndpoint;
    }


    async generateImage(prompt, generations = 1, size = "1024x1024", model = "sdxl") {

        return this.API_CALLER.IMAGE_CALL(prompt, generations, size, model, this.API_ENDPOINT);

    }


    async generateBackupImage(prompt, generations = 1, size = "1024x1024", model = "sdxl") {

        return this.API_BACKUP_CALLER.IMAGE_CALL(prompt, generations, size, model, this.API_ENDPOINT_BACKUP);

    }


}

module.exports = ZukiImage