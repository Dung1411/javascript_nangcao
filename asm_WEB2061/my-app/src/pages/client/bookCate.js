
const BookCate = {
        async render(id) {
            const items = await getAllCate()
            const { data } = await getBookCate(id)
            console.log(data);
            return /*html*/ `
        <div id="header"> ${Headers.render()} </div>
            <main class = "px-10">
                <div class="box">
                    <div class="boxleft">
                        <section>
                            <div class="text1" style="margin-top: 30px;">
                                <h2>Danh mục sản phẩm</h2>
                                <ul class = "flex">
                               ${items.data.map((cate)=> `
                               <li><a class = "pr-10" href="/categorys/${cate.id}?_embed=products">${cate.name}</a></li>
                                
                               `).join("")}
                               </ul>
                            </div>
                        </section>
                    </div>
                    <div class="boxright">
                        <section>
                            <div class="">
                                <h2>Sản phẩm theo danh mục</h2>
                            </div>
                        </section>
                        <section>
                            <div class="flex flex-wrap justify-between  gap-px ">
                                ${data.book.map((book)=>/* html */`
                                <div class="w-1/6">
                                <a href="/news/${book.id}"><img class = "w-full" src="${book.img}" alt=""></a>
                                <p style="font-weight: 600;">${book.title}</p>
                                <p style="font-size: 15px;">${book.price}đ</p>
                                </div>`).join("")}
                            </div>
                        </section>
                    </div>
                </div>
                
            </main>
        `
    }
}
export default BookCate ;