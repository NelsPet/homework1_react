

export const Head = (props) =>{
    return (
        <div style={{display:props?.display, justifyContent:props?.justifyContent, color:props?.color}}>
            <div className="header_logo">
                <h1>My Website</h1>
            </div>
        </div>
    );
} 