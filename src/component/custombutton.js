export const CustomButton = (props) => {
    return (
        <div style={{display:props?.display, justifyContent:props?.justifyContent}}>
            <button style={{background:props?.background, borderRadius:props?.borderRadius, height:props?.height, marginTop:props?.marginTop}}>{props?.text}</button>
        </div>
    )
}