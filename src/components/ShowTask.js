export const ShowTask = ({tasklist, setTasklist,task,settask}) => {
 

  const handleDelete = (id) => {
    const updatedTasklist = tasklist.filter((todo) => todo.id !== id);
    setTasklist(updatedTasklist);
  }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button onClick={()=> setTasklist([])} className="clearAll" >Clear All</button>
      </div>
      <ul>
        {tasklist.map((todo) => (
          <li key={todo.div}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i className="bi bi-pencil-square"></i>
            <i onClick={()=> handleDelete(todo.id)}className="bi bi-trash"></i>
          </li>
        ))}
      </ul>
    </section>
  )
}

