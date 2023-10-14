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

let zukiLLM = new ZukiCall(API_KEY); 
//By default the chat model is gpt-3.5 if the second function parameter is not defined upon intialization.
//By default the system prompt (third function parameter) is "You are a helpful assistant", this can be changed later with .zukiChat.setSystemPrompt().

let res = await zukiLLM.zukiChat.sendBackupMessage("Sabs", "Hey, how's it going?"); 
/**
 * To call the unfiltered endpoint, use .zukiChat.sendUnfilteredMessage().
 * If you have a backup API endpoint, first set it as a backup using .zukiChat.changeBackupEndpoint(),
 *  then call .zukiChat.sendBackupMessage().
 */

console.log(res); //Response will be printed in the console.
//To change the temperature of the model, call .zukiChat.setTemp(). The value by default is 0.7.