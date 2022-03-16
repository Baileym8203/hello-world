import React from "react";
import { View, Text, StyleSheet, Platform, KeyboardAvoidingView } from "react-native";
import { Bubble, GiftedChat } from "react-native-gifted-chat";


export default class Chat extends React.Component {
  constructor() {
    super();

    this.state = { //  messages state
      messages: [],
    };
  }

  componentDidMount() {
    let name = this.props.route.params.name; // name prop passed over from state from start.js
    this.setState({
      messages: [ // messages object list
        {
          _id: 1,
          text: "hello Learner, I am the message you see now! just keep coding!",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
        {
          _id: 2,
          text: `${name} has entered the chat`, // uses name prop to add the system message
          createdAt: new Date(),
          system: true,
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages), //appends messages objects
    }));
  }

  renderBubble(props) { // changes the right spawn texts AKA YOU sending them
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#0096FF",
          },
        }}
      />
    );
  }

  render() {
    let name = this.props.route.params.name; // both color and name props
    let color = this.props.route.params.color;

    this.props.navigation.setOptions({ title: name });

    return ( // start of DOM return statement
      <View
        style={{
          backgroundColor: color,
          flex: 1,
        }}
      >
        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{ _id: 1 }}
        />
        {Platform.OS === "android" ? (
          <KeyboardAvoidingView behavior="height" />
        ) : null}

        {}
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {

},

})

