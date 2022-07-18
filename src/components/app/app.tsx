import '../styles/common/app.scss';
import { useAuth } from '../../hooks';
import { AuthContext } from '../../context';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../../app-routes';
import { Header } from '../header';
import { Footer } from '../footer';

function App() {
  const { isLogin, login, logout } = useAuth();
  const isAuthenticated = isLogin;
  const routes = AppRoutes(isAuthenticated);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      <BrowserRouter>
        <Header />
        {routes}
      </BrowserRouter>
      <Footer />
    </AuthContext.Provider>
  );
}

export { App };