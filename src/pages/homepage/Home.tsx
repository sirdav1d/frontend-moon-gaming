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
import { CgProfile } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';

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
							<ButtonHomeHeader>
								<MdFavoriteBorder
									size={25}
									color={'#05F2E7'}
								/>
							</ButtonHomeHeader>
						</li>
						<li>
							<ButtonHomeHeader href='/profiles'>
								<CgProfile
									size={25}
									color={'#05F2E7'}
								/>
							</ButtonHomeHeader>
						</li>
						<li>
							<ButtonHomeHeader>
								<FiSettings
									size={25}
									color={'#05F2E7'}
								/>
							</ButtonHomeHeader>
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
