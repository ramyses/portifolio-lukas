import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
export default function Footer() {
    return(
        <footer  className="flex flex-col justify-evelyn align-center bg-slate-900 p-3">
            <section className="flex justify-evenly">
                <div className="w-1/3">
                    <h3 className="text-xl pb-3 font-bold">CONTATO</h3>
                    <div className="">
                        <ul>
                            <li>
                                Endereço
                            </li>
                            <li>
                                <a href="tel:92982761451" className="flex align-bottom justify-start">
                                     (92) 98276-1451
                                </a>
                            </li>
                            <li>
                                E-mail
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-1/3">
                    <h3 className="text-xl pb-3 font-bold">MENU</h3>
                    <div>
                        <ul>
                            <li>HOME</li>
                            <li>SOBRE</li>
                            <li>PORTIFOLIO</li>
                            <li>CONTATO</li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer>
    )
}