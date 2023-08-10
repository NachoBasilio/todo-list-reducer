import useTodo from "../Hooks/useTodo"
import TodoList from "./TodoList"
import TodoAdd from "./TodoAdd"



export default function TodoApp() {
    const {todos, allTodos, pendingTodos,handlerTodos, handlerDelete, handleDoubleClick} = useTodo()
    console.log(todos, allTodos, pendingTodos)
    return (
    <>
        <h1>
            TodoApp: {allTodos} <small>pendientes: {pendingTodos}</small>
        </h1>
        <hr />
        
        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} handleDoubleClick={handleDoubleClick} handlerDelete={handlerDelete} />
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd handlerTodos={handlerTodos} />
            </div>
        </div>

    </>
  )
}
