import "../App.css"

function OptionsText(props) {
    var i = 0
    var count = 0
    while (i !== props.userInput.length) {
        if (props.text[count] === props.userInput[i]) {
            count = count + 1
        }
        i = i + 1
    }
    var highlighted = props.text.slice(0, count)
    var unhighlighted = props.text.slice(count, props.text.length)

    return (
        <div>
            <em className="highlight" >{highlighted}</em>{unhighlighted}
        </div>
    );
}

export default OptionsText;

