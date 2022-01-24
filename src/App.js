import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import './App.css';
import Post from './components/pages/Post';
import AddPostForm from './components/pages/AddPostForm';
import EditPostForm from './components/pages/EditPostForm';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/add" element={<AddPostForm />} />
        <Route path="/post/edit/:id" element={<EditPostForm />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
