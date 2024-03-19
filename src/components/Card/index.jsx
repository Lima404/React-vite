import './styles.css'
import Code from './assets/code.svg'
import Chat from './assets/chat.svg'
import Share from './assets/share.svg'

export default function Card ({ id, imagemUrl, titulo, resumo, linhasDeCodigo, compartilhamentos, comentarios,usuario }) {
    return(
        <article className='card'>
            <div className="card__imagem">
                <img src={ imagemUrl } alt='imagem do post'/>
            </div>
            <div className='card__conteudo'>
                <div className='conteudo__texto'>
                    <h3>{titulo}</h3>
                    <p>{resumo}</p>
                </div>
                <div className='conteudo__rodape'>
                    <ul>
                        <li>
                            <img src={Code} alt='Códigos' />
                            {linhasDeCodigo}
                        </li>
                        <li>
                            <img src={Share} alt='compartilhamentos' />
                            {compartilhamentos}
                        </li>
                        <li>
                            <img src={Chat} alt='comentários' />
                            {comentarios}
                        </li>
                    </ul>

                    <div className='rodape__usuario'>
                        <img src={usuario.imagem} alt='Imagem de perfil' />
                        {usuario.nome}
                    </div>
                </div>
            </div>
        </article>
    )
}