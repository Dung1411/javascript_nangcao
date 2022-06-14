import { getAllUser, removeUser } from "../../../api/users";
import { reRender } from "../../../utils/reRender";
import Dashboard from "../dashboard";

const UserList ={
    async render(){
        const {data} = await getAllUser();
       return `    
       ${Dashboard.render()}
       <div class="w-full sm:px-6">
           <div class="px-4 md:px-10 py-4 md:py-7 bg-gray-100 dark:bg-gray-700 rounded-tl-lg rounded-tr-lg">
               <div class="sm:flex items-center justify-between">
                   <p tabindex="0" class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800 dark:text-white ">Danh sách nguoi dung</p>
               
               </div>
           </div>
           <div class="bg-white dark:bg-gray-800  shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
               <table class="w-full whitespace-nowrap">
                   <thead>
                       <tr tabindex="0" class="focus:outline-none h-16 w-full text-sm leading-none text-gray-800 dark:text-white ">
                           <th class="font-normal text-center text-left pl-4">STT</th>
                           <th class="font-normal text-center text-left pl-12">Name</th>
                           <th class="font-normal text-center text-left pl-12 w-25">Email</th>
                           <th class="font-normal text-center text-left pl-16">Act</th>
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
                               <p class="font-medium">${item.email}</p> 
                           </td>
                         
                           
                           <td class="pl-16">
                               <button  class="delete btn btn-danger btn-delete" data-id=${item.id}>Delete</button>
                           </td>
                       
                       </tr>
                       `).join('')}                                              
                   </tbody>
               </table>
           </div>
       </div>      
       `;
   },
   afterRender(){
    const btns = document.querySelectorAll('.delete');
    btns.forEach(btn  =>{
        const id = btn.dataset.id;
        btn.addEventListener('click', async function(){
            const confirm = window.confirm("Bạn có chắc chắn xóa danh muc không??");
            if (confirm) {
                removeUser(id).then(()=>{
                    reRender(CategoryList,'#app')
                })
            }
        })
    })
  }
   
}

export default UserList;