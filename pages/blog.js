
function Blog({ data }) {
    return (
        <ul>
            <div className="bg-pink-50 ">
                <div className="m-4">
                    <a href="/" className="font-serif p-2 text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg">Regresar</a><br></br>
                </div>

                <table>
                    <thead>
                        <tr className="grid grid-cols-9 px-36 font-serif">
                            <th className="bg-violet-300 col-span-1 border border-slate-300"><br></br>ID</th>
                            <th className="bg-violet-300 col-span-4 border border-slate-300">TITULO</th>
                            <th className="bg-violet-300 col-span-4 border border-slate-300">CONTENIDO</th>
                        </tr>
                    </thead>
                    {data.map(({id, title, body}) => (
                        <div key={id}className="px-36 font-serif">
                            <tbody>
                                <tr className="grid grid-cols-9 ">
                                    <td className="bg-violet-300 col-span-1 text-center border border-slate-300 hover:bg-slate-300 active:bg-slate-300 focus:outline-none focus:ring focus:ring-slate-300">{id}</td>
                                    <td className="bg-white col-span-4 text-center border border-slate-300 hover:bg-slate-300 active:bg-slate-300 focus:outline-none focus:ring focus:ring-slate-300">{title}</td>
                                    <td className="bg-white col-span-4 text-center border border-slate-300 hover:bg-slate-300 active:bg-slate-300 focus:outline-none focus:ring focus:ring-slate-300">{body}</td>
                                </tr>
                            </tbody>
                        </div> 
                    ))}
                </table>
            </div>
        </ul>
    )
  }
  
  export async function getStaticProps () {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return{
      props: {
        data
      }
    }
  }

  export default Blog;