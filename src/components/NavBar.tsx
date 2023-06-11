import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <Wrapper>
      {isUser && user.picture && <Link to="/"><img src={user.picture} alt={user.name} /> </Link>}
      {isUser && user.name && (<h4>Welcome, <strong>{user.name.toUpperCase()}</strong> </h4>)}
      {isUser ?
        (<button onClick={() => { logout({ returnTo: window.location.origin } as any) }} > logout </button>)
        : (<button onClick={loginWithRedirect as any}>login</button>)
      }
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  // margin-bottom: 4rem;
  background: var(--color-header-bg);
  color: var(--color-header-text);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  justify-items: end;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    border: 1px solid var(--btn-dark);
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-4);
    cursor: pointer;
    transition: var(--transition);
  }
  button:hover{
      color: var(--clr-grey-3);
      border: 1px solid var(--btn-light);
  }
`;

export default Navbar;
