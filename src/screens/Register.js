import { View, Text } from 'react-native';
import React from 'react';

const __isValidEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };


const SignUpComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState("");
    const [isValid, setValid] = useState(true);
    const __doSignUp = () => {
      if (!email) {
        setError("Email required *");
        setValid(false);
        return;
      } else if (!password && password.trim() && password.length > 6) {
        setError("Weak password, minimum 5 chars");
        setValid(false);
        return;
      } else if (!__isValidEmail(email)) {
        setError("Invalid Email");
        setValid(false);
        return;
      }
  
      __doCreateUser(email, password);
    };
  
    const __doCreateUser = async (email, password) => {
      try {
        let response = await auth().createUserWithEmailAndPassword(email, password);
        if (response && response.user) {
          Alert.alert("Success ✅", "Account created successfully");
        }
      } catch (e) {
        console.error(e.message);
      }
    };
  
    return (
      
    );
  };

export default Register