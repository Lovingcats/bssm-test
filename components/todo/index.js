import React from 'react'
import { useTodoContext } from '../../context/todoContext';
import styles from '../../styles/Home.module.css'

export const Todo = (props) => {
    const { removeTodo, changeTodoStatus } = useTodoContext();
    const {
        id,
        title,
        description,
        createdAt,
        status,
    } = props;


    return (
        <div className={styles.todo} style={{ backgroundColor: status === "success" ? "rgb(97, 211, 123)" : "#eedada" }} id={id}>
            <div >
                <h3>{title}</h3>
                <span>{createdAt}</span>
            </div>
            <div>
                <desc>{description}</desc>
                <span>{status}</span>
            </div>
            <div>
                <button style={{ backgroundColor: "rgb(97, 211, 123)" }} onClick={() => changeTodoStatus(id, "success")}>성공</button>
                <button style={{ backgroundColor: "rgb(215, 85, 85)" }} onClick={() => removeTodo(id)}>삭제</button>
            </div>
        </div>
    )
}
