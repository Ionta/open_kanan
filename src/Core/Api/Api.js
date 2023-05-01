import authStore from "../../Stores/AuthStore.js";

const original = "http://90.156.208.220:8031"

export async function post(url, data){
    let response = await fetch(original+url,{
		method: 'POST',
		headers: {
      Authorization: "Bearer " + authStore.token,
		  'Content-Type': 'application/json;charset=utf-8'
		},
        body:JSON.stringify(data)
	})
    if(response.ok){
        let data = await response.json();
        return data;
    }
    else if(response.status == 401){
        authStore.logOut();
    }
}