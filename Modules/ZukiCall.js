import { ZukiChat } from "./MainCallers/ZukiChat.js";
import { ZukiImage } from "./MainCallers/ZukiImage.js";

export class ZukiCall{

    constructor(API_KEY, API_BACKUP_KEY = "", chatModel = 'gpt-3.5-turbo'){

        this.API_KEY = API_KEY;
        this.API_BACKUP_KEY = API_BACKUP_KEY;
        this.chatModel = chatModel;
        this.zukiChat = new ZukiChat(API_KEY, API_BACKUP_KEY, chatModel);
        this.zukiImage = new ZukiImage(API_KEY, API_BACKUP_KEY);

    }

}