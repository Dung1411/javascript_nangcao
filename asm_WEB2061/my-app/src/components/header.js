import { getMe } from './../api/users';

const Header = {
    async render(){
        const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        if(token){
            var { data: profile} = await getMe(token.userId,token.token);
        }
        // console.log(profile);

        return `
        <div>       
            <nav class="bg-white shadow">
                <div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
                    <div class="flex justify-between items-center">
                        <div>
                            <a class="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700" href="/"> WEB2061</a>
                        </div>
                        <div class="flex flex-col-5 md:flex-row md:mx-8">
                        <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/">Home</a>
                            <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/books">Books</a>
                            <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/">Blogs</a>
                            <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/">Contact</a>
                  
                        </div>
                        <div class="flex md:hidden">
                            <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            </svg>
                            </button>
                        </div>
                        </div>
                        
                        <div class="md:flex items-center">
                        <div class="flex flex-col-5 md:flex-row md:mx-8">
                            ${profile ? 
                                `<div class="flex items-center relative cursor-pointer" onclick="dropdownHandler(this)">
                                    <div class="rounded-full">
                                        <ul class="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 hidden">
                                            <li class="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                                                <div class="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                                        <circle cx="12" cy="7" r="4"></circle>
                                                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                                    </svg>
                                                    <a href="javascript:void(0)" class="text-sm ml-2">My Profile</a>
                                                </div>
                                            </li>
                                            <li class="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2">
                                                <div class="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                                                        <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
                                                    </svg>
                                                    <a href="javascript:void(0)" class="text-sm ml-2">Sign out</a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="relative">
                                            <img class="rounded-full h-10 w-10 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/components/sidebar_layout/sl_1.png" alt="display avatar" role="img">
                                            <div class="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto"></div>
                                        </div>
                                    </div>
                                    <p class="text-gray-800 text-sm mx-3">${profile.username}</p>
                                    
                                </div>
                                <a href="/logout" class="text-white btn-logout bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Đăng xuất</a>`
                            :
                            `<div class="hidden sm:flex flex-row space-x-2">
                                <div> 
                                    <a href="/signup" data-navigo class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up</a>
                                    <a href="/signin" data-navigo class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign In</a>
                                </div>
                            </div> `
                        }
                            
                        </div>
                        <div class="flex justify-center md:block" id='cart'>
                            <a class="relative text-gray-700 hover:text-gray-600" href="/cart">
                            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span class="absolute top-0 left-0 rounded-full bg-indigo-500 text-white p-1 text-xs" />
                            </a>
                        </div>
                    
                    </div>
                </div>
            </nav>
        </div>    
        `
    },
    afterRender(){
       const buttonLogout = document.querySelector('.btn-logout'); 
       if(buttonLogout){
        buttonLogout.addEventListener('click',(e) =>{
            e.preventDefault();
            localStorage.removeItem('user');
            location = '/signin';
            
        })
       }
    }
}

export default Header;