import { reRender } from "../../utils/reRender";
import { get } from "../../api/books";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { $ } from "../../utils/selector";
import { addToCart } from "../../utils/cart";

const BookDetail ={
    async render(id){
        const {data} = await get(id);
        return `
            
        <div>${Header.render()}</div>
        <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div class="flex justify-center items-center lg:flex-row flex-col gap-8">
                <!-- Description Div -->
    
                <div class="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                    <p class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600  dark:text-white">Home / Book Detail </p>
                    <h2 class="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white mt-4">${data.name}</h2>
    
                    <div class="flex flex-row justify-between mt-5">
                    <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg1.svg" alt="stars">
                    <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg1dark.svg" alt="stars">
                    </div>
    
                    <p class="font-normal text-base leading-6 text-gray-600  mt-7">Price: ${data.price}</p>
                    <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 text-red-600 dark:text-white">SALE: ${data.sale_price}</p>
    
                    <div class="lg:mt-11 mt-10">
                        <div class="flex flex-row justify-between">
                            <p class="font-medium text-base leading-4 text-gray-600 ">Select quantity</p>
                            <div class="flex">
                                <input type='number' id="inputQty" value='1' min='1' />
                            </div>
                        </div>
                    
                        
                        <hr class="bg-gray-200 w-full mt-4" />
                    </div>
                    <div >
                  
                        <button class="addToCart focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100" id="btnAddToCart">Add to shopping bag</button>

                    </div>
    
                </div>
    
                <!-- Preview Images Div For larger Screen-->
    
                <div class="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                    <div class="w-full bg-gray-100 flex justify-center">
                        <img src="${data.img}" class="w-full" />
                    </div>
                
                </div>
            </div>
            <div class="flex justify-center items-center w-full">
                <div class="w-full sm:w-96 md:w-8/12 lg:w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-28 sm:gap-x-6 sm:gap-y-12 gap-y-12 sm:mt-14 mt-10">
                    <div>
                        <img class="dark:hidden"  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg2.svg" alt="drink">
                        <img class="hidden dark:block"  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg2dark.svg" alt="drink">
                        <p class="font-semibold text-xl leading-5 text-gray-800 dark:text-white lg:mt-10 mt-9">Great for drinks</p>
                        <p class="text-normal text-base leading-6 text-gray-600  mt-4">Here are all the great cocktail recipes you should know how to make, from the margarita to the whiskey sour. Cheers!</p>
                    </div>
                    <div>
                        <img class="dark:hidden"  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg3.svg" alt="hardware">
                        <img class="hidden dark:block"  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg3dark.svg" alt="hardware">
                        <p class="font-semibold text-xl leading-5 text-gray-800 dark:text-white lg:mt-10 mt-9">Durable hardware</p>
                        <p class="text-normal text-base leading-6 text-gray-600  mt-4">Product durability is a key aspect of achieving a circular economy. ... Moreover, enhancing the durability of individual hardware components</p>
                    </div>
                    <div>
                        <img class="dark:hidden"  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg5.svg" alt="Eco-friendly">
                        <img class="hidden dark:block"  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg5dark.svg" alt="Eco-friendly">
                        <p class="font-semibold text-xl leading-5 text-gray-800 dark:text-white lg:mt-10 mt-9">Eco-friendly</p>
                        <p class="text-normal text-base leading-6 text-gray-600  mt-4">They re-use, recycle and reduce waste disposal in their lives. They conserve energy and natural resources</p>
                    </div>
                    <div>
                        <img class="dark:hidden"  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg6.svg" alt="drink">
                        <img class="hidden dark:block"  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg6dark.svg

                        " alt="drink">
                        <p class="font-semibold text-xl leading-5 text-gray-800 dark:text-white lg:mt-10 mt-9">Minimal Design</p>
                        <p class="text-normal text-base leading-6 text-gray-600  mt-4">Minimalist interior design is very similar to modern interior design and involves using the bare essentials</p>
                    </div>
                </div>
            </div>
        </div>
        <div>${Footer.render()}</div>

        `
    },
    afterRender(id) {
        // Header.afterRender();
        // console.log(id);
        const btnAddToCart = document.querySelector('.addToCart');
        btnAddToCart.addEventListener("click", async() => {
            const { data } = await get(id);
            // console.log(data);
            const quantity = document.querySelector('#inputQty')
            addToCart({...data, quantity: + quantity.value }, () => {
                alert("Thêm thành công !")
            });
        });
    },
}

export default BookDetail;