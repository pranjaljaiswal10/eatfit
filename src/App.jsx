import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css'



const AppLayout=()=>{
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}


function App() {
  return(
<AppLayout/>
  )
}

export default App;
