import React, { useState } from 'react'
import styles from './todo.module.css'
function Todo() {
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([]);
    function changeData(e) {
        setInput(e.target.value);
    }
    function addTodo() {
        setTodos([...todos, { text: input, flag: false }]);
        setInput("")
    }
    function makeEnd(index) {
        todos[index].flag = true; // over ride memory
        setTodos([...todos]); //render  

    }
    function remove(index) {
        var x = todos.splice(index, 1);
        console.log(x)
        setTodos([...todos]);
    }
    return (
        <>
            <div id="myDIV" className={styles.header}>
                <h2 style={{ margin: 5 }}>My To Do List</h2>
                <input type="text" id="myInput" value={input} placeholder="Title..." onChange={changeData} />
                <span onClick={addTodo} className={styles.addBtn}>
                    Add
                </span>
            </div>
            <ul >
                {
                    todos.map((item, index) => <li className={item.flag ? styles.checked : ''} onClick={() => makeEnd(index)} key={index}>{item.text}< span onClick={() => remove(index)} className={styles.close}>x</span></li>)
                }
            </ul>
        </>

    )
}

export default Todo