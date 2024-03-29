import { getAll, getBookCate, remove } from "../../../api/books";
import { reRender } from "../../../utils/reRender";


const ProductList ={
    async render(){
        // const {data} = await getAll();
        const  {data}= await getBookCate()
        console.log(data);
   
     
       return `    
       <div class="w-full h-full bg-gray-200">
        <div class="flex flex-no-wrap">x    
            <div  style="min-height: 700px" class="absolute lg:relative w-64 h-screen shadow bg-gray-100 hidden lg:block">
                <div class="h-16 w-full flex items-center px-8">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_header_and_icons-svg1.svg" alt="logo">
                </div>
                <ul class="py-6">
                    <li class="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div class="flex items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x="4" y="4" width="6" height="6" rx="1" />
                                    <rect x="14" y="4" width="6" height="6" rx="1" />
                                    <rect x="4" y="14" width="6" height="6" rx="1" />
                                    <rect x="14" y="14" width="6" height="6" rx="1" />
                                </svg>
                            </div>
                            <a href="/admin/categories" data-navigo class="ml-2">Categories</a>
                        </div>
                    </li>
                    <li class="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                            </svg>
                            <a href="/admin/books" data-navigo class="ml-2">Products</a>
                        </div>
                    </li>
                    <li class="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                <circle cx="12" cy="12" r="9" />
                            </svg>
                            <a href="/admin/users" data-navigo class="ml-2">Users</a>
                        </div>
                    </li>
                    <li class="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="7 8 3 12 7 16" />
                                <polyline points="17 8 21 12 17 16" />
                                <line x1="14" y1="4" x2="10" y2="20" />
                            </svg>
                            <a href="javascript:void(0)" class="ml-2">Deliverables</a>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div class="absolute w-full h-full z-40 transform -translate-x-full lg:hidden" id="mobile-nav">
                <div class="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden" onclick="sidebarHandler(false)"></div>
                <div class="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
                    <div class="flex flex-col justify-between h-full w-full">
                        <div>
                            <div class="flex items-center justify-between px-8">
                                <div class="h-16 w-full flex items-center">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_header_and_icons-svg1.svg" alt="logo">
                                </div>
                                <button aria-label="close sidebar" id="closeSideBar" class="flex items-center justify-center h-10 w-10 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded" onclick="sidebarHandler(false)">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_header_and_icons-svg2.svg" alt="cross">
                                </button>
                            </div>
                            <ul class="py-6">
                                <li class="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div class="flex items-center">
                                        <div class="w-6 h-6 md:w-8 md:h-8">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x="4" y="4" width="6" height="6" rx="1" />
                                                <rect x="14" y="4" width="6" height="6" rx="1" />
                                                <rect x="4" y="14" width="6" height="6" rx="1" />
                                                <rect x="14" y="14" width="6" height="6" rx="1" />
                                            </svg>
                                        </div>
                                        <a href="javascript:void(0)" class="ml-2 xl:text-base md:text-2xl text-base">Dashboard</a>
                                    </div>
                                </li>
                                <li class="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div class="flex items-center">
                                        <div class="w-6 h-6 md:w-8 md:h-8">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                            </svg>
                                        </div>
                                        <a href="/admin/books" data-navigo class="ml-2 xl:text-base md:text-2xl text-base">Products</a>
                                    </div>
                                </li>
                                <li class="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div class="flex items-center">
                                        <div class="w-6 h-6 md:w-8 md:h-8">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                                <circle cx="12" cy="12" r="9" />
                                            </svg>
                                        </div>
                                        <a href="javascript:void(0)" class="ml-2 xl:text-base md:text-2xl text-base">Performance</a>
                                    </div>
                                </li>
                                <li class="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div class="flex items-center">
                                        <div class="w-6 h-6 md:w-8 md:h-8">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="7 8 3 12 7 16" />
                                                <polyline points="17 8 21 12 17 16" />
                                                <line x1="14" y1="4" x2="10" y2="20" />
                                            </svg>
                                        </div>
                                        <a href="javascript:void(0)" class="ml-2 xl:text-base md:text-2xl text-base">Deliverables</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="w-full">
                            <div class="flex justify-center mb-4 w-full px-6">
                                <div class="relative w-full">
                                    <div class="text-gray-600 absolute ml-4 inset-0 m-auto w-4 h-4">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_header_and_icons-svg3.svg" alt="Search">
                                    </div>
                                    <input class="bg-gray-200 focus:outline-none rounded w-full text-sm text-gray-600 placeholder-gray-600 pl-10 py-2" type="text" placeholder="Search" />
                                </div>
                            </div>
                            <div class="border-t border-gray-300">
                                <div class="w-full flex items-center justify-between px-6 pt-1">
                                    <div class="flex items-center">
                                        <img alt="profile-pic" role="img" src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png" class="w-8 h-8 rounded-md" />
                                        <p class="md:text-xl text-gray-800 text-base leading-4 ml-2">Jane Doe</p>
                                    </div>
                                    <ul class="flex">
                                        <li class="cursor-pointer text-white pt-5 pb-3">
                                            <a aria-label="open chats" href="javascript:void(0)">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_header_and_icons-svg4.svg" alt="chats">
                                            </a>
                                        </li>
                                        <li aria-label="open notifications" class="cursor-pointer text-white pt-5 pb-3 pl-3">
                                            <a aria-label="open notifications"  href="javascript:void(0)">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_header_and_icons-svg5.svg" alt="notifications">
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div class="w-full">
                
                <nav class="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
                    <div class="hidden lg:flex w-full pr-6">
                        <div class="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                            <div class="relative w-full">
                                <div class="text-gray-600 absolute ml-4 inset-0 m-auto w-4 h-4">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_header_and_icons-svg3.svg" alt="Search">
                                </div>
                                <input class="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-600 placeholder-gray-600 bg-gray-100 pl-12 py-2" type="text" placeholder="Search" />
                            </div>
                        </div>
                        <div class="w-1/2 hidden lg:flex">
                            <div class="w-full flex items-center pl-8 justify-end">
                                <div class="h-full w-20 flex items-center justify-center border-r border-l">
                                    <button aria-label="open notifications" class="relative cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_header_and_icons-svg5.svg" alt="notifications">
                                        <div class="w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto"></div>
                                    </button>
                                </div>
                                <div  class="h-full w-20 flex items-center justify-center border-r mr-4 cursor-pointer text-gray-600 ">
                                    <button aria-label="open chats" class="focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_header_and_icons-svg4.svg" alt="chats">
                                    </button>
                                </div>
                                <div class="flex items-center relative cursor-pointer" onclick="dropdownHandler(this)">
                                    <div class="rounded-full">
                                        <ul class="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 hidden">
                                            <li class="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                                                <div class="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <circle cx="12" cy="7" r="4" />
                                                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                    </svg>
                                                    <a href="javascript:void(0)" class="text-sm ml-2">My Profile</a>
                                                </div>
                                            </li>
                                            <li class="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2">
                                                <div class="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                                        <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                                    </svg>
                                                    <a href="javascript:void(0)" class="text-sm ml-2">Sign out</a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="relative">
                                            <img class="rounded-full h-10 w-10 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/components/sidebar_layout/sl_1.png" alt="display avatar" role="img" />
                                            <div class="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto"></div>
                                        </div>
                                    </div>
                                    <p class="text-gray-800 text-sm mx-3">Jane Doe</p>
                                    <button aria-label="open profile options" class="cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_header_and_icons-svg6.svg" alt="down">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button aria-label="Main Menu" class="text-gray-600 mr-8 visible lg:hidden relative focus:outline-none focus:ring-2 focus:ring-gray-600 " onclick="sidebarHandler(true)" id="menu">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_header_and_icons-svg7.svg" alt="toggler">
                    </button>
                </nav>
                
                
                <div class="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
                    
                    <div class="w-full h-full rounded border-dashed border-2 border-gray-300">
                        <div class="w-full sm:px-6">
                        <div class="px-4 md:px-10 py-4 md:py-7 bg-gray-100 dark:bg-gray-700 rounded-tl-lg rounded-tr-lg">
                            <div class="sm:flex items-center justify-between">
                                <p tabindex="0" class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800 dark:text-white ">Danh sách sản phẩm</p>
                                <div>
                                    <button class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                                        <p class="text-sm font-medium leading-none text-white"><a class="text-white" href="/admin/books/add" data-navigo>ADD Books</a></p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white dark:bg-gray-800  shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                            <table class="w-full whitespace-nowrap">
                                <thead>
                                    <tr tabindex="0" class="focus:outline-none h-16 w-full text-sm leading-none text-gray-800 dark:text-white ">
                                        <th class="font-normal text-left pl-4">STT</th>
                                        <th class="font-normal text-left pl-12">Name</th>
                                        <th class="font-normal text-left pl-12">Price</th>
                                        <th class="font-normal text-left pl-20">Sale_price</th>
                                        <th class="font-normal text-left pl-20">Img</th>
                                        <th class="font-normal text-left pl-20">CreatedAt</th>
                                        <th class="font-normal text-left pl-20">Category</th>
                                        <th class="font-normal text-left pl-16">Act</th>
                                    </tr>
                                </thead>
                                <tbody class="w-full">
                                    ${data.map((item,index)=>`
                                    <tr tabindex="0" class="focus:outline-none h-20 text-sm leading-none text-gray-800 dark:text-white  bg-white dark:bg-gray-800  hover:bg-gray-100 dark:hover:bg-gray-900  border-b border-t border-gray-100 dark:border-gray-700 ">
                                        <td class="pl-4 cursor-pointer">
                                            <p class="text-sm font-medium leading-none text-gray-800 dark:text-white ">${index +1}</p>
                                        
                                        </td>
                                        <td class="pl-12">
                                            <p class="text-sm font-medium leading-none text-gray-800 dark:text-white ">${item.name}</p>
                                            <div class="w-24 h-3 bg-gray-100 dark:bg-gray-700  rounded-full mt-2">
                                                <div class="w-20 h-3 bg-green-progress rounded-full"></div>
                                            </div>
                                        </td>
                                        <td class="pl-12">
                                            <p class="font-medium">${Number(item.price).toLocaleString("it-IT", { style: "currency", currency: "VND" })}</p>
                                        </td>
                                        <td class="pl-20">
                                            <p class="font-medium md-100 break-words">${Number(item.sale_price).toLocaleString("it-IT", { style: "currency", currency: "VND" })}</p>
                                        </td>
                                        <td class="pl-20">
                                            <p class="font-medium"><img class="w-20" src="${item.img}" alt=""></p>
                                        </td>
                                        <td class="pl-20">

                                            <p class="font-medium md-100 break-words">${new Date(item.createdAt).toLocaleDateString()} </p>
                                        </td>
                                        <td class="pl-20">

                                            <p class="font-medium md-100 break-words">${item.category.name} </p>
                                        </td>
                                        <td class="pl-16">
                                            <button  class="btn btn-danger btn-delete" data-id=${item.id}>Delete</button> |
                                            <button class="btn btn-danger btn-edit"><a href="/admin/books/${item.id}/edit" data-navigo>Edit</a></button>
                                        </td>
                                    
                                    </tr>
                                    `).join('')}                                              
                                </tbody>
                            </table>
                        </div>
                    </div>      
                    </div>
                </div>
            </div>
        </div>
    </div>

       `;
   },
   afterRender(){
    const btns = document.querySelectorAll('.btn-delete');
    btns.forEach(btn  =>{
        const id = btn.dataset.id;
        btn.addEventListener('click', async function(){
            const confirm = window.confirm("Bạn có chắc chắn xóa sp không??");
            if (confirm) {
                remove(id).then(()=>{
                    reRender(ProductList,'#app')
                })
            }
        })
    })
  }
}

export default ProductList;