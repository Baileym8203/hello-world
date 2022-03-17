import React from "react";
import { View, Text, StyleSheet, Platform, KeyboardAvoidingView } from "react-native";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import { Alert } from "react-native-web";

const firebase = require("firebase");
require("firebase/firestore");

export default class Chat extends React.Component {
  constructor() {
    super();

    const firebaseConfig = {
      apiKey: "AIzaSyBtt9vShgdL-46-bVaMjuUYgHY7WKQVuWs",
      authDomain: "chat-ab583.firebaseapp.com",
      projectId: "chat-ab583",
      storageBucket: "chat-ab583.appspot.com",
      messagingSenderId: "395742845331",
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    this.state = {
      //  messages state
      messages: [],
      uid: [],
    };
  
   this.referenceChatMessages = firebase.firestore().collection("messages");
   if (this.referenceChatMessages === null/undefined) {
   Alert.alert("The message has failed to send!")
   }
   this.unsubscribe = this.referenceChatMessages.onSnapshot(
     this.onCollectionUpdate
   );

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

  this.unsubscribeMessageUser = this.referenceMessageUser.onSnapshot(
    this.onCollectionUpdate
  );

  addMessage = () => {
  this.referenceChatMessages.add({
  text: 'Teslist',
  uid: this.state.uid,
  })
  }
  
}
  

  componentDidMount() {
    let name = this.props.route.params.name; // name prop passed over from state from start.js
    
   this.authUnsubscribe = firebase.auth().onAuthStateChanged((user) => {
     if (!user) {
       firebase.auth().signInAnonymously();
     }
     this.setState({
       uid: user.uid,
       messages: [],
     });
     this.unsubscribe = this.referenceChatMessages
       .orderBy("createdAt", "desc")
       .onSnapshot(this.onCollectionUpdate);
   });
 }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages), //appends messages objects
    }));
  }

  renderBubble(props) {
    // changes the right spawn texts AKA YOU sending them
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

