import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Top from './Top';
import Header from './Header';
import Detail from './Detail';
import './App.css'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Top />}/>
      <Route path="/detail/:id" element={<Detail />}/>
    </>
  )
)


const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={routes} />
    </>
  )
}

export default App
