import './App.css'

const todoList = [
  {
    id: 1,
    title: 'Set up project'
  },
  {
    id: 2,
    title: 'Complete assignment'
  },
  {
    id: 3,
    title: 'Submit assignment'
  }
]

function App() {
  return (
    <ul>
      {
        todoList.map(function(item) {
          return <li key = {item.id}>{item.title}</li>
        })
      }
    </ul>
  )
}

export default App
