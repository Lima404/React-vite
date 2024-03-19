import './styles.css'

export default function Filtro() {
    return (
        <section className="container-filtro">
            <div className='sec-filtro'>
                <ul>
                    <li>Programação</li>
                </ul>
                <ul>
                    <li>Front-end</li>
                </ul>
                <ul>
                    <li>Acessibilidade</li>
                </ul>
            </div>
            <button>Limpar Tudo!</button>
        </section>
    )
}