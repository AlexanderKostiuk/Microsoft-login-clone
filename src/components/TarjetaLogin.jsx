import logo from "../assets/Microsoft_logo.svg";
import KeySVG from "../assets/key-microsoft.svg"

export default () => {
    return (
        <div >
            <div className="block w-[440px] min-h-[338px] mb-8">
                <div className="bg-white p-[44px] shadow-lg">
                    <div className="flex items-center gap-1">
                        <img className="size-6" src={logo} alt="" />
                        <h1 className="text-gray-500 text-[19px] font-medium">Microsoft</h1>
                    </div>

                    <div>
                        <h1 className="text-2xl font-semibold mt-4">Sign in</h1>
                    </div>

                    <div className="mt-3 mb-3 border border-b-gray-600 border-x-0 border-t-0">
                        <input type="text" placeholder="Email, phone, or skype" className="w-full pb-1.5 focus:outline-none placeholder-slate-600 placeholder:font-light" />
                    </div>

                    <div className="block">
                        <div className="flex gap-1">
                            <p className="text-xs">No account?</p>
                            <a className="text-xs text-blue-600 hover:text-gray-500 hover:underline underline-offset-1" href="#">Create one!</a>
                        </div>
                        <div className="flex mt-5 gap-1">
                            <a className="text-xs text-blue-600  hover:text-gray-500 hover:underline underline-offset-1" href="#">Sign in with Windows Hello or a security key</a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </div>
                        <div className="flex justify-end mt-5">
                            <button className=" bg-blue-700 text-white px-9 py-1 hover:opacity-85">Next</button>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 pl-10 mt-8 bg-white p-3 shadow-xl hover:bg-gray-100 cursor-pointer items-center">
                    <img className="size-6" src={KeySVG} alt="key-microsoft"/>

                    <button className="text-base font-normal">Sign-in options</button>
                </div>
            </div>
        </div>
    );
};