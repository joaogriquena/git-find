import { Header } from '../../components/Header'
import background from '../../assets/background.png'
import './styles.css'

function App() {
    return (
        <div className="App">
            <Header />
            <div className='conteudo'>
                <img src={background} className='background' alt='background app' />
                <div className='info'>
                    <div>
                        <input name='usuario' placeholder='@username' />
                        <button>Buscas</button>
                    </div>
                    <div className='perfil'>
                        <img src='https://avatars.githubusercontent.com/u/112562688?v=4' className='profile' alt='perfil' />
                        <div>
                            <h3>Joao Guilherme</h3>
                            <span>@joaogriquena</span>
                            <p>Descrição</p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default App;
