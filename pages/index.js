import { getSession, signOut } from "next-auth/react";
// import Image from "next/image";

function IndexPage({ session }) {

  return (
    <main className="m-4 ">
      <div className=" mt-32 font-serif px-36 ">
        <div className="border-2 drop-shadow-2xl mr-96 ml-96 rounded-lg text-center bg-white">

          <div className="font-serif text-2xl mt-4">
            <h1>Tus datos de inicio de sesion son:</h1><br></br>
          </div>

          <div>
            {session?.user ? (
              <div className=" font-serif">
                <h1>Usuario: <br></br> {session.user.name}</h1><br></br>

                <h1>Correo: <br></br>{session.user.email}</h1><br></br>
                <nav>
                  <ul>
                    <li>
                      <a href="/blog" className="px-7 p-1 text-white ml- bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg">Generar tabla</a><br></br><br></br>
                    </li>
                  </ul>
                </nav>
                <div className=""> 
                  <button onClick={() => signOut()} className="mb-4 px-7 text-white ml- bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg">Cerrar sesion</button>
                </div>
              </div>
            ) : (
              <h1>skeleton</h1>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  console.log(session);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default IndexPage;


