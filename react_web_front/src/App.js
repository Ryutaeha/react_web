import Header from "./component/common/Header";
import Footer from "./component/common/Footer";
import { Routes, Route } from "react-router-dom";
import Join from "./component/member/Join";

function App() {
  return (
    <div className="wrap">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/join" element={<Join />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
