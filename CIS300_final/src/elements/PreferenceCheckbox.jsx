const PreferenceCheckbox = (props) => {
    return <>
        <label htmlFor={props.id} className={"preferenceCheckbox"}>
            <input type={"checkbox"} id={props.id} name={props.id} value={"Preferred"} className={"preferenceCheckbox"}/>
            {props.label}
        </label><br/>
    </>
}

export default PreferenceCheckbox