const Header = {
    // render: function () {
    //     return '<div>Header Component</div>';
    // },
    // render: (name, age, birthday) => ('<div>' + name + ', ' + age + ',' + '</div>'),
    // render: (name = 'WE17101') => (`<div>${name}</div>`)
    // sau mũi tên là ngoặc tròn -> return kết quả
    render(){
        const IUser = JSON.parse(localStorage.getItem("user"))
        function btnLogout(){ 
            console.log(2);
        }
        console.log(IUser);
        return `
            <div class="relative bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6">
                <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <a href="#">
                    <span class="sr-only">Workflow</span>
                    <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="">
                    </a>
                </div>
                <div class="-mr-2 -my-2 md:hidden">
                    <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                    <span class="sr-only">Open menu</span>
                    <!-- Heroicon name: outline/menu -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                </div>
                <nav class="hidden md:flex space-x-10">
                    <div class="relative">
                    <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                    <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
                    <a href="/" class="text-base font-medium text-gray-500 hover:text-gray-900" data-navigo> Home </a>

                       
                    </button>
            
                    </div>
            
                    <a href="/news" class="text-base font-medium text-gray-500 hover:text-gray-900" data-navigo> News </a>
                    <a href="/products" class="text-base font-medium text-gray-500 hover:text-gray-900" data-navigo> Products </a>
            
                    <div class="relative">
                   
                    <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
                    <a href="/about" class="text-base font-medium text-gray-500 hover:text-gray-900" data-navigo> About </a>

                       
                        
                    </button>
            
                    </div>
                </nav>
                <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    ${IUser ? 
                        `<span onCLick="${btnLogout}" data-navigo class="logout ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Logout </span>`
                        :
                        `<a href="/signin" data-navigo class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> Sign in </a>
                         <a href="/signup" data-navigo class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a>` 
                        }
                    
                </div>
                
            </div>
            
            
                
            </div>
       
        
        `
    },
    afterRender(){
        console.log(1);
        const btnLogout = document.querySelector('.logout')
        btnLogout.addEventListener('click',function(){
            localStorage.removeItem("user")
        })

    }
};

export default Header;