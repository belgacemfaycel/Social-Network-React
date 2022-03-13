
import '../styles/App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import Header from './public/Header'; 
 import Footer from './public/Footer'
 import Public from './public/public.component';

function App() {
  return (
    <div className="App">
			<Header>
				<h1 className='lmj-title'>Social Network</h1>
			</Header>
      <div>
      <Public />

      </div>

      <Footer />

    </div>

  );
}

export default App;
