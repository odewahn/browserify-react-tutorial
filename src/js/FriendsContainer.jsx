
var FriendsContainer = React.createClass({
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
      <div>
        <h3> Name: {this.state.name} </h3>
        <AddFriend addNew={this.addFriend} />
        <ShowList names={this.state.friends} />
      </div>
    )
  }
});
//module.exports = FriendsContainer;
