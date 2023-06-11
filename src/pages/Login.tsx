import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import ThemeSwitcher from '../components/ThemeSwitcher';
import loginImg from '../images/login-img.svg';

/**
 * DISPLAYS THE LOGIN PAGE AND A BUTTON TO LOGIN
 */

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className='container'>
        <img src={loginImg} alt='github user' />
        <button className='btn' onClick={(loginWithRedirect as any)}>
          Log In / Sign Up
        </button>
      </div>
      <ThemeSwitcher />
    </Wrapper>
  );
};
const Wrapper = styled.section`
min-height: 100vh;
display: grid;
place-items: center;
position: relative;
.container {
  width: 90vw;
  max-width: 600px;
  text-align: center;
}
img {
  margin-bottom: 3rem;
}
`;
export default Login;
