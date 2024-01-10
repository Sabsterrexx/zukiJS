import { ZukiChatCall } from "../SubCallers/ZukiChatCall.js";

export class ZukiChat {

    constructor(API_KEY, API_BACKUP_KEY = "", model = "gpt-3.5", systemPrompt = "You are a helpful assistant.", temperature = 0.7) {
        this.API_KEY = API_KEY;
        this.API_BACKUP_KEY = API_BACKUP_KEY;
        this.API_ENDPOINT = 'https://zukijourney.xyzbot.net/v1/chat/completions';
        this.API_ENDPOINT_UNFILTERED = 'https://zukijourney.xyzbot.net/unf/chat/completions';
        this.API_ENDPOINT_BACKUP = 'https://thirdparty.webraft.in/v1/chat/completions'; //A backup endpoint, if appplicable. Usually meant to utilize another API. By default it's set to the WebRaft API due to its rate limit being ideal for testing purposes.

        this.systemPrompt = systemPrompt;

        let modelsList = ['gpt-3.5', 'gpt-3.5-turbo', 'gpt-3.5-4k', 'gpt-3.5-16k', 'gpt-4', 'gpt-4-4k', 'gpt-4-16k', 'claude-2'];

        if (modelsList.includes(model))
            this.model = model;
        else
            throw new Error(model + " is not a valid text model!");


        this.temperature = temperature;

        this.API_CALLER = new ZukiChatCall(this.API_KEY);
        this.API_BACKUP_CALLER = new ZukiChatCall(this.API_BACKUP_KEY);

    }

    setSystemPrompt(newPrompt) {

        /**
         * Sets the system systemPrompt for the model to
         * a new one. Prompt must be a string, otherwise
         * an error will be thrown.
         */

        if (typeof newPrompt === 'string' || newPrompt instanceof String)
            this.systemPrompt = newPrompt;
        else
            throw new Error("Prompt must a string!");

    }

    setTemp(newTemp) {

        /**
         * Changes the model's temperature to the specified value. 
         * The value must be between 0 and 1, otherwise
         * an error will be thrown. 
         */

        if (0 <= newTemp && newTemp <= 1)
            this.temperature = newTemp;
        else
            throw new Error("Temperature must be a value between 0 and 1!");
    }

    changeBackupEndpoint(newEndpoint){

        /** 
         * Changes the backup endpoint to the new endpoint. 
         */

        this.API_ENDPOINT_BACKUP = newEndpoint;
    }

    async sendMessage(userName, userMessage) {

        /**
         * Calls the regular API via the /v1/ endpoint.
         */

        return this.API_CALLER.CHAT_CALL(userName, userMessage, this.model, this.systemPrompt, this.temperature, this.API_ENDPOINT);

    }

    async sendUnfilteredMessage(userName, userMessage) {

        /**
         * Calls the unfiltered API via the /unf/ endpoint.
         */

        return this.API_CALLER.CHAT_CALL(userName, userMessage, this.model, this.systemPrompt, this.temperature, this.API_ENDPOINT_UNFILTERED);

    }

    async sendBackupMessage(userName, userMessage){

        /**
         * Calls the backup API via the backup endpoint.
         */
        
        return this.API_BACKUP_CALLER.CHAT_CALL(userName, userMessage, this.model, this.systemPrompt, this.temperature, this.API_ENDPOINT_BACKUP);

    }


}
