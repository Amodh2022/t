
"use server"

export const createNewUser = async (body:any, bundee_auth_token: string) => {
    const url = "http://4.240.86.202:8080/api/v1/user/createUser";

    const headersList = {
        Accept: '*/*',
        'bundee_auth_token': bundee_auth_token,
        'Content-Type': 'application/json',
        cache: 'no-cache',
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headersList,
            body: JSON.stringify(body),
           
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { 
            errorcode: data.errorCode, 
            userId: data.userResponses[0].iduser
         };

    } catch (error) {
        console.error('Error Creating new user:', error);
        throw new Error('Error Creating new user');
    }
};
