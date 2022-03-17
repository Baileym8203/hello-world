import React from "react";
import { View, Text, StyleSheet, Platform, KeyboardAvoidingView } from "react-native";
import { Bubble, GiftedChat, Message, } from "react-native-gifted-chat";
import { getDatabase, ref, push, set, Unsubscribe } from "@firebase/database";

export default class Chat extends React.Component {
  constructor() {
    super();
   
    state = {
    messages: []
    }

  const db = getDatabase();
  const messagesRef = ref(db, "messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  }



  componentDidMount() {
    let name = this.props.route.params.name; // name prop passed over from state from start.js
    const db = getDatabase();
    const messagesRef = ref(db, "messages");
    this.Unsubscribe = messagesRef.onSnapshot(this.onCollectionUpdate)
    
    onCollectionUpdate = (querySnapshot) => {
   const messages = [];
   // go through each document
   querySnapshot.forEach((doc) => {
     // get the QueryDocumentSnapshot's data
     let data = doc.data();
     messages.push({
       _id: data._id,
       text: data.text,
       createdAt: data.createdAt.toDate(),
       user: data.user,
     });
   });
}
  }

  componentWillUnmount() {
  this.Unsubscribe
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

    return (
      // start of DOM return statement

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

