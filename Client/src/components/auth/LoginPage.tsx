  
  import { BsEggFried } from "react-icons/bs";
import bgImage from "../../assets/loginbg.jpg"
import { NavLink } from "react-router-dom";
 const LoginPage = () => {
  return (
    <section className="h-screen">
      <div className="h-full ">
        {/* <!-- Left column container with background--> */}
        <div className="bg-[#7dc0c7d4] flex h-full justify-center gap-5 sm:max-lg:flex-col"
          >
                {/* <!-- Right column container --> */}
        
          <div className="bg-cover bg-center h-screen w-1/2 sm:max-lg:w-full" style={{backgroundImage:`url(${bgImage})`}}>
             <h3 className="text-4xl text-black font-bold self-center w-fit flex">Social Nation
            {/* <img src={bgImage} alt="background" className="h-1/2 w-1/2" />  */}
            <BsEggFried className="text-4 text-white  font-thin" />
            </h3>
             </div>
           <form className="flex flex-col bg-[#7dc0c7d4] min-h-1/2  rounded-lg self-center w-1/3 justify-center p-4 h-fit shadow-[7px_-1px_11px_9px_rgba(0,_0,_0,_0.8)] sm:max-lg:w-full sm:max-lg:h-full sm:max-lg:-mt-40" >
                      <h3 className="text-lg  font-bold self-center">Sign in to your account</h3>

              {/* <!-- Email input --> */}
             <label htmlFor="email">Email</label>
                          <input
                type="email"
                placeholder="abelrula716@gmail.com"
                 className="mb-6 border outline-1 p-2 w-3/4 rounded-lg"
              />

              {/* <!--Password input--> */}
             <label htmlFor="email">Password</label>
              <input
                type="password"
                placeholder="**************"
                className="mb-6 border outline-1 p-2 w-3/4 rounded-lg"
              />

              <div className="mb-6 flex items-center justify-between">
                {/* <!-- Remember me checkbox --> */}
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                     type="checkbox"
                    value=""
                    id="exampleCheck2"
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>

                {/* <!--Forgot password link--> */}
                <a href="#!">Forgot password?</a>
              </div>

              {/* <!-- Login button --> */}
              <div className="text-center flex flex-col lg:text-left">
              <NavLink
                to="/"
                    // type="button"
                    className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] self-center bg-sky-700 "
                  >
                    Login
                  </NavLink>
                {/* <!-- Register link --> */}
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Don't have an account?{" "}
                  <a
                    href="/register"
                    className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >
                    Register
                  </a>
                </p>
            </div>
            </form>
          </div>
        </div>
     </section>
  );
}

export default LoginPage