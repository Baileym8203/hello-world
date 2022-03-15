import React from "react";
import { View, Text, Button, TextInput, StyleSheet, ImageBackground} from "react-native";




class Start extends React.Component {
  state = {
name: "",
color: ""
  }

    render() {
    return (
      <ImageBackground
        source={require("../img/Background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container}>
          <Text style={styles.heading}>TimeSlip</Text>
          <View style={styles.background}>
            <TextInput
              style={styles.name}
              placeholder="Your Name.."
              value={this.state.name}
              onChangeText={(name) => this.setState({ name })}
            />
            
            <Text>Choose Background Color</Text>

            <View style={styles.roundButtonView}>
            <View // black color picker
              style={styles.roundButtonBlack}
            >
              <Text
                style={{ backgroundColor: "#090C08" }}
                onPress={() =>
                  this.setState({
                    color: "#090C08", //changes state color:
                  })
                }
              ></Text>
            </View>

            <View //purple color picker
              style={styles.roundButtonPurple}
            >
              <Text
                style={{ backgroundColor: "#474056" }}
                onPress={() =>
                  this.setState({
                    color: "#474056", //changes state color:
                  })
                }
              ></Text>
            </View>

            <View //blue color picker
              style={styles.roundButtonBlue}
            >
              <Text
                style={{ backgroundColor: "#8A95A5" }}
                onPress={() =>
                  this.setState({
                    color: "#8A95A5", //changes state color:
                  })
                }
              ></Text>
            </View>

            <View //green color picker
              style={styles.roundButtonGreen}
            >
              <Text
                style={{ backgroundColor: "#B9C6AE" }}
                onPress={() =>
                  this.setState({
                    color: "#B9C6AE", //changes state color:
                  })
                }
              ></Text>
            </View>
            </View>

            <Button
              style={styles.button}
              color="#757"
              title="Start Chatting"
              onPress={() =>
                this.props.navigation.navigate("Chat", {
                  name: this.state.name,
                  color: this.state.color,
                }) // sends state color and name as props to Chat.js
              }
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginBottom: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    flex: 1,
    opacity: 100,
  },

  button: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },

  roundButtonBlack: {
    borderWidth: 10,
    borderRadius: 25,
    width: 35,
    height: 35,
    borderColor: "#090C08",
  },

  roundButtonPurple: {
    borderColor: "#474056",
    borderWidth: 10,
    borderRadius: 25,
    width: 35,
    height: 35,
  },

roundButtonBlue: {
borderColor: "#8A95A5",
borderWidth: 10,
borderRadius: 25,
width: 35,
height: 35,
  },

  roundButtonGreen: {
borderColor: "#B9C6AE",
borderWidth: 10,
borderRadius: 25,
width: 35,
height: 35,

  },

roundButtonView: {
display: 'flex',
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 20,
marginTop: 20,
marginRight: 125
},
 
  heading: {
    flex: 1,
    fontSize: 45,
    fontWeight: "bold",
    color: "#ffffff",
  },

  name: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 50,
    marginBottom: 10,
    borderColor: "#757083",
    borderWidth: 2,
    borderStyle: "solid",
    padding: 7,
    paddingLeft: 10,
    width: 315,
    height: 65,
    marginBottom: 20
  },

  background: {
    backgroundColor: "#ffffff",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 30,
    marginRight: 30
  },
});

export default Start