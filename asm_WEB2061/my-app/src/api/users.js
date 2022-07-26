import instance from "./config";

export const getAllUser =()=>{
    const url = `/users`;
    return instance.get(url);
} 

export const removeUser = (id) =>{
    const url = `/users/${id}`;
    return instance.delete(url,id)
}
export const signup = (users) => {
    const url = "/signup";
    return instance.post(url, users);
}
export const signin = (users) => {
    const url = "/signin";
    return instance.post(url, users);
}

export const getMe = (id,token) => {
    const url = `/600/users/${id}`;
    return instance.get(url,{
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
}