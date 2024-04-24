import React, {Component, Fragment} from "react";
import "./Product.css";
import CardProduct from "../CardProduct/CardProduct";

class Product extends Component {
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <Fragment>
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://picsum.photos/id/6/300/300" alt="image product"/>
                    </div>
                    <div className="troly">
                        <p>Count: <span>{this.state.order}</span></p>
                    </div>
                    <CardProduct onCounterChange={(value) => this.handleCounterChange(value)}/>
                </div>
            </Fragment>
        )
    }
}

export default Product;
