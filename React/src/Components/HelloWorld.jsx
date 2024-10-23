import { Component } from "react";

class HelloWorld extends Component {
    saluto = "Hello World!";

    render() {
        return (
            <>
                <h1>{this.saluto}</h1>
            </>
        )
    }
}

export default HelloWorld;