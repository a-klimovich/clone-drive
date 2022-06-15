// Antd
import { Layout } from 'antd';

// Components
import Header from './components/Header';
import SideMenu from './components/Sider';

const { Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <Header />

      <Layout>
        <SideMenu />

        <Content>
          3
        </Content>
      </Layout>

      <Footer>
        4
      </Footer>
    </Layout>
  );
}

export default App;
