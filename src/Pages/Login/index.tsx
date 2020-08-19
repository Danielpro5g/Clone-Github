import React, {useState} from 'react';
import { useNavigate } from  'react-router-dom'

import { 
   Container,
   HeaderSign,
   IconGithub,
   WrapperForm,
} from './styles';

const Login: React.FC = () => {

  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate('/danielpro5g' + search.toLowerCase().trim());
  }

  return(
    <Container>
      <HeaderSign>
        <IconGithub/>
        <span>Sign in to GitHub</span>
      </HeaderSign>
      <WrapperForm>
        <form onSubmit={handleSubmit}>
          <span>Username or email address</span>
          <input type="text" />
          <span>Pasword</span>
          <input type="text"/>
          <button>sign in</button>
        </form>
      </WrapperForm>

    </Container>
  );
}

export default Login;