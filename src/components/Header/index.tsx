

export default function Header(){
    return(
        <header className="flex justify-around items-center p-5 text-xl">
            <h1>Lukas Ramyses</h1>
            <nav className="flex gap-3">
                <p>Home</p>
                <p>Sobre</p>
                <p>Portifolio</p>
                <p>Contato</p>
            </nav>
        </header>
    )
}