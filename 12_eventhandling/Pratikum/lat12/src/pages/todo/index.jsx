import React, { Component } from 'react';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      newTodo: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = (e) => {
    if (e.key === 'Enter') {
      const { newTodo, todoList } = this.state;
      if (newTodo.trim() !== '') {
        const newTodoItem = {
          id: Date.now(),
          title: newTodo,
          completed: false
        };

        this.setState({
          todoList: [...todoList, newTodoItem],
          newTodo: ''
        });
      } else {
        alert('Anda harus mengisi inputan terlebih dahulu');
      }
    }
  };

  handleToggleComplete = (id) => {
    const { todoList } = this.state;
    const updatedTodoList = todoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    this.setState({ todoList: updatedTodoList });
  };

  handleDeleteTodo = (id) => {
    const { todoList } = this.state;
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    this.setState({ todoList: updatedTodoList });
  };

  componentDidMount() {
    // Jalankan alur aplikasi di sini
    console.log('Aplikasi telah dimuat');
  }

  componentDidUpdate(prevProps, prevState) {
    // Jalankan alur aplikasi di sini saat state berubah
    if (prevState.todoList !== this.state.todoList) {
      console.log('Daftar pekerjaan diperbarui');
    }
  }

  componentWillUnmount() {
    // Bersihkan atau hentikan alur aplikasi di sini
    console.log('Aplikasi akan ditutup');
  }

  render() {
    const { todoList, newTodo } = this.state;

    return (
      <div className="todo-container">
        <div className="input-container">
          <label htmlFor="newTodo" className="input-label">
            Tambahkan pekerjaan
          </label>
          <div className="input-wrapper">
            <input
              type="text"
              id="newTodo"
              className="input-field"
              placeholder="Silahkan masukkan & enter..."
              value={newTodo}
              onChange={this.handleInputChange}
              onKeyPress={this.handleAddTodo}
            />
            <div className="input-highlight" />
            <div className="input-bar" />
          </div>
        </div>
        <div className="todo-list">
          {todoList.length > 0 ? (
            todoList.map(todo => (
              <div className="todo-item" key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => this.handleToggleComplete(todo.id)}
                />
                <span className={todo.completed ? 'completed' : ''}>{todo.title}</span>
                <button onClick={() => this.handleDeleteTodo(todo.id)}>Hapus</button>
              </div>
            ))
          ) : (
            <p>Tidak ada pekerjaan dalam daftar</p>
          )}
        </div>
      </div>
    );
  }
}

export default TodoList;
