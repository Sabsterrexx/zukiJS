export class ZukiImageCall {


    constructor(API_KEY) {

        this.API_KEY = API_KEY;

    }

    IMAGE_DATA(prompt, generations, size) {

        const data = {

            prompt: prompt,

            n: generations,

            size: size

        };


        return data;

    }

    async IMAGE_CALL(prompt, generations, size, endpoint) {


        try {

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.API_KEY}`,
                },
                body: JSON.stringify(this.IMAGE_DATA(prompt, generations, size)),
            });

            const imgUrl = await response.json(); //Main response.

            return imgUrl;

        } catch (error) {
            console.error('Error:', error);
        }




    }


}