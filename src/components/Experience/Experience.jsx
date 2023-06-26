
function Experience(props) {
    const title = props.title
    const subtitle = props.subtitle
    const description = props.description

    return (
        <div className="pt-4">
            <span className="flex items-end space-x-2">
                <h2 className="font-bebas text-2xl">{title}</h2>
                <h2 className="font-josefin">{subtitle}</h2>
            </span>
            {description}
        </div>
    )
}

export default Experience