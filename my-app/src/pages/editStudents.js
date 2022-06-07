import axios from "axios";
import { getST, updateST } from "../api/student";


const StudentUpdate ={
    async render(id){
        const {data} = await getST(id)
        return /*html*/`
  
        <h2 class="text-center text-3xl p-5">Cập Nhật Sinh viên</h2>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8 mb-5">
          <a class="flex" href="/#/admin/students"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
        </svg>Quay lại</a>
        </button>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-6 sm:px-0">
              <div class=" bg-white rounded-md max-w-2xl">
                <div class="space-y-4">
                  <div>
                    <label for="title" class="text-lx font-serif">Name:</label>
                    <input type="text" placeholder="name" id="name" class=" mt-2 outline-none py-1 px-2 text-md border-2 rounded-md w-full" value="${data.name}"/>
                  </div>
                  <div>
                    <label for="title" class="text-lx font-serif">Avatar:</label>
                    <input type="file" placeholder="avatar  cdn" id="avatar" class=" mt-2 outline-none py-1 px-2 text-md border-2 rounded-md w-full" value="${data.avatar}" />
                    <img class="loadAvatar" src="${data.avatar}" alt="" width = "300px">
                  </div>
                  <div>
                    <label for="title" class="text-lx font-serif">Ma SV:</label>
                    <input type="text" placeholder="masv" id="masv" class=" mt-2 outline-none py-1 px-2 text-md border-2 rounded-md w-full" value="${data.masv}"/>
                  </div>

                  <button class="btnUpdate px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">UPDATE Student</button>
                </div>
              </div>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
        `
    },
    afterRender(id){
      const avatar = document.querySelector('#avatar')
      const loadAvatar = document.querySelector('.loadAvatar')
      const btnUpdate = document.querySelector('.btnUpdate')

      avatar.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dbpw1enlu/image/upload"
  
        const formData = new FormData();
  
        formData.append('file', file);
        formData.append('upload_preset', "cyfbktyp");
        // call api cloudinary
  
        const response = await axios.post(CLOUDINARY_API, formData, {
          headers: {
            "Content-Type": "application/form-data"
          }
        });
  
        loadAvatar.src = response.data.url
        if(response.status == 200){
          handlerUpdate(response.data.url)
        }
      })

      function handlerUpdate(avatar){
        btnUpdate.addEventListener('click', () =>{
          
          const name = document.querySelector('#name').value
          const masv = document.querySelector('#masv').value
      

          if(name == "" || masv == "" ){
            alert('Vui lòng nhập đầy đủ thông tin!')
          }else{
            updateST({
              id,
              name: name,
              avatar: avatar,
              masv: masv

            }).then(() =>{
              alert('Cập nhật sinh vien mới thành công !')
              window.location = '/admin/students'
            })
          }
            
        })
      }
      handlerUpdate(document.querySelector('.loadAvatar').src)

    }
}

export default StudentUpdate;
