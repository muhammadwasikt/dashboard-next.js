"use client"
import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"
import { auth, signInWithEmailAndPassword } from "../firebase"
import { toast, ToastContainer } from "react-toastify"
import { useState } from "react"


const SignInComponent = () => {
  interface DataProps{
    email: string,
    password: string
  }
    const [isLoader , setIsLoader] = useState(false)
    const router =  useRouter()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<DataProps>()
    
    const onSubmit: SubmitHandler<DataProps>  = (data) => {
      const  { email, password } = data
        setIsLoader(true)
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success('Successfully Sign in')
          reset()
          setIsLoader(false)
          router.push('/dashboard')
        })
        .catch((error) => {
          const errorCode = error.code;
          toast.error(errorCode)
          setIsLoader(false)
          reset()
        });  
    }


    const navigate = ()=>{
        router.push('/sign-up')
    }
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                  autoComplete="email"
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
                {errors.email && <span className="text-red-600 text-[12px]">This field is required</span>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  {...register("password", { required: true })}
                  autoComplete="current-password"
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
                {errors.password && <span className="text-red-600 text-[12px]">This field is required</span>}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoader ? 'Loading...' :'Sign in'}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
          Don&apos;t have an account:
            <span onClick={navigate} className="cursor-pointer font-semibold text-indigo-600 hover:text-indigo-500">
              Sign Up
            </span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default SignInComponent
