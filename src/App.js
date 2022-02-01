import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About/About';
import Home from './components/pages/Home/Home';
import Categories from './components/pages/Categories/Categories';
import Post from './components/pages/Post/Post';
import PostsByCategory from './components/pages/PostsByCategory/PostsByCategory';
import PostAdd from './components/pages/PostAdd/PostAdd';
import PostEdit from './components/pages/PostEdit/PostEdit';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/add" element={<PostAdd />} />
          <Route path="/post/edit/:id" element={<PostEdit />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories/:category" element={<PostsByCategory />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
