
import { getST } from "../api/student";
import Footer from "../components/Footer";
import Header from "../components/Header";


const DetailStudent = {
    async render(id){
        const {data} = await getST(id)
        return `    
        <div>${Header.render()}</div>
        <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div class="flex justify-center items-center lg:flex-row flex-col gap-8">
                <!-- Description Div -->
    
                <div class="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
  
                    <h2 class="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white mt-4">${data.name}</h2>
    
                    <div class="flex flex-row justify-between mt-5">
                    
                    </div>
    
                    <p class="font-normal text-base leading-6 text-gray-600  mt-7">${data.masv}</p>

                   
                </div>
    
                <!-- Preview Images Div For larger Screen-->
    
                <div class="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                    <div class="w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
                        <img src="${data.avatar}" />
                    </div>
                
                </div>
            </div>
           
        </div>
        <div>${Footer.render()}</div>
        `
    }
}

export default DetailStudent;