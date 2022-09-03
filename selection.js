alert("test");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, world!</h1>);

//Create Card Object
class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            suit: null,
            value: null,
        };
    }
    render(){
        if (this.state.suit == null){
            return (
                <>
                <button 
                    onClick={() => this.setState({suit: "heart"})}
                >
                    Heart Image
                </button>
                <button 
                    onClick={() => this.setState({suit: "spade"})}
                >
                    Spades Image
                </button>
                <button 
                    onClick={() => this.setState({suit: "diamond"})}
                >
                    Diamonds Image
                </button>
                <button 
                    onClick={() => this.setState({suit: "clove"})}
                >
                    Cloves Image
                </button>

                </>

            )
        }
        return(
            <>
            <input
            onChange={event => this.state.value = event.target.value} />
            <div>Test</div>
            </>
        )
    }
}
//Select card Value

//Select card Suit

//Add Card to List of Current Cards