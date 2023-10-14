export class ZukiChat{

    constructor(API_KEY, prompt, model = "gpt-3.5", temperature = 0.1){
        this.API_KEY = API_KEY;
        this.API_URL = 'https://zukijourney.xyzbot.net/v1/chat/completions';
        this.API_URL_UNFILTERED = 'https://zukijourney.xyzbot.net/unf/chat/completions';
        this.prompt = prompt;

        let modelsList = ['gpt-3.5','gpt-3.5-4k','gpt-3.5-16k','gpt-4','gpt-4-4k','gpt-4-16k','claude-2'];

        if(modelsList.includes(model))
            this.model = model;
        else
            throw new Error(model + " is not a valid model!");


        this.temperature = temperature;

    }

    setTemp(newTemp){

        /**
         * Changes the model's temperature to the specified value. 
         * The value must be between 0 and 1, otherwise
         * an error will be thrown. 
         */

        if(0 <= newTemp <= 1)
            this.temperature = newTemp;
        else
            throw new Error("Temperature must be a value between 0 and 1!");
    }

    changePrompt(newPrompt){

        /**
         * Changes the system prompt for the model to
         * a new one. Prompt must be a string, otherwise
         * an error will be thrown.
         */

        if(typeof newPrompt === 'string' || newPrompt instanceof String)
            this.prompt = newPrompt;
        else
            throw new Error("Prompt must a string!");

    }


    CHAT_DATA(userName, userMessage){

        /** 
         * Gets the actual data object being sent to the API.
         */

        const data = {
            model: this.model, //You can change the model here.
            messages: [
              {
                role: 'system', //This role instructs the AI on what to do. It's basically the main prompt.
                content: this.prompt,
              },
              {
                role: 'user', //This role indicates the message the user sent.
                content:
                  this.prompt +
                  '\n Here is a message a user called ' +
                  userName +
                  ' sent you: ' +
                  userMessage, //We're also putting the prompt in the message because the API will revert to a generic response if userMessage is less than a certain length.
              },
            ],
            temperature: this.temperature, //Change this to modify the responses' randomness (higher -> more random, lower -> more predictable). 
        };

        return data;
    }

    async sendMessage(){

        /**
         * Calls the regular API via the /v1/ endpoint.
         */

        try {

            const response = await fetch(this.API_URL, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${this.API_KEY}`,
                },
                body: JSON.stringify(this.CHAT_DATA()),
            });
          
            const responseData = await response.json();
              
            return responseData['choices'][0]['message']['content'];

        } catch(error) {
            console.error('Error:', error);
        }

    }

    async sendUnfilteredMessage(){

        /**
         * Calls the unfiltered API via the /unf/ endpoint.
         */
        
        try {

            const response = await fetch(this.API_URL_UNFILTERED, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${this.API_KEY}`,
                },
                body: JSON.stringify(this.CHAT_DATA()),
            });
          
            const responseData = await response.json();
              
            return responseData['choices'][0]['message']['content'];

        } catch(error) {
            console.error('Error:', error);
        }

    }

}
  