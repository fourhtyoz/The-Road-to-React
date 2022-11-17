// import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    point: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
]

const welcome = {
  greeting: 'Hey',
  title: 'React',
}

function getName(name) {
  return name;
}

const a = ['a', 'b', 'c'];
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function App() {
  return (
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>
      <h2>{getName('Boris')}</h2>
      <p>{a.map((x) => <h3>{x}</h3>)}</p>
      <h1>My Hacker Stories</h1>
      <label htmlFor='search'>Search: </label>
      <input id="search" type="text" />
      <hr/>
      {list.map(function(item) {
          return <div>{item.title}</div>
      })}
      <hr/>
      {list.map(function(item) {
        return (
          <div key={item.objectID}>
            {item.title}
          </div>
        );
      })}
      <hr/>
      {list.map(function(item) {
        return (
          <div key={item.objectID}>
            <span><a href={item.url}>{item.title}</a></span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.point}</span>
          </div>
        )
      })}
      <hr/>
      {b.reduce(function(previous, current) {
          return (
            <div>
              <span>{previous + current}</span>
            </div>
          )
      }
      )}
    </div>
  );
}

export default App;
