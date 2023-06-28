
function Experience(props) {
    const title = props.title
    const subtitle = props.subtitle
    const description = props.description

    return (
        <div className="pt-4">
            <div className="flex items-baseline space-x-2">
                <h2 className="font-title text-2xl">{title}</h2>
                <h2 className="font-body">{subtitle}</h2>
            </div>
            {description}
        </div>
    )
}

export default Experience