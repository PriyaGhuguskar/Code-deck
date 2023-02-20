
import { Suspense } from 'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import routes from './Pages/Routes';

const Loader=()=>{
  <div>Loading...</div>
}

function App() {
  return <Suspense fallback={Loader()}>
    
      <>
      <Router>
        <Routes>
          <>
          {routes.map((rout)=>{
           return <Route path={rout.path} element={rout.component} />
           })}
          </>
        </Routes>
      </Router>
      </>
    
    </Suspense>
    }
 
    
 


export default App;
