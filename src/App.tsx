import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./pages/Layout";

import "./App.css";
import { Home } from "./pages/Home/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Layout>
                    <Routes>
                        {/* <Route path="/blog/:postName" element={<DisplayBlogPost />}></Route>
                        <Route path="/vlog/:postName" element={<DisplayVlogPost />}></Route>
                        <Route path="/blog" element={<BlogsAndVlogs />}></Route> */}
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default App;
