const title = 'React changed';

const welcome = {
  greeting: 'hey',
  title: 'React'
};

function getTitle(title) {
  return title;
}

function App() {
  return (
    <div>
     <h1>Hello {title}</h1>
     <h2>{welcome.greeting} {welcome.title}</h2>
     <h3>Hello {getTitle("React")}</h3>
     <label htmlFor="search">Search: </label>
     <input id="search" type="text"/>
    </div>
  );
}

export default App;
