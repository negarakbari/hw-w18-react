import { Funnel } from "lucide-react";
import "./Filter-status.css";

function FilterStatus({ filterStatus, setFilterStatus }) {
    return (
        <div className="filter-container">
            <div className="filter-header">
                <span><Funnel color="#7c3aed" strokeWidth={1.5} /></span>
                <p className="filter-header-text">فیلترها</p>
            </div>

            <div className="filter-btns-container">
                <button onClick={() => setFilterStatus("all")} className="filter-all-btn filter-btn">همه</button>
                <button onClick={() => setFilterStatus("done")} className="filter-done-btn filter-btn">تکمیل شده</button>
                <button onClick={() => setFilterStatus("doing")} className="filter-doing-btn filter-btn">در حال انجام</button>
            </div>
        </div>
    )
}
export default FilterStatus

