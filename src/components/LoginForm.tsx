import styled from 'styled-components'
import { FiPlus, FiSearch, FiCamera } from 'react-icons/fi'

const LoginForm = () => {
  return (
    <Container>
      <Title>Login - Profile</Title>
      
      <SearchContainer>
        <SearchIcon />
        <SearchInput placeholder="Digite o que você quer procurar..." />
      </SearchContainer>
      
      <PhotoContainer>
        <PhotoPlaceholder>
          <CameraIcon />
          <PhotoText>Adicionar foto</PhotoText>
        </PhotoPlaceholder>
      </PhotoContainer>
      
      <Form>
        <Input placeholder="Digite seu CPF" />
        <Input placeholder="Digite seu RG" />
        <Input placeholder="Digite seu telefone" />
        
        <AddAddressButton>
          <PlusIcon />
          Adicionar endereço
        </AddAddressButton>
      </Form>
    </Container>
  )
}

export default LoginForm

// Estilos com styled-components
const Container = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 600px) {
    margin: 1rem;
    padding: 1.5rem;
  }
`

const Title = styled.h1`
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
`

const SearchIcon = styled(FiSearch)`
  color: #777;
  margin-right: 0.5rem;
`

const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;

  &::placeholder {
    color: #999;
  }
`

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`

const PhotoPlaceholder = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #e0e0e0;
  }
`

const CameraIcon = styled(FiCamera)`
  color: #666;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`

const PhotoText = styled.span`
  color: #666;
  font-size: 0.9rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border 0.2s;

  &:focus {
    border-color: #4a90e2;
    outline: none;
  }

  &::placeholder {
    color: #999;
  }
`

const AddAddressButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: #f5f5f5;
  border: none;
  border-radius: 8px;
  color: #666;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #e0e0e0;
  }
`

const PlusIcon = styled(FiPlus)`
  margin-right: 0.5rem;
`