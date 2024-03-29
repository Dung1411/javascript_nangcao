import { signin } from "../../api/users"


const Signin = {
    render(){
        return /*html*/`
     
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div class="mb-4">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
                Email đăng nhập
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="text" placeholder="email">
            </div>
            <div class="mb-6">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                Mật khẩu
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************">
            </div>
            <button class="btnSignin bg-blue-900 font-bold text-white w-36 h-10 rounded" type="submit">
            Đăng Nhập
          </button>
        <div class="flex items-center justify-between">
        <div class="flex flex-col">
            
          <a class=" text-sm mt-4 hover:text-blue-darker text-blue-500" href="/#/signup">Đăng ký tài khoản</a>
        </div>
          
          <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="/##">
            Bạn quên mật khẩu?
          </a>
        </div>
    </div>
        `
    },
    afterRender(){
      const btnSignin = document.querySelector('.btnSignin')
      btnSignin.addEventListener('click', async () =>{
        const email = document.querySelector('#email').value
        const password = document.querySelector('#password').value
        
        if(email =="" || password ==""){
          alert('Vui lòng nhập đầy đủ thông tin !')
        }else{
          try {
            const response = await signin({
              email: email,
              password: password
            })
            localStorage.setItem('user', JSON.stringify({token : response.data.accessToken,userId :response.data.user.id }))
            alert("Xin chào : " + response.data.user.username)
            // const users = JSON.parse(localStorage.getItem('user'))
            // console.log(users);
            /*"user": {
              "email": "admin@gmail.com",
              "username": "admin",
              "role": 1,
              "id": 3
            } */
            if(response.data.user.role === 1){
                window.location="/admin";
            } else {
                window.location="/";
            }
            
          } catch (error) {
            alert('Đăng nhập thất bại vui lòng thử lại !')
          }
        }
        
      })
    }
}
export default Signin 
// hay la lam nut  dang xuat rieng