import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {   
      currentPage: this.props.currentPage,
      pageCount: 0
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    this.props.currentPageHandler(selectedPage);
  };

  componentDidMount() {
   this.setState({pageCount:this.props.totalPages})
  }
  render() {
    return (
      <div>        
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}
export default Pagination;
