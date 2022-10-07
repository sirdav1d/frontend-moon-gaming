import {
	ButtonHomeHeader,
	ContainerHome,
	Footer,
	GlobalStyle,
	Header,
	HomeContent,
	InputHome,
} from '../../components/styles';
import logo from '../../assets/imagens/logo-moon-gaming.svg';
import CardList from '../../components/CardList';
import { LogoHome } from './styles';


function App() {
	

	return (
		<>
			<ContainerHome>
				<Header>
					<LogoHome
						src={logo}
						alt='logo'
					/>
					<ul>
						<li>
							<ButtonHomeHeader>Jogos Favoritos</ButtonHomeHeader>
						</li>
						<li>
							<ButtonHomeHeader>Configurações</ButtonHomeHeader>
						</li>
					</ul>
				</Header>
				<HomeContent>
					<CardList />
				</HomeContent>
				<Footer>
					<p>Desenvolvido por David D. Dos Santos &copy;</p>
				</Footer>
			</ContainerHome>
			<GlobalStyle />
		</>
	);
}

export default App;
