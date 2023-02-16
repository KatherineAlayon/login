import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* <nav>
       <ul>
          <li>
            <a href="/blog">Tabla</a><br></br>
          </li>
       </ul>
    </nav> */}
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
    </>
    
  );
}

export default MyApp;
