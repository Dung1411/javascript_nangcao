import { getAll } from "../../api/books";
import Footer from "../../components/footer";
import Header from "../../components/header";

const BookList ={
    async render() {
        const {data} = await getAll();
        return `
        ${await Header.render()}
        <div class="container mx-auto">
            <div class="mt-8">
                <section>
                        <div class="">
                            <h2 class ="font-bold text-xl pb-10">Tất cả sản phẩm</h2>
                        </div>
                </section>
                <section>
                    <div class="box_items flex flex-wrap gap-12 ">
                        ${data.map((item)=>/* html */`
                            <div class="w-1/6 mb-24">
                                <a href="books/${item.id}" data-navigo><img class = "w-[200px] h-[250px]" src="${item.img}" alt=""></a>
                                <a href="books/${item.id}" data-navigo><p style="font-weight: 700; padding-top:20px">${item.name}</p></a>
                                <p style="font-size: 15px; padding-top:10px;font-weight: 400">${Number(item.price).toLocaleString("it-IT", { style: "currency", currency: "VND" })}</p>
                                <p style="font-size: 15px; padding-top:10px;font-weight: 400">${Number(item.sale_price).toLocaleString("it-IT", { style: "currency", currency: "VND" })}</p>

                        </div>`).join("")}
                    </div>
                </section>
            </div>
        </div>
        
        ${Footer.render()}
        `
    },
}

export default BookList;