import { useState } from "react";

const MainContent = ({
    title = '',
    content = () => {},
    initActive = false,
}) => {
    const [active, setActive] = useState(initActive);

    return <div className={`main-content ${active ? 'active' : ''}`} >
        <h4 className="space-mono-regular title" onClick={() => setActive(!active)}>
            {title}
            <span>✖</span>
        </h4>
        <div className={`content-desc`}>
            {content()}
        </div>
    </div>;
}

export default MainContent;