import { signIn, useSession } from "next-auth/react";
import { getProviders } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

function LoginPage() {
  const { data } = useSession();
  const router = useRouter();


  useEffect(() => {
    if (data) {
      router.push("/");
    }
  }, [data, router]);

  return (
    <div className="">
      <div className="bg-white mt-44 font-serif px-36 ">
        <div className=" border-2 drop-shadow-2xl mr-96 ml-96 rounded-lg text-center bg-slate-100">
          <h1 className="mt-4 text-4xl text-black">Login</h1>
          <button onClick={() => signIn("prueba")} className="text-white m-12 px-6 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg">Inicia sesion</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
