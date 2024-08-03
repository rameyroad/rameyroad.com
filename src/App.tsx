import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./pages/Layout";

import { Home } from "./pages/Home/Home";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { ProjectDisplay } from "./pages/Portfolio/ProjectDisplay";
import { Resume } from "./pages/Resume/Resume";
import { Education } from "./pages/Education/Education";
import { Images } from "./pages/Images/Images";

import "./App.scss";

export const contentRoot = "https://rameyroadeus01.blob.core.windows.net/rameyroad-com/content";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/portfolio/:projName" element={<ProjectDisplay />}></Route>
                        <Route path="/portfolio" element={<Portfolio />}></Route>
                        <Route path="/resume/:detailId" element={<Resume />}></Route>
                        <Route path="/resume" element={<Resume />}></Route>
                        <Route path="/education" element={<Education />}></Route>
                        <Route path="/images/:imageId" element={<Images />}></Route>
                        <Route path="/images" element={<Images />}></Route>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default App;
