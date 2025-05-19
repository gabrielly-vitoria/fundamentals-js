// Importa o componente do formulário de login
import LoginForm from '@/src/features/Auth/components/LoginForm';

// Cria e exporta a página principal (/) que só retorna o componente de login
export default function LoginPage() {
  return <LoginForm />;
}
