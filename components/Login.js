import react, {useState} from "react";
import { View, TextInput, StyleSheet, Text, Button } from "react-native";
import { authentication } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native'
import { signOut } from "firebase/auth";

const Login  = (screenName) => {

const navigation = useNavigation();
   
const [isSignedIn, setIsSignedIn] = useState(false);
   // text input states

   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
  
   const registerUser = () => {
    createUserWithEmailAndPassword(authentication, email, password )
    .then((res) => {
    console.log(res);
    setIsSignedIn(true)
    navigation.navigate((screenName = "Set Name"));
    })
    .catch((err) => {
    console.log(err);
    })
   }

   const signInUser = () => {
    signInWithEmailAndPassword( authentication, email, password )
    .then((res) => {
    console.log(res)
    setIsSignedIn(true)
    navigation.navigate((screenName = "Set Name"));
    })
    .catch((err) => {
    console.log(err);
    })
   }

   const signUserOut = () => {
     signOut(authentication)
       .then((res) => {
         console.log(res);
         setIsSignedIn(false);
       })
       .catch((err) => {
         console.log(err);
       });
   };

    
    return (
      <View>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        {isSignedIn === true?
        <Button title="Sign Out" onPress={signUserOut} />
        :
        <Button title="Sign In" onPress={signInUser} />
        }
        <Button title="Register" onPress={registerUser} />
      </View>
    );
}

export default Login;

