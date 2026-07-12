import { List, Torus } from "lucide-react";
import { Trash } from "lucide-react";
import "./work-list.css";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../server/constants";

const getData = async () => {
  const data = await fetch(`${BASE_URL}/todo`);
  const res = await data.json();
  return res;
};
const deleteData = async (id) => {
  const data = await fetch(`${BASE_URL}/todo/${id}`, {
    method: "DELETE",
  });
};
export const Worklist = (props) => {
  const [toDos, setToDOs] = useState([]);
const [loading,setLoading]= useState(false);

  useEffect(() => {
    dataHandler();
  }, [props.isSubmitting]);

  const dataHandler = async () => {
    setLoading(true)
    getData().then((res) => {
      setToDOs(res);
    }).finally(()=>setLoading(false));
  };

  const deleteHandler = (id) => {
    deleteData(id).then(()=> dataHandler());
  };

  return (
    <div className="workList">
      <span className="workList-title">
        <List />
        <p> لیست کارها</p>
      </span>

      {loading? <span>loading </span>: toDos?.map((work) => {
        return (
          <div key={work.id} className="work-cart-container">
            {/* <p>{work.id}</p> */}
            <input className="work-cart-check" type="checkbox"></input>
            <div className="work-cart">
              <div className="work-cart-text">
                <p className="work-cart-title">{work.title}</p>
                <p>
                  {work.status ? (
                    <p className="status-done status">انجام شده</p>
                  ) : (
                    <p className="status-doing status">در حال انجام</p>
                  )}
                </p>
              </div>
              <span
                onClick={() => {
                  deleteHandler(work.id);
                }}
                className="cart-trashIcon"
              >
                <Trash style={{ color: "red" }} />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
