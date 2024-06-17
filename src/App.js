import React from 'react';
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'
import { Provider } from 'react-redux';
import {store} from './App/store'

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
        <h1 className="text-4xl font-bold mt-8">Todo List Redux Toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
