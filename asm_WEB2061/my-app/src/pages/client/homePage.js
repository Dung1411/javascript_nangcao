import { getAll } from "../../api/books";
import Footer from "../../components/footer";
import Header from "../../components/header";

const HomePage ={
    async render(){
        const {data} = await getAll();
        return `
            ${Header.render()}
            <div tabindex="0" class="focus:outline-none">
                <!-- Remove py-8 -->
                <div class="mx-auto container py-8">
                    <div class="flex flex-wrap items-center lg:justify-between justify-center pb-10 mt-16">

                        ${data.map((item) =>
                                `
                                    <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                                        <div>
                                        <a href="/books/${item.id}" data-navigo><img alt="girl texting" src="${item.img}" class="focus:outline-none w-full h-44" /></a>
                                        </div>
                                        <div class="bg-white dark:bg-gray-800">
                                            <div class="flex items-center justify-between px-4 pt-4">
                                              
                                            </div>
                                            <div class="p-4">
                                                <div class="flex items-center">
                                                    <a href="/books/${item.id}" data-navigo><h2 tabindex="0" class="focus:outline-none text-lg dark:text-white font-semibold">${item.name}</h2></a>
                                                </div>
                                                <p tabindex="0" class="focus:outline-none text-black-700 text-xl font-semibold">Price: ${item.price}</p>
                                                <div class="flex mt-4">
                                                   
                                                </div>
                                                <div class="flex items-center justify-between py-4">
                                                    <h3 tabindex="0" class="focus:outline-none text-indigo-700 text-xl font-semibold">Sale: </h3>
                                                    <h3 tabindex="0" class="focus:outline-none text-red-700 text-xl font-semibold">${Number(item.sale_price).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</h3>
                                                </div>
                                                <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">ADD CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    `
                            ).join('')}

                    </div>
                </div>
            </div>
            ${Footer.render()}
        `
    }
}

export default HomePage;