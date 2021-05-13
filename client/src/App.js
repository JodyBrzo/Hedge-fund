// import logo from './logo.svg';
import API from './utils/API'
import { ClientProvider } from "./utils/ClientState";
import { ContractorProvider } from "./utils/ClientState";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Pages/Signup";
import ContractorSignup from "./Pages/ContractorSignup";
import ContractorDashboard from "./Pages/ContractorDashboard";
import SignIn from "./Pages/SignIn";
// import ContractorSignIn from "./Pages/ContractorSignIn";
import ClientMain from "./Pages/ClientMain";
import Header from './components/Header/Header'
import Footer from './components/Footer'
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <ClientProvider>   
        <Header/>
        <Wrapper>
        <Switch>
        <Route exact path={["/"]} >
             <SignIn/>
        </Route>
        <Route exact path={["/SignUp"]} >
             <SignUp/>
        </Route>
        <Route exact path={["/ContractorSignup"]} >
             <ContractorSignup/>
        </Route>
        <Route exact path={["/ContractorDashboard"]} >
             <ContractorDashboard/>
        </Route>
        {/* <Route exact path={["/ContractorSignIn"]} >
             <ContractorSignIn/>
        </Route> */}
        
        <Route exact path={["/ClientMain"]} >
             <ClientMain/>
        </Route>
        
        </Switch>
        </Wrapper>
        <Footer/>
        </ClientProvider>
      </div>
    </Router>
  );
}

export default App;
