import { CirclePlus } from "lucide-react";
import "./AddTodo.css";

function AddTodo() {
  return (
    <div className="add-todo" style={{direction: "rtl"}}>
      <div className="add-todo-top">
        <CirclePlus />
        <span>افزودن کار جدید </span>
      </div>

      <div className="add-todo-bottom">
        <input className="input" type="text" placeholder="عنوان کار را وارد کنید..."/>
        <button className="add-btn">افزودن</button>
      </div>
    </div>
  );
}

export default AddTodo;
