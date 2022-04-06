import './App.css';

const Task = (value, ) => {
  return (
    <div>
      <li>{value}</li>
    </div>
  );
}

function App() {
  const arrTask = ['Dentista', 'Salão de beleza', 'Manicure', 'Podologia'];
  return (
    <div className="App">
      <p>{Task('Trybe')}</p>
      <ul>{ arrTask.map( (task) => <li>{task}</li>)}</ul>
    </div>
  );
}

export default App;
