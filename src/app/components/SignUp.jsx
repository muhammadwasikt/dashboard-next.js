"use client"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { addDoc, auth, collection, createUserWithEmailAndPassword, db } from "../firebase";
import { useState } from "react";

const SignUpComponent = () => {
    const [isLoader, setIsLoader] = useState(false);
    const routes = useRouter();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const navigate = () => {
        routes.push('/sign-in');
    };

    const addData = async ({name , uid})=>{
        await addDoc(collection(db, "email"), {
            userName: name,
            uid: uid,
        })
    }
    const onSubmit = async ({ email, password, name }) => {
        setIsLoader(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const uid = userCredential.user.uid
            toast.success('Successfully created your account.');
            await addData({name , uid})
            setIsLoader(false);
            reset();
        } catch (error) {
            const errorCode = error.code;
            toast.error(errorCode);
            setIsLoader(false);
            reset();
        }
    }
    return (
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Create your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                Your name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    {...register("name", { required: true })}
                                    autoComplete="name"
                                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                                {errors.name && <span className="text-red-600 text-[12px]">This field is required</span>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    {...register("email", { required: true })}
                                    autoComplete="email"
                                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                                {errors.email && <span className="text-red-600 text-[12px]">This field is required</span>}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    maxLength="8"
                                    {...register("password", { required: true })}
                                    autoComplete="current-password"
                                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                                {errors.password && <span className="text-red-600 text-[12px]">This field is required</span>}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {isLoader ? 'Loading...' : 'Sign Up'}
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Already have an account:
                        <span onClick={navigate} className="cursor-pointer font-semibold text-indigo-600 hover:text-indigo-500">
                            Sign In
                        </span>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}


export default SignUpComponent
