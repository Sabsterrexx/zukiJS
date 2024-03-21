/**
 * Main program is run here. 
 * The following code snippet is an example of how to make a simple
 * API call using the zukiChat class, where a message is sent to 
 * an LLM (in this case GPT-3) and a response is printed to the console.
 */

import { ZukiCall } from "./Modules/ZukiCall.js";
/**
 * You only need to import the ZukiCall class to access the rest of the wrapper. 
 * If JavaScript can't find the folder, make sure you have a package.json file
 * in the same directory level and has this written in it:
 * { "type": "module"} 
 */

const API_KEY = ""; //As usual, set this value to your API key.
const API_BACKUP_KEY = ""; //Set this value to your backup API key, if you have one (optional).

//The ZukiCall class handles sending and receiving messages to our LLM with the API.

let zukiAI = new ZukiCall(API_KEY, API_BACKUP_KEY);
//By default the chat model is gpt-3.5-turbo if the second function parameter is not defined upon intialization.
//By default the system prompt (third function parameter) is "You are a helpful assistant", this can be changed later with .zukiChat.setSystemPrompt().

let chatResponse = await zukiAI.zukiChat.sendMessage("Sabs", "Hey, how's it going?");
/**
 * To call the unfiltered endpoint, use .zukiChat.sendUnfilteredMessage().
 * If you have a backup API endpoint, first set it as a backup using .zukiChat.changeBackupEndpoint("backup-endpoint"),
 *  then call .zukiChat.sendBackupMessage().
 */


//Note: If you want to use a model that the wrapper doesn't recognize, use zukAI.models_list.push("model-name");

console.log("Chat Response: ", chatResponse); //Response will be printed in the console.
//To change the temperature of the model, call .zukiChat.setTemp(). The value by default is 0.7.

//Generate an image with the prompt "A grey tabby cat".
let imageUrl = await zukiAI.zukiImage.generateImage("A grey tabby cat.");
console.log("Image Url: ", imageUrl); //The response is returned as a url to the image.

//Note: If you have a backup API endpoint for images too, first set it as a backup using .zukiImage.changeBackupEndpoint(),
//then to generate an image from your backup endpoint, use .zukiImage.generateBackupImage()
