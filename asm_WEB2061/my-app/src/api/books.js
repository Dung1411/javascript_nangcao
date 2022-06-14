import instance from "./config";

export const getAll =(params)=>{
    let url = `/books`;
    // const params = {
    //     category_id : null,
    //     _sort : null,
    //     _order : null,
    // }
    // /books
    // params no se chuyen object thanh ?_sort=desc&_order=2
    return instance.get(url,{
        params : params
    });
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

