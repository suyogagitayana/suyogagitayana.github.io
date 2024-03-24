import { useState } from "react";

const MainContent = ({
    title = '',
    content = () => {},
    initActive = false,
    customStyles = {}
}) => {
    const [active, setActive] = useState(initActive);

    return <div className="main-content">
        <h4 className="space-mono-regular title">
            {title}
            {active ? <span className="toggle" onClick={() => setActive(false)}>✖</span> : <span className="toggle" onClick={() => setActive(true)}>...</span>}
        </h4>
        <div className={`${active ? 'active' : ''} content-desc`}>
            {content()}
        </div>
    </div>;
}

export default MainContent;