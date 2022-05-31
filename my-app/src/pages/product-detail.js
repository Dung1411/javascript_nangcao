const ProductDetail = {
    async render(id){
        const  data = await (await fetch(`https://6291d3789d159855f080b433.mockapi.io/products/${id}`)).json();
        if (!product) return `<div>Not found</div>`;
        return `
        
        
        `
    }
}

export default ProductDetail;