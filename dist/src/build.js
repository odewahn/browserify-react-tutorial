(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/odewahn/Desktop/browserify-react-tutorial/src/js/AddFriend.js":[function(require,module,exports){
var AddFriend = React.createClass({displayName: "AddFriend",
  getInitialState: function(){
    return {
      newFriend: ''
    }
  },
  propTypes: {
    addNew: React.PropTypes.func.isRequired
  },
  updateNewFriend: function(e){
    this.setState({
      newFriend: e.target.value
    });
  },
  handleAddNew: function(){
    this.props.addNew(this.state.newFriend);
    this.setState({
      newFriend: ''
    });
  },
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("input", {type: "text", value: this.state.newFriend, onChange: this.updateNewFriend}), 
        React.createElement("button", {onClick: this.handleAddNew}, " Add Friend ")
      )
    );
  }
});
module.exports = AddFriend;

},{}],"/Users/odewahn/Desktop/browserify-react-tutorial/src/js/App.js":[function(require,module,exports){
var friendsContainer = require("./FriendsContainer");

React.renderComponent(friendsContainer({}), document.getElementById('app'));

},{"./FriendsContainer":"/Users/odewahn/Desktop/browserify-react-tutorial/src/js/FriendsContainer.js"}],"/Users/odewahn/Desktop/browserify-react-tutorial/src/js/FriendsContainer.js":[function(require,module,exports){
require("./ShowList");
require("./AddFriend");

var FriendsContainer = React.createClass({displayName: "FriendsContainer",
  getInitialState: function(){
    return {
      name: 'Tyler McGinnis',
      friends: ['Jake Lingwall', 'Murphy Randall', 'Merrick Christensen'],
    }
  },
  addFriend: function(friend){
    this.setState({
      friends: this.state.friends.concat([friend])
    });
  },
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("h3", null, " Name: ", this.state.name, " "), 
        React.createElement(AddFriend, {addNew: this.addFriend}), 
        React.createElement(ShowList, {names: this.state.friends})
      )
    )
  }
});
module.exports = FriendsContainer;

},{"./AddFriend":"/Users/odewahn/Desktop/browserify-react-tutorial/src/js/AddFriend.js","./ShowList":"/Users/odewahn/Desktop/browserify-react-tutorial/src/js/ShowList.js"}],"/Users/odewahn/Desktop/browserify-react-tutorial/src/js/ShowList.js":[function(require,module,exports){
var ShowList = React.createClass({displayName: "ShowList",
  getDefaultProps: function(){
    return {
      names: []
    }
  },
  render: function(){
    var listItems = this.props.names.map(function(friend){
      return React.createElement("li", null, " ", friend, " ");
    });
    return (
      React.createElement("div", null, 
        React.createElement("h3", null, " Friends "), 
        React.createElement("ul", null, 
          listItems
        )
      )
    )
  }
});

module.exports = ShowList;

},{}]},{},["/Users/odewahn/Desktop/browserify-react-tutorial/src/js/App.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvb2Rld2Fobi9EZXNrdG9wL2Jyb3dzZXJpZnktcmVhY3QtdHV0b3JpYWwvc3JjL2pzL0FkZEZyaWVuZC5qcyIsIi9Vc2Vycy9vZGV3YWhuL0Rlc2t0b3AvYnJvd3NlcmlmeS1yZWFjdC10dXRvcmlhbC9zcmMvanMvQXBwLmpzIiwiL1VzZXJzL29kZXdhaG4vRGVza3RvcC9icm93c2VyaWZ5LXJlYWN0LXR1dG9yaWFsL3NyYy9qcy9GcmllbmRzQ29udGFpbmVyLmpzIiwiL1VzZXJzL29kZXdhaG4vRGVza3RvcC9icm93c2VyaWZ5LXJlYWN0LXR1dG9yaWFsL3NyYy9qcy9TaG93TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksK0JBQStCLHlCQUFBO0VBQ2pDLGVBQWUsRUFBRSxVQUFVO0lBQ3pCLE9BQU87TUFDTCxTQUFTLEVBQUUsRUFBRTtLQUNkO0dBQ0Y7RUFDRCxTQUFTLEVBQUU7SUFDVCxNQUFNLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVTtHQUN4QztFQUNELGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDO01BQ1osU0FBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztLQUMxQixDQUFDLENBQUM7R0FDSjtFQUNELFlBQVksRUFBRSxVQUFVO0lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQztNQUNaLFNBQVMsRUFBRSxFQUFFO0tBQ2QsQ0FBQyxDQUFDO0dBQ0o7RUFDRCxNQUFNLEVBQUUsVUFBVTtJQUNoQjtNQUNFLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUE7UUFDSCxvQkFBQSxPQUFNLEVBQUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFDLE1BQUEsRUFBTSxDQUFDLEtBQUEsRUFBSyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFDLENBQUMsUUFBQSxFQUFRLENBQUUsSUFBSSxDQUFDLGVBQWdCLENBQUEsQ0FBRyxDQUFBLEVBQUE7UUFDbEYsb0JBQUEsUUFBTyxFQUFBLENBQUEsQ0FBQyxPQUFBLEVBQU8sQ0FBRSxJQUFJLENBQUMsWUFBYyxDQUFBLEVBQUEsY0FBcUIsQ0FBQTtNQUNyRCxDQUFBO01BQ047R0FDSDtDQUNGLENBQUMsQ0FBQztBQUNILE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDOzs7QUM3QjNCLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7O0FBRXJELEtBQUssQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7QUNGNUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3RCLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQzs7QUFFdkIsSUFBSSxzQ0FBc0MsZ0NBQUE7RUFDeEMsZUFBZSxFQUFFLFVBQVU7SUFDekIsT0FBTztNQUNMLElBQUksRUFBRSxnQkFBZ0I7TUFDdEIsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLHFCQUFxQixDQUFDO0tBQ3BFO0dBQ0Y7RUFDRCxTQUFTLEVBQUUsU0FBUyxNQUFNLENBQUM7SUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQztNQUNaLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM3QyxDQUFDLENBQUM7R0FDSjtFQUNELE1BQU0sRUFBRSxVQUFVO0lBQ2hCO01BQ0Usb0JBQUEsS0FBSSxFQUFBLElBQUMsRUFBQTtRQUNILG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUEsU0FBQSxFQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDLEdBQU0sQ0FBQSxFQUFBO1FBQ2xDLG9CQUFDLFNBQVMsRUFBQSxDQUFBLENBQUMsTUFBQSxFQUFNLENBQUUsSUFBSSxDQUFDLFNBQVUsQ0FBQSxDQUFHLENBQUEsRUFBQTtRQUNyQyxvQkFBQyxRQUFRLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBUSxDQUFBLENBQUcsQ0FBQTtNQUNuQyxDQUFBO0tBQ1A7R0FDRjtDQUNGLENBQUMsQ0FBQztBQUNILE1BQU0sQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUM7OztBQ3pCbEMsSUFBSSw4QkFBOEIsd0JBQUE7RUFDaEMsZUFBZSxFQUFFLFVBQVU7SUFDekIsT0FBTztNQUNMLEtBQUssRUFBRSxFQUFFO0tBQ1Y7R0FDRjtFQUNELE1BQU0sRUFBRSxVQUFVO0lBQ2hCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLE1BQU0sQ0FBQztNQUNuRCxPQUFPLG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUEsR0FBQSxFQUFFLE1BQU0sRUFBQyxHQUFNLENBQUEsQ0FBQztLQUM1QixDQUFDLENBQUM7SUFDSDtNQUNFLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUE7UUFDSCxvQkFBQSxJQUFHLEVBQUEsSUFBQyxFQUFBLFdBQWMsQ0FBQSxFQUFBO1FBQ2xCLG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUE7VUFDRCxTQUFVO1FBQ1IsQ0FBQTtNQUNELENBQUE7S0FDUDtHQUNGO0FBQ0gsQ0FBQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIEFkZEZyaWVuZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB7XG4gICAgICBuZXdGcmllbmQ6ICcnXG4gICAgfVxuICB9LFxuICBwcm9wVHlwZXM6IHtcbiAgICBhZGROZXc6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfSxcbiAgdXBkYXRlTmV3RnJpZW5kOiBmdW5jdGlvbihlKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5ld0ZyaWVuZDogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfSxcbiAgaGFuZGxlQWRkTmV3OiBmdW5jdGlvbigpe1xuICAgIHRoaXMucHJvcHMuYWRkTmV3KHRoaXMuc3RhdGUubmV3RnJpZW5kKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5ld0ZyaWVuZDogJydcbiAgICB9KTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uZXdGcmllbmR9IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZU5ld0ZyaWVuZH0gLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZE5ld30+IEFkZCBGcmllbmQgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gQWRkRnJpZW5kO1xuIiwidmFyIGZyaWVuZHNDb250YWluZXIgPSByZXF1aXJlKFwiLi9GcmllbmRzQ29udGFpbmVyXCIpO1xuXG5SZWFjdC5yZW5kZXJDb21wb25lbnQoZnJpZW5kc0NvbnRhaW5lcih7fSksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iLCJyZXF1aXJlKFwiLi9TaG93TGlzdFwiKTtcbnJlcXVpcmUoXCIuL0FkZEZyaWVuZFwiKTtcblxudmFyIEZyaWVuZHNDb250YWluZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogJ1R5bGVyIE1jR2lubmlzJyxcbiAgICAgIGZyaWVuZHM6IFsnSmFrZSBMaW5nd2FsbCcsICdNdXJwaHkgUmFuZGFsbCcsICdNZXJyaWNrIENocmlzdGVuc2VuJ10sXG4gICAgfVxuICB9LFxuICBhZGRGcmllbmQ6IGZ1bmN0aW9uKGZyaWVuZCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmcmllbmRzOiB0aGlzLnN0YXRlLmZyaWVuZHMuY29uY2F0KFtmcmllbmRdKVxuICAgIH0pO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz4gTmFtZToge3RoaXMuc3RhdGUubmFtZX0gPC9oMz5cbiAgICAgICAgPEFkZEZyaWVuZCBhZGROZXc9e3RoaXMuYWRkRnJpZW5kfSAvPlxuICAgICAgICA8U2hvd0xpc3QgbmFtZXM9e3RoaXMuc3RhdGUuZnJpZW5kc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IEZyaWVuZHNDb250YWluZXI7XG4iLCJ2YXIgU2hvd0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZXM6IFtdXG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgdmFyIGxpc3RJdGVtcyA9IHRoaXMucHJvcHMubmFtZXMubWFwKGZ1bmN0aW9uKGZyaWVuZCl7XG4gICAgICByZXR1cm4gPGxpPiB7ZnJpZW5kfSA8L2xpPjtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPiBGcmllbmRzIDwvaDM+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7bGlzdEl0ZW1zfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaG93TGlzdDtcbiJdfQ==
