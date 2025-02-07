import Link from "next/link";

export default function Products() {
    return (
       <>
           <ul>
               <li>
                   <Link href="/">
                        Voltar
                   </Link>
               </li>
           </ul>
           <h1>Pagina de Produtos</h1>
       </>
    )
}