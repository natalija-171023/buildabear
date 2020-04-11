import React, {Component} from 'react';
import {Link} from "react-router-dom";
import BearCard from "../BearCard/bearcard";
import BearRate from "../Opinions/BearRate/BearRate";
import axios from "axios";
import ReactPaginate from 'react-paginate';




class Explore extends Component{
    state = {

        kopcinja: {
            crud: false,
            edit: false,
            rate: true
        }
    }
    componentDidMount() {
        this.props.onExploreClick();
    }



    handlePageClick = (e) => {
        this.props.onExploreCLick(e.selected);
    }

    render() {

        return(
            <div className="container">
                <div className="row d-flex justify-content-around">

                    {this.props.bears.map(bear =>
                        <div className="" key={bear.name}>

                            <BearCard name={bear.name}
                                      animal={bear.animal}
                                      color={bear.color}
                                      size={bear.size}
                                      creator={bear.creator.username}
                                      obleka={bear.obleka}
                                      // addOn={this.handleAdditions}
                                      additions={bear.additions}
                                      kopcinja={this.state.kopcinja}/>

                        </div>
                    )}



                </div>

            </div>
        );
    }

}
export default Explore;

