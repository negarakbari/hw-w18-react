import "./Filter-status.css";

function FilterStatus({ filterStatus, setFilterStatus }) {
    return (
        <div className="filter-container">
            <div>
                <p>فیلترها</p>
            </div>

            <div className="filter-btns">
                <button onClick={() => setFilterStatus("all")} className="filter-all-btn">همه</button>
                <button onClick={() => setFilterStatus("done")} className="filter-done-btn">تکمیل شده</button>
                <button onClick={() => setFilterStatus("doing")} className="filter-doing-btn">در حال انجام</button>
            </div>
        </div>
    )
}
export default FilterStatus

