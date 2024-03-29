import { addCate } from "../../../api/categories";
import { reRender } from "../../../utils/reRender";
import CategoryList from "./categories";

const CategoryAdd = {
    render(){
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
                                        <a href="javascript:void(0)" class="ml-2 xl:text-base md:text-2xl text-base">Products</a>
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
                

                <div class="w-full sm:px-6">
                <div class="px-4 md:px-10 py-4 md:py-7 bg-gray-100 dark:bg-gray-700 rounded-tl-lg rounded-tr-lg">
                  
                </div>
                <div class="bg-white dark:bg-gray-800  shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    
                                
                        
                    <header class="bg-white shadow">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <!-- This example requires Tailwind CSS v2.0+ -->
                        <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            Thêm mới danh mục
                            </h2>
                        </div>
                        <div class="mt-5 flex lg:mt-0 lg:ml-4">
                            <a href="/admin/cate" class="sm:ml-3">
                            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Quay lại
                            </button>
                            </a>
                        </div>
                        </div>
                
                    </div>
                </header>
                <main>
                    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <!-- Replace with your content -->
                    <form action="" id="form-add">
                        <input type="text"
                            id="name_cate"
                            class="border border-black"
                            placeholder="Name"
                        > <br />
                        <button class="bg-blue-500 p-4 text-white">Thêm</button>
                    </form>
                    <!-- /End replace -->
                    </div>
                </main>
                </div>
                
                   
                </div>
            </div>      
                </div>
                </div>
            </div>
        </div>
    </div>

       `;
   },
    afterRender() {
        const formAdd = document.querySelector("#form-add");
       
        formAdd.addEventListener("submit", (e) => {
            e.preventDefault();
            addCate({
                    name: document.querySelector("#name_cate").value,
                })
                .then(() => reRender(CategoryList, "#app"));
            alert("Bạn đã thêm thành công");
        });
    },
};

export default CategoryAdd;