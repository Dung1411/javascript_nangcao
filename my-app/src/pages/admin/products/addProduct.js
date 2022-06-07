import Dashboard from "../../../components/Dashboard";
import { add, remove } from "../../../api/product";
import axios from "axios";



const ProductAdd ={
    render(){
        return /*html*/`
            ${Dashboard.render()}
            <h2 class="text-3xl p-5">Thêm Mới Sản Phẩm</h2>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8 mb-5">
              <a class="flex text-white" href="/#/admin/products"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>Quay lại</a>
            </button>
          <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <!-- Replace with your content -->
              <div id="form-add" class="px-4 py-6 sm:px-0">
                  <div class=" bg-white rounded-md max-w-2xl">
                    <div class="space-y-4">
                      <div>
                        <label for="title" class="text-lx font-serif">Name:</label>
                        <input type="text" placeholder="name" id="name" class=" mt-2 outline-none py-1 px-2 text-md border-2 rounded-md w-full" />
                      </div>
                      <div>
                        <label for="title" class="text-lx font-serif">Img:</label>
                        <input type="file" placeholder="img  cdn" id="img" class=" mt-2 outline-none py-1 px-2 text-md border-2 rounded-md w-full" />
                        <img class="loadImgNow" src="" alt="" width="250px">
                      </div>
                      <div>
                        <label for="price" class="text-lx font-serif">Price:</label>
                        <input type="text" placeholder="price" id="price" class=" mt-2 outline-none py-1 px-2 text-md border-2 rounded-md w-full" />
                      </div>
                      <div>
                        <label for="description" class="block mb-2 text-lg font-serif">Description:</label>
                        <textarea id="description" cols="30" rows="10" placeholder="whrite here.." class="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"></textarea>
                      </div>
                      <div>
                        <label for="status" class="block mb-2 text-lg font-serif">Status:</label>
                        <select onChange={(e) => onChangeStatus(e,products.id)} id="status" defaultValue={products.status}>
                          <option value=1>Còn hàng</option>
                          <option value=0>Hết</option>
                        </select>
                      </div>
                    
                      <button disabled class="opacity-70 px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">ADD PRODUCTS</button>
                    </div>
                  </div>
              </div>
              <!-- /End replace -->
            </div>
          </main>
        </div>
        `
    },
    afterRender(){
      const img = document.querySelector('#img')
      const loadImgNow = document.querySelector('.loadImgNow')
      const btnAdd = document.querySelector('.opacity-70')

      img.addEventListener('change', async (e) =>{
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

        if(response.status === 200){
          loadImgNow.src = response.data.url
          btnAdd.classList.remove('opacity-70')
          btnAdd.removeAttribute('disabled')

          btnAdd.addEventListener('click', (e) =>{
            e.preventDefault()
            const name = document.querySelector('#name').value
            const desc = document.querySelector('#description').value
            const price = document.querySelector('#price').value
            const status = document.querySelector('#status').value
            
            if(name == "" || price == "" || desc == "" ){
              alert('Vui lòng nhập đầy đủ thông tin!')
            }else{
              add({
                name: name,
                img: response.data.url,
                price: price,
                desc: desc,
                status: status
              }).then(() =>{
                alert('Thêm sản phẩm mới thành công !')
                window.location = '/admin/products'
              })
            }
          })

        }

      })

    }
}

export default ProductAdd;