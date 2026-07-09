import { NotebookText } from 'lucide-react';
import { Sun } from 'lucide-react';
import "./header.css";
function Header() {

    return (
        <header>
            <div className="header">
                <span className="header-icon"><NotebookText /> <span>مدیریت کارت ها</span></span>
                <span className="header-status">
                    <span className="status-icon"><Sun /> <span>حالت روشن</span></span>
                </span>
            </div>
        </header>
    )
}
export default Header;
