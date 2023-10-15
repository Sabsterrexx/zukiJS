import { ZukiChat } from "./MainCallers/ZukiChat.js";

export class ZukiCall{

    constructor(API_KEY, chatModel = 'gpt-3.5'){

        this.API_KEY = API_KEY;
        this.chatModel = chatModel;
        this.zukiChat = new ZukiChat(API_KEY, chatModel);

    }

}