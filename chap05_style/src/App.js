
import A01Style from './components/A01Style'
import A02Style from './components/A02StyleModule'
import A03Classnames from './components/A03Classnames'
import A04StyledComponent from './components/A04StyledComponent'

function App() {
  return (
    <div className="App">
      <h1>Chap05 Style</h1>

      {/* vite에서는 절대패스로 시작해야 한다. */}
      <img src="images/machu.jpg" alt="machu" />
      <A04StyledComponent></A04StyledComponent>
      <A03Classnames></A03Classnames>
      <A02Style></A02Style>
      <A01Style></A01Style>
    </div>
  );
}

export default App;
