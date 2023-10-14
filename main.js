/**Main program is run here. 
 The following code snippet is an example of how to make a simple
 API call using the zukiChat class, where a message is sent to 
 an LLM (in this case GPT-3) and a response is printed to the console.
 */

import { ZukiChat } from "./Modules/zukiChat";

const API_KEY = ""; //As usual, set this value to your API key
let prompt = "" //The prompt for the LLM. Can be changed later by calling zukiLLM.changePrompt().

//The zukiChat class handles sending and receiving messages to our LLM with the API.

let zukiLLM = new ZukiChat(API_KEY, prompt); 
let res = await zukiLLM.sendMessage("Hey, how's it going?"); //To call the unfiltered endpoint, use .sendUnfilteredMessage().
console.log(res); //Response will be printed in the console.

//To change the temperature of the model, call zuki.setTemp()