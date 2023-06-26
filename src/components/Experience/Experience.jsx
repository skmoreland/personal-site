
function Experience(props) {
    const company = props.company
    const title = props.title
    const description = props.description

    return (
        <div>
            <span className="flex items-end space-x-2">
                <h2 className="font-bebas text-2xl">{company}</h2>
                <h2 className="font-josefin">{title}</h2>
            </span>
            {description}
        </div>
    )
}

export default Experience