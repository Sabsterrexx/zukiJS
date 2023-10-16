import { ZukiImageCall } from "../SubCallers/ZukiImageCall";

export class ZukiImage {

    constructor(API_KEY) {

        this.API_KEY = API_KEY;
        this.API_ENDPOINT = "https://zukijourney.xyzbot.net/v1/images/generations";
        this.API_ENDPOINT_BACKUP = "";
        this.API_CALLER = new ZukiImageCall(API_KEY);

    }

    generateImage(prompt, generations = 1, size = 250) {

        return this.API_CALLER.IMAGE_CALL(prompt, generations, size), this.API_ENDPOINT;

    }



}