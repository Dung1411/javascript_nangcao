/* eslint-disable indent */
/* eslint-disable arrow-spacing */
/* eslint-disable eol-last */


import {getAll} from "../../api/books"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { getAllCate } from "../../api/categories";


const Books = {
        async render() {
            const items = await getAllCate();
            const { data } = await getAll();
            return /* html */ `
            <div id="header">${Header.render()} </div>
            <div class="container mx-auto">
                <main class = "px-10">
                    <div class="box">
                        <div class="boxleft flex">
                            <section>
                                <div class="text1 mr-10" style="margin-top: 30px;">
                                    <h2 class = "font-bold text-xl">Danh mục sản phẩm</h2>
                                    <div>
                                    <select class="form-select appearance-none w-50 px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out mt-3">
                                    <option value="">All</option>
                                    ${items.data.map((val)=>`<option value="${val.id}">${val.name}</option>`)}
                                    </select>
                                </div>
                            </section>
                            <section>
                                <div class="text1" style="margin-top: 30px;">
                                    <h2 class = "font-bold text-xl">Lọc</h2>
                                    <div>
                                    <select class="form-sort appearance-none w-50 px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out mt-3">
                                        <option value="">All</option>
                                        <option value="0">Giá từ cao đến thấp</option>
                                        <option value="1">Giá từ thấp đến cao</option>
                                        <option value="2">Mới nhất</option>
                                    </select>
                                </div>
                            </section>
                            <section> 
                                <div style="margin-top: 65px; margin-left:600px">
                                        <input class = "searchProduct border-4 p-2 pr-32 rounded-xl" type="text" placeholder="Tìm kiếm">
                                        <button class = "btn_search p-3 rounded-xl text-gray bg-white hover:bg-blue-400 font-bold transition" type="submit" name="search">Tìm kiếm</i></button>
                                </div>
                            </section>
                        </div>
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
                    
                </main>
            </div>
          
            <div id="footer">${Footer.render()} </div>`;
    },
    afterRender() {
        let conditions = {
            category_id : null,
            _sort : null,
            _order : null,
            q: null
        }
        const form_select = document.querySelector(".form-select");
        form_select.addEventListener("change", async () =>{
            if(form_select.value == ""){
                conditions.category_id = null
                var { data } = await getAll(conditions);
            }else{
                conditions.category_id = Number(form_select.value)
                var { data }  = await getAll(conditions);
            }
            handlerRender(data);
        });
        const form_sort = document.querySelector('.form-sort');
        form_sort.addEventListener("change", async () =>{
            if(form_sort.value == ""){
                conditions._order = null
                conditions._sort = null
                var { data } = await getAll(conditions);
            }else{
                switch(Number(form_sort.value)){
                    case 0 : {
                        conditions._sort = 'price';
                        conditions._order = 'desc';
                        var { data }  = await getAll(conditions);
                        break
                    }
                    case 1 : {
                        conditions._sort = 'price';
                        conditions._order = 'asc';
                        var { data }  = await getAll(conditions);
                        break
                    }
                    case 2 : {
                        conditions._sort = 'createdAt';
                        conditions._order = 'desc';
                        var { data }  = await getAll(conditions);
                        break
                    }
                }
            }
            handlerRender(data);
        });
        const btn_search = document.querySelector('.btn_search');
        btn_search.addEventListener("change", async ()=>{
            if (btn_search.value == "") {
                var { data } = await getAll(conditions);
            }else{
                const searchProduct = document.querySelector('.searchProduct')
                conditions.q = searchProduct.value ;
                var { data }  = await getAll(conditions);
            }
            handlerRender(data)
        })
       
        function handlerRender(data) {
            // console.log(data);
            const element = document.querySelector(".box_items");
            const htmls = data.map((book) =>
                 /* html */ `
                <div class="w-1/6">
                                <a href="/"><img class = "w-[200px] h-[250px]" src="${book.img}" alt=""></a>
                                <p style="font-weight: 600;">${book.name}</p>
                                <p style="font-size: 15px;">${Number(book.price).toLocaleString("it-IT", { style: "currency", currency: "VND" })}</p>
                                <p style="font-size: 15px;">${Number(book.sale_price).toLocaleString("it-IT", { style: "currency", currency: "VND" })}</p>

                                </div>
                `).join("");
            element.innerHTML = htmls;
        }

      
    },
};

export default Books;