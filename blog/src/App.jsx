import { useState } from 'react';
import Header from './components/Header/Header';
import BlogList from './components/BlogList/BlogList';
import Footer from './components/Footer/Footer';
import initialPosts from './data/posts';
import {Routes, Route} from 'react-router';
import BlogPostsPage from './pages/BlogPostsPage';
import ContactPage from './pages/ContactPage';
import IndividualPostPage from './pages/IndividualPostPage';

function App() {
  const [posts] = useState(initialPosts);

  return (
    <>
      <Header title="My Blog" subtitle="Notes on web development" />
      <main className="main">
        <Routes>
            <Route path="/" element={<BlogPostsPage />}/> 
            <Route path="/contact" element={<ContactPage />}/>
            <Route path="/posts/:id" element={<IndividualPostPage />}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;