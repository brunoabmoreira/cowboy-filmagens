import style from './Conteudo.css'
import saojoao2009 from '../imagens/saojoao2009.fw.png'

function Conteudo() {
    return (
        <div id="conteudo">
            <div id='screen'>
                <div id='foto'>
                    <a href="http://www.google.com" target='_blank' >
                        <img src={saojoao2009} alt='teste' id='fotos' />
                    </a>
                </div>
                <div id='texto'>
                    <h3>SÃO JOÃO NO SÃO JERÔNIMO</h3>
                    <p>
                        <strong>Ano da Filmagem:</strong> 2009
                    </p>
                    <p>
                        <strong>Participações:</strong> Catarina, Boanerges, Afonso, Bosco, Livalda, Graça, Isabel, Rebeka, Jonatas, Rodrigo, Rafael, Bruno, Daniel, Tatiana, Mariana. 
                    </p>
                    <p>
                        <strong>Um resumo:</strong> Aproveitando a boa hospitalidade de sempre a família resolve passar o São João do ano de 2009 no sítio São Jerônimo do amigo Boanerges. Momentos felizes registrados e eternizados nessa filmagem. <br></br><br></br>
                        Rodas de conversas, violão, quadrilha e muito mais.
                    </p>
                </div>
            </div>
            <div id='screen'>
                <div id='foto'>
                    <a href="http://www.google.com" target='_blank' >
                        <img src={saojoao2009} alt='teste' id='fotos' />
                    </a>
                </div>
                <div id='texto'>
                    <h3>testando textos</h3>
                </div>
            </div>
            <div id='screen'>
                <div id='foto'>
                    <a href="http://www.google.com" target='_blank' >
                        <img src={saojoao2009} alt='teste' id='fotos' />
                    </a>
                </div>
                <div id='texto'>
                    <h3>testando textos</h3>
                </div>
            </div>
        </div>
    )
}

export default Conteudo;