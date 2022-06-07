import instance from "./config";

export const getAllST =()=>{
    const url = `/students`;
    return instance.get(url);
} 
export const getST = (id) =>{
    const url = `/students/${id}`;
    return instance.get(url)
}
export const removeST = (id) =>{
    const url = `/students/${id}`;
    return instance.delete(url,id)
}
export const addST = (post) =>{
    const url = `/students`
    return instance.post(url, post)
}
export const updateST = (post) => {
    const url = `/students/${post.id}`;
    return instance.put(url, post)
}