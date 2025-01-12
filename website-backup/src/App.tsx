import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CreativityStudy from './pages/CreativityStudy';
import LiteraryDigest from './pages/LiteraryDigest';
import PermutationTests from './pages/PermutationTests';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="creativity-study" element={<CreativityStudy />} />
          <Route path="literary-digest" element={<LiteraryDigest />} />
          <Route path="permutation-tests" element={<PermutationTests />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
