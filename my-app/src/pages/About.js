import Footer from "../components/Footer";
import Header from "../components/Header";

const About = {
    render: () => `
    <div>${Header.render()}</div>
    <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div class="lg:w-10/12 w-full">
            
        </div>

        <div class="lg:mt-14 sm:mt-10 mt-12">
            <img class="lg:block hidden w-full" src="https://i.ibb.co/GvwJnvn/Group-736.png" alt="Group of people Chilling" />
            <img class="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/5sZTmHq/Rectangle-116.png" alt="Group of people Chilling" />
            <img class="sm:hidden block w-full" src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png" alt="Group of people Chilling" />
        </div>

        <div class="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
            <div class="w-full xl:w-5/12 lg:w-6/12">
                <h2 class="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white">Our Story</h2>
                <p class="font-normal text-base leading-6 text-gray-600 dark:text-white mt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                <p class="font-normal text-base leading-6 text-gray-600 dark:text-white mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
            </div>
            <div class="lg:flex items-center w-full lg:w-1/2">
                <img class="lg:block hidden w-full" src="https://i.ibb.co/2kxWpNm/Group-740.png" alt="people discussing on board" />
                <img class="lg:hidden sm:block hidden w-full h-3/4" src="https://i.ibb.co/ZLgK3NQ/Group-788.png" alt="people discussing on board" />
                <img class="sm:hidden block w-full" src="https://i.ibb.co/9g2R7Xr/Group-803.png" alt="people discussing on board" />
            </div>
        </div>
        <div class="relative mt-24">
            <div class="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                <div class="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg1.svg" alt="flag" />
                </div>

            <img class="z-20" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg2.svg" alt="note" />

            <img class="z-20 sm:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg" alt="users" />
            </div>
            <hr class="z-10 absolute top-2/4 w-full bg-gray-200" />
        </div>
        <div class="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <div>
                <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">Founded</p>
                <p class="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div>
                <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">50M montly enrichments</p>
                <p class="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div class="sm:block hidden">
                <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">400k User</p>
                <p class="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
        </div>
        <div class="sm:hidden block relative mt-8">
            <div class="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg" alt="user" />
            </div>
            <hr class="z-10 absolute top-2/4 w-full bg-gray-200" />
        </div>
        <div class="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <div>
                <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">400k User</p>
                <p class="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
        </div>

        <div class="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
            <div class="w-full lg:w-6/12">
                <h2 class="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white">Our Mission</h2>
                <p class="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6 w-full lg:w-10/12 xl:w-9/12">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                <p class="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 w-full lg:w-10/12 xl:w-9/12 mt-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
            </div>
            <div class="w-full lg:w-6/12">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                    <!-- Team Card -->
                    <div class="flex p-4 shadow-md">
                        <div class="mr-6">
                        <img class="mr-6"  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg4.svg" alt="team card" />
                        </div>
                        <div class="">
                            <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white">Team</p>
                            <p class="mt-2 font-normal text-base leading-6 text-gray-600 dark:text-gray-200">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>

                    <!-- Board Card -->
                    <div class="flex p-4 shadow-md">
                        <div class="mr-6">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg5.svg" alt="board card" />
                        </div>
                        <div class="">
                            <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white">Board</p>
                            <p class="mt-2 font-normal text-base leading-6 text-gray-600 dark:text-gray-200">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>

                    <!-- Press Card -->
                    <div class="flex p-4 shadow-md">
                        <div class="mr-6">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg6.svg" alt="press card" />
                        </div>
                        <div class="">
                            <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white">Press</p>
                            <p class="mt-2 font-normal text-base leading-6 text-gray-600 dark:text-gray-200">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div>${Footer.render()}</div>

   

    `
}

export default About;