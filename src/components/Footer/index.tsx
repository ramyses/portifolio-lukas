import { FaWhatsapp } from "react-icons/fa";
export default function Footer() {
    return(
        <footer  className="flex flex-col justify-around align-center bg-slate-900 p-3">
            <section className="flex justify-evenly">
                <div>
                    <h3>CONTATO</h3>
                    <div>
                        <ul>
                            <li>Endereço</li>
                            <li>Telefone</li>
                            <li>E-mail</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3>MENU</h3>
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
    
            
            <div className="flex flex-col justify-center items-center pt-3">
                    <div >
                        <a href="#"><FaWhatsapp /></a>
                        <a href="#"></a>
                    </div>
                    <p>Todos os direitos reservados <strong>123 Doces</strong>.</p>
                </div>
            
        </footer>
    )
}