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
import { Navigate, useNavigate } from 'react-router-dom';
import { AsideContainer } from '../../components/styles';
import { useState } from 'react';
import { RoutePath } from '../../types/routes';
import { AuthService } from '../../services/AuthService';
import { useMutation } from 'react-query';
import { Login as LoginData, LoginResponse } from '../../types/api/login';
import { LocalStorageHelper } from '../../helpers/LocalStorageHelper';
import { LocalStorageKeys } from '../../types/LocalStorageKeys';
import { User } from '../../types/api/user';
import { ErrorResponse } from '../../types/api/error';


function Login() {
	const emailChange = (e: { target: { value: any } }) => {
		const response = e.target.value;
		setEmailValue(response);
	};

	const passChange = (e: { target: { value: any } }) => {
		const response = e.target.value;
		setPassValue(response);
	};

	const [emailValue, setEmailValue] = useState('');
	const [passValue, setPassValue] = useState('');

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
						<ButtonPattern
							href='/'
							type='button'>
							ENTRAR
						</ButtonPattern>
					</ContainerLogin>

					<ButtonRegister href='/register'>CADASTRAR</ButtonRegister>
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
