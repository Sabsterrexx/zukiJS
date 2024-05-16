import { ZukiChat } from "./lib/MainCallers/ZukiChat";
import { ZukiImage } from "./lib/MainCallers/ZukiImage";

declare class ZukiCall {
    constructor(API_KEY: string, API_BACKUP_KEY?: string, chatModel?: string);

    zukiChat: ZukiChat;
    zukiImage: ZukiImage;
}

// main
declare class ZukiChat {
    constructor(API_KEY: string, API_BACKUP_KEY?: string, model?: string, systemPrompt?: string, temperature?: number)

    // conf
    setSystemPrompt(newPrompt: string): void
    setTemp(newTemp: number): void
    changeBackupEndpoint(newEndpoint: string): void

    // async
    async sendMessage(userName: string, userMessage: string): Promise<string>
    async sendUnfilteredMessage(userName: string, userMessage: string): Promise<string>
    async sendBackupMessage(userName: string, userMessage: string): Promise<string>
}

declare class ZukiImage {
    constructor(API_KEY: string, API_BACKUP_KEY?: string)

    // conf
    changeBackupEndpoint(newEndpoint: string): void

    // async
    async generateImage(prompt: string, generations?: number, size?: string, model?: string): void
    async generateBackupImage(prompt: string, generations?: number, size?: string, model?: string): void
}

// sub
declare class ZukiChatCall {
    constructor(API_KEY: string)

    CHAT_DATA(userName: string, userMessage: string, requestedModel: string, systemPrompt: string, currTemp: number): Promise<object>
    async CHAT_CALL(userName: string, userMessage: string, requestedModel: string, systemPrompt: string, currTemp: number, endport: string): Promise<string>
}

declare class ZukiImageCall {
    constructor(API_KEY: string)

    IMAGE_DATA(prompt: string, generations: number, size: string, model: string): Promise<object>
    async IMAGE_CALL(prompt: string, generations: number, size: string, model: string, endport: string): Promise<string>
}

export {
    ZukiCall,
    ZukiChat,
    ZukiImage,
    ZukiChatCall,
    ZukiImageCall
}