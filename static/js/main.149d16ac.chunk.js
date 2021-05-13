(this["webpackJsonpshoppies-omdb-api"]=this["webpackJsonpshoppies-omdb-api"]||[]).push([[0],{14:function(e,t,a){e.exports=a(27)},19:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(11),o=a.n(r),i=(a(19),a(8)),c=a(5),l=a.n(c),m=a(7),u=a(1),p=a(2),v=a(4),d=a(3),h=a(12),f=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={movieName:"",isInputCorrect:!1},e.formChangeHandler=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.formSubmitHandler=function(t){t.preventDefault(),e.props.onSearcMovieName(e.state.movieName)},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.setState({isInputCorrect:!0})}},{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.formSubmitHandler},s.a.createElement("label",null,"Movie Title:"),s.a.createElement("input",{type:"text",name:"movieName",onChange:this.formChangeHandler,placeholder:"Movie name..."}),s.a.createElement("input",{type:"submit",value:"Search"}),"False"!==this.props.serverResponse.Response&&this.state.isInputCorrect?null:s.a.createElement("div",null,s.a.createElement("p",null,"OMDB Response: ",this.props.serverResponse.Error," Try againe!")))}}]),a}(n.Component),b=a(6),N=a(13),g=a.n(N),k=(a(26),function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handlePageClick=function(e){var t=e.selected;n.props.currentPageHandler(t)},n.state={currentPage:n.props.currentPage,pageCount:0},n.handlePageClick=n.handlePageClick.bind(Object(b.a)(n)),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.setState({pageCount:this.props.totalPages})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(g.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:this.state.pageCount,marginPagesDisplayed:1,pageRangeDisplayed:3,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))}}]),a}(n.Component)),E=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).currentPageHandler=function(e){n.setState({currentPage:e},(function(){n.fetchReqest()}))},n.clickHandler=function(e){n.props.movieNominationshandler(e),n.setState({disabledButtons:n.props.disabledButtons})},n.omdbUrl=function(){return n.state.basicUrl.concat(n.state.apikey).concat("&type=movie&s=").concat(n.props.movieName).concat("&page=").concat(n.state.currentPage+1)},n.fetchReqest=function(){fetch(n.omdbUrl(),[]).then((function(e){return e.json()})).then((function(e){"true"===e.Response.toLowerCase()?(n.setState({movieList:e.Search}),n.props.serverResponseHandler(e),n.setState({totalPages:Math.ceil(n.props.serverResponse.totalResults/n.state.resultPerPage)})):(n.setState({movieList:[]}),n.setState({currentPage:0}),n.setState({totalPages:0}),n.props.serverResponseHandler(e))}),(function(e){n.setState({error:e})}))},n.state={movieList:[],currentPage:0,totalPages:0,resultPerPage:10,disabledButtons:[],apikey:"7535d36f",basicUrl:"https://www.omdbapi.com/?apikey="},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(e){this.fetchReqest()}},{key:"componentDidUpdate",value:function(e){this.props.movieName!==e.movieName&&this.fetchReqest()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"drrr column result"},s.a.createElement("h2",null,'Results for "',this.props.movieName,'"'),s.a.createElement("div",{className:"result list"},s.a.createElement("ul",null,this.state.movieList.map((function(t,a){return s.a.createElement("li",{key:a},s.a.createElement("div",{className:"movie-img",style:{backgroundImage:"url(".concat(t.Poster,")")}}),s.a.createElement("p",{className:"movie-dscr"},t.Title," ",t.Year),s.a.createElement("button",{onClick:function(){e.clickHandler(t)},disabled:e.props.disabledButtons.includes(t.imdbID)},"Nominate"))})))),0!==this.state.totalPages&&s.a.createElement(k,{currentPage:this.state.currentPage,currentPageHandler:this.currentPageHandler,totalPages:this.state.totalPages}))}}]),a}(n.Component),R=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).clickHandler=function(e){n.props.movieRemoveNominhandler(e)},n.state={},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"column nomination"},s.a.createElement("h2",null,"Nominations"),this.props.isFiveNominants&&s.a.createElement("div",{className:"five nominates"},s.a.createElement("h3",null,"Thank you for your choice the 5 Nominates!")),this.props.movieNominants.map((function(t,a){return s.a.createElement("li",{key:a},s.a.createElement("div",{className:"movie-img",style:{backgroundImage:"url(".concat(t.Poster,")")}}),s.a.createElement("p",{className:"movie-dscr"},t.Title," (",t.Year,") Nominate"),s.a.createElement("button",{onClick:function(){e.clickHandler(t.imdbID)}},"Remove"))})))}}]),a}(n.Component),y=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={serverResponse:{Response:"",Error:"",Search:[],totalResults:""},movieName:null,movieNominants:[],disabledButtons:[],isFiveNominants:!1,isServerResposeTrue:""},e.omdbUrl=function(){return e.state.basicUrl.concat(e.state.apikey).concat("&type=movie&s=").concat(e.state.movieName).concat("&page=").concat(e.state.currentPage+1)},e.serverResponseHandler=function(){var t=Object(m.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({serverResponse:a});case 2:return t.next=4,e.setState({isServerResposeTrue:e.state.serverResponse.Response});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.movieNamehandler=function(){var t=Object(m.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({movieName:a});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.movieNominationshandler=function(){var t=Object(m.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.state.movieNominants.length<=4)){t.next=5;break}return t.next=3,e.setState({movieNominants:[].concat(Object(i.a)(e.state.movieNominants),[a]),disabledButtons:[].concat(Object(i.a)(e.state.disabledButtons),[a.imdbID])});case 3:t.next=6;break;case 5:e.setState({isFiveNominants:!0});case 6:e.state.movieNominants.length<=4?e.setState({isFiveNominants:!1}):e.setState({isFiveNominants:!0});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.movieRemoveNominhandler=function(t){var a=Object(i.a)(e.state.movieNominants);-1!==t&&(a=a.filter((function(e){return e.imdbID!==t})),e.setState({movieNominants:a}),e.setState({isFiveNominants:!1})),e.setState({disabledButtons:e.state.disabledButtons.filter((function(e){return e!==t}))})},e}return Object(p.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"The Shoppies"),s.a.createElement(f,{onSearcMovieName:this.movieNamehandler,serverResponse:this.state.serverResponse}),this.state.movieName||this.state.movieNominants.length?s.a.createElement("div",{className:"row result nomination"},s.a.createElement(E,{movieName:this.state.movieName,serverResponse:this.state.serverResponse,serverResponseHandler:this.serverResponseHandler,movieNominationshandler:this.movieNominationshandler,disabledButtons:this.state.disabledButtons}),s.a.createElement(R,{movieNominants:this.state.movieNominants,isFiveNominants:this.state.isFiveNominants,movieRemoveNominhandler:this.movieRemoveNominhandler})):null)}}]),a}(n.Component);o.a.render(s.a.createElement(y,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.149d16ac.chunk.js.map