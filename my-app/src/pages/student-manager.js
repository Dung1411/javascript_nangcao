import { getAllST, removeST } from "../api/student";
import { reRender } from "../utils/reRender";


const StudentManager = {
    async render(){
        const {data} = await getAllST();
       return `    
   
        <div class="w-full sm:px-6">
            <div class="px-4 md:px-10 py-4 md:py-7 bg-gray-100 dark:bg-gray-700 rounded-tl-lg rounded-tr-lg">
                <div class="sm:flex items-center justify-between">
                    <p tabindex="0" class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800 dark:text-white ">Danh sách sinh viên</p>
                    <div>
                        <button class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                            <p class="text-sm font-medium leading-none text-white"><a class="text-white" href="/admin/students/add" data-navigo>ADD Student</a></p>
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
                            <th class="font-normal text-left pl-12">MAsv</th>
                            <th class="font-normal text-left pl-20">Img</th>
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
                                <p class="font-medium">${item.masv}</p>
                            </td>
                            <td class="pl-20">
                                <p class="font-medium"><img class="w-20" src="${item.avatar}" alt=""></p>
                              
                            </td>
                            <td class="pl-16">
                                <button  class="delete btn btn-danger btn-delete" data-id=${item.id}>Delete</button>
                                <button class="btn btn-danger btn-edit"><a href="/admin/students/${item.id}/edit">Edit</a></button>

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
            const confirm = window.confirm("Bạn có chắc chắn xóa sp không??");
            if (confirm) {
                removeST(id).then(()=>{
                    reRender(StudentManager,'#app')
                })
            }
        })
    })
  }
}

export default StudentManager ;