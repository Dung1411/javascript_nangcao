import instance from "./config";

export const getAllCate = () => {
    const url = `/categories`;
    return instance.get(url);
};
export const getCate = (id) => {
    const url = `/categories/${id}`;
    return instance.get(url);
};
export const addCate = (category) => {
    const url = `/categories`;
    return instance.post(url, category);
};
export const updateCate = (category) => {
    const url = `/categories/${category.id}`;
    return instance.put(url, category);
};
export const removeCate = (id) => {
    const url = `/categories/${id}`;
    return instance.delete(url);
};

export const getBookCate = (id) => {
    const url = `/categories/${id}?_embed=products`;
    return instance.get(url);
}

export default instance;