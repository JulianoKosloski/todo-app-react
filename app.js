class Boat extends React.Component {
    render() {
        return("");

        
    }
}

class Square extends React.Component {
    render() {
        return("");

        
    }
}

class Board extends React.Component {
    render() {
        return("");


    }
}
// can use this as <Game name="Battleship"/>
class Game extends React.Component {
    render() { //returns a description (a React element) of what should be shown, and React takes this description and displays a result
        return (
                //this was written in JSX, which simplifies repetitive calls such as React.createElement('h1', ...) and so on
            <div class="myTitle">
                <h1>This is a {this.props.name} game</h1>  
                <h2>Choose your side:</h2>
            </div>

        );

        
    }
}