import '@coreui/coreui/dist/css/coreui.min.css'
import "./App.css";
import { Route, Switch } from "wouter";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import Footer from './components/Footer';
import Error from './pages/Error';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
    <Nav></Nav>
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/users/:name">
          {(params) => <>Hello, {params.name}!</>}
        </Route>

        {/* Default route in a switch */}
        <Route>{Error}</Route>
        
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
