import {
	ButtonPattern,
	ButtonRegister,
	ContainerGeneral,
	ContainerLogin,
	FormLogin,
	GlobalStyle,
	ImgSectionLogin,
	InputPattern,
	LabelPattern,
	Logo,

	SectionLogin,
} from '../../components/styles';
import logo from '../../assets/imagens/logo-moon-gaming.svg';
import gow4 from '../../assets/imagens/img-gow4.png';

import { AsideContainer } from '../../components/styles';
import { useState } from 'react';
function Login() {
	const emailChange = (e: { target: { value: any } }) => {
		const response = e.target.value;
		setEmailValue(response);
	};

    const passChange = (e: { target: { value: any } }) => {
			const response = e.target.value;
			setPassValue(response);
		};

	const [emailValue, setEmailValue] = useState();
    const [passValue, setPassValue] = useState();
	return (
		<>
		
			<ContainerGeneral>
				<AsideContainer>
					<Logo
						src={logo}
						alt='logo'
					/>
					<ContainerLogin>
						<FormLogin>
							<LabelPattern>Email:</LabelPattern>
							<InputPattern
								value={emailValue}
								onChange={emailChange}
								type='email'
								required></InputPattern>

							<LabelPattern>Senha:</LabelPattern>
							<InputPattern
								value={passValue}
								onChange={passChange}
								autoComplete='off'
								type='password'
								required></InputPattern>
						</FormLogin>
						<ButtonPattern href="/profiles" type='submit'>ENTRAR</ButtonPattern>
					</ContainerLogin>

					<ButtonRegister href='/register' >CADASTRAR</ButtonRegister>
				</AsideContainer>

				<SectionLogin>
					<ImgSectionLogin
						src={gow4}
						alt='Jogo'
					/>
				</SectionLogin>
			</ContainerGeneral>
			<GlobalStyle />
		</>
	);
}

export default Login;
