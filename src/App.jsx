import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Fees from "@/pages/Fees";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import ServiceDetail from "@/pages/ServiceDetail";
import NotFound from "@/pages/NotFound";

const pages = { Home, About, Services, Fees, FAQ, Contact, Blog, BlogPost };

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout currentPageName="Home">
        <Routes>
          <Route path="/" element={<Home />} />
          {Object.entries(pages).map(([name, Page]) => (
            <Route key={name} path={`/${name}`} element={<Page />} />
          ))}
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
