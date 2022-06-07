import { getAllST } from "../api/student";
import Footer from "../components/Footer";
import Header from "../components/Header";


const ListStudent = {
    async render(){
        // const  data = await (await fetch('https://6291d3789d159855f080b433.mockapi.io/products')).json();
        const {data} = await getAllST();
        return `
        <div>${Header.render()}</div>
        <div tabindex="0" class="focus:outline-none">
            <!-- Remove py-8 -->
            <div class="mx-auto container py-8">
                <div class="flex flex-wrap items-center lg:justify-between justify-center pb-10 mt-16">

                    ${data.map((item) =>
                              `
                                <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                                    <div>
                                    <a href="/students/${item.id}" data-navigo><img alt="girl texting" src="${item.avatar}" class="focus:outline-none w-full h-44" /></a>
                                    </div>
                                    <div class="bg-white dark:bg-gray-800">
                                        <div class="flex items-center justify-between px-4 pt-4">
                                            <div>
                                                <img class="dark:bg-white focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-2-col-grid-svg1.svg" alt="bookmark" />
                                            </div>
                                            <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
                                                <p tabindex="0" class="focus:outline-none text-xs text-yellow-700">Featured</p>
                                            </div>
                                        </div>
                                        <div class="p-4">
                                            <div class="flex items-center">
                                                <a href="/students/${item.id}" data-navigo><h2 tabindex="0" class="focus:outline-none text-lg dark:text-white font-semibold">${item.name}</h2></a>
                                                <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 pl-5">4 days ago</p>
                                            </div>
                                            <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 mt-2">${item.masv}</p>
                                            <div class="flex mt-4">
                                                <div>
                                                    <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">12 months warranty</p>
                                                </div>
                                                <div class="pl-2">
                                                    <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">Complete box</p>
                                                </div>
                                            </div>
                                            <div class="flex items-center justify-between py-4">
                                                <h2 tabindex="0" class="focus:outline-none text-indigo-700 text-xs font-semibold">Việt Nam, Hà Nội</h2>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `
                        ).join('')}

                </div>
            </div>
        </div>
        <div>${Footer.render()}</div>
        `
    }
}

export default ListStudent;