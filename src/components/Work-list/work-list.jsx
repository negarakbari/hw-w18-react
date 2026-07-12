import { List, Trash } from "lucide-react";
import "./work-list.css";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../server/constants";

const getData = async () => {
  const data = await fetch(`${BASE_URL}/todo`);
  const res = await data.json();
  return res;
};

const deleteData = async (id) => {
  await fetch(`${BASE_URL}/todo/${id}`, {
    method: "DELETE",
  });
};


const updateStatus = async (id, status) => {
  const data = await fetch(`${BASE_URL}/todo/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ status }),
  });
  const res = await data.json();
  return res;
};

export const Worklist = (props) => {
  const [toDos, setToDOs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dataHandler();
  }, [props.isSubmitting]);

  const dataHandler = async () => {
    setLoading(true);
    getData()
      .then((res) => {
        setToDOs(res);
      })
      .finally(() => setLoading(false));
  };

  const deleteHandler = (id) => {
    deleteData(id).then(() => dataHandler());
  };

  const checkHandler = (id, currentStatus) => {
    setToDOs((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: !currentStatus } : item
      )
    );

    updateStatus(id, !currentStatus).catch(() => {
      dataHandler();
    });
  };

  return (
    <div className="workList">
      <span className="workList-title">
        <List className="workList-icon" size={28} color="#7c3aed" />
        <p> لیست کارها</p>
      </span>
      {loading ? (
        <span className="loading-text">در حال بارگذاری...</span>
      ) : (
        toDos?.map((work) => {
          return (
            <div key={work.id} className="work-cart-container">
              <input
                className="work-cart-check"
                type="checkbox"
                checked={work.status}
                onChange={() => checkHandler(work.id, work.status)}
              />
              <div className="work-cart">
                <div className="work-cart-text">
                  <p className={`work-cart-title ${work.status ? "done" : ""}`}>
                    {work.title}
                  </p>
                  <p>
                    {work.status ? (
                      <p className="status-done status">انجام شده</p>
                    ) : (
                      <p className="status-doing status">در حال انجام</p>
                    )}
                  </p>
                </div>
                <span
                  onClick={() => deleteHandler(work.id)}
                  className="cart-trashIcon"
                >
                  <Trash style={{ color: "red" }} />
                </span>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};