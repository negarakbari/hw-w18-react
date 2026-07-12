import { CirclePlus } from "lucide-react";
import "./AddTodo.css";
import { useState } from "react";
import { BASE_URL } from "../../server/constants";

function AddTodo({ setIsSubmitting, isSubmitting }) {

  const [formValue, setFormValue] = useState({
    title: "",
    checked: false,
  })

  const handelSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(`${BASE_URL}/todo`,
        {
          method: "POST",
          header: { "Contect-type": "application/json" },
          body: JSON.stringify(formValue)
        }
      )
      const data = await response.json()
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="add-todo" style={{ direction: "rtl" }}>
      <div className="add-todo-top">
        <CirclePlus className="add-todo-icon" size={28} color="#7c3aed" />
        <span>افزودن کار جدید </span>
      </div>

      <div className="add-todo-bottom">
        <form onSubmit={handelSubmit}>
          <input
            className="input"
            type="text"
            placeholder="عنوان کار را وارد کنید..."
            value={formValue.title}
            onChange={(e) => setFormValue((perv) => ({ ...perv, title: e.target.value }))}
          />
          <button type="submit"
            disabled={isSubmitting}
            className="add-btn">{isSubmitting ? "در حال افزودن" : "افزودن"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;
