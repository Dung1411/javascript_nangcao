import instance from "./config";

export const getAll =()=>{
    const url = `/books`;
    return instance.get(url);
} 
export const get = (id) =>{
    const url = `/books/${id}`;
    return instance.get(url)
}
export const remove = (id) =>{
    const url = `/books/${id}`;
    return instance.delete(url,id)
}
export const add = (post) =>{
    const url = `/books`
    return instance.post(url, post)
}
export const update = (post) => {
    const url = `/books/${post.id}`;
    return instance.put(url, post)
}