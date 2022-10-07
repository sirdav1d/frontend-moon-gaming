import {
	ButtonPattern,
	GlobalStyle,
} from '../../components/styles';
import { ContainerThanks, LogoThanks } from './styles';
import logo from '../../assets/imagens/logo-moon-gaming.svg';

const Thanks = () => {
	return (
		<>
			<ContainerThanks>
				<LogoThanks
					src={logo}
					alt='logo'
				/>

				<h2>Cadastro Realizado Com Sucesso!</h2>
				<h3>Clique no botão abaixo e faça login!</h3>
				<ButtonPattern href='/login'>ENTRAR</ButtonPattern>
			</ContainerThanks>
			<GlobalStyle />
		</>
	);
};

export default Thanks;
