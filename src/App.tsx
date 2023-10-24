import './App.css'


function App() {
  return (
    <div className="bambam">
      <section className='bimbim'>
        <div className='card'>
          <img src={require('./assets/avatar.png')} alt="Avatar" />
          <p className='name'>Gabriel Munck</p>
          <label className='func'> {'< Web-Developer Junior >'} </label>
          <p className='intro'>Welcome to my page!!!Let me show you a little bit of myself... </p>
          <button className='skills'> Skills </button>
        </div>
      </section>



      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Montserrat+Alternates:wght@100;300;500;700&display=swap" rel="stylesheet"/>
    </div>

    
  );
}

export default App;
