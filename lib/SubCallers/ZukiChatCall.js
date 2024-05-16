class ZukiChatCall {

    constructor(API_KEY) {

        this.API_KEY = API_KEY;

    }

    CHAT_DATA(userName, userMessage, requestedModel, systemPrompt, currTemp) {

        /** 
         * Gets the actual data object being sent to the API.
        */

        const data = {
            model: requestedModel, //You can change the model here.
            messages: [
                {
                    role: 'system', //This role instructs the AI on what to do. It's basically the main prompt.
                    content: systemPrompt,
                },
                {
                    role: 'user', //This role indicates the message the user sent.
                    content:
                        systemPrompt +
                        '\n Here is a message a user called ' +
                        userName +
                        ' sent you: ' +
                        userMessage, //We're also putting the prompt in the message because the API will revert to a generic response if userMessage is less than a certain length.
                },
            ],
            temperature: currTemp, //Change this to modify the responses' randomness (higher -> more random, lower -> more predictable). 
        };

        return data; //returns the JSON object.
    }


    async CHAT_CALL(userName, userMessage, requestedModel, systemPrompt, currTemp, endpoint) {

        /**
         * Makes an API call via the desired enpoint.
        */

        try {

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.API_KEY}`,
                },
                body: JSON.stringify(this.CHAT_DATA(userName, userMessage, requestedModel, systemPrompt, currTemp)),
            });

            const responseData = await response.json(); //Main response.

            return responseData['choices'][0]['message']['content']; //Returns as a Promise function.

        } catch (error) {
            console.error('Error:', error);
        }

    }

}

export default ZukiChatCall