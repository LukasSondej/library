
  const API_URL = 'http://localhost:3000/'

export const useApi = () => {

const call = async<R, T = {}>(url: string, method: 'GET' | "DELETE" | "POST"| "PUT", body?: T) => {
const createBody = 
{method,
headers: {'Content-Type': 'application/json'},


}
const realBody = body ? {...createBody, body: JSON.stringify(body)} : createBody
try {
    const response = await fetch(`${API_URL}${url}`, realBody)
    if(response.ok){
       const data: R = await response.json() 
       return data
}else{
    const api_err = await response.text()
    throw new Error(api_err)

}

}catch(e) {
    throw new Error("blond")
}
}
const getData = async<R>(url: string) => {
return await call<R>(url, "GET")

}
const deleteBook = async<R>(url: string) => {
return await call<R>(url, "DELETE")

}
const postData = async <R, T>(url: string, data: T) => {
    return await call<R, T>(url, "POST", data)
}
const putData = async<R, T>(url: string, data: T) => {
    return call<R, T>(url, "PUT", data)

}

return {getData, postData, putData, deleteBook}
} 