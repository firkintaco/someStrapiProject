import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
import { useGlobalContext } from "./context";

const App = () => {
  const { isSidebarOpen } = useGlobalContext();
  // console.log(isSidebarOpen);
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  );
};
export default App;
