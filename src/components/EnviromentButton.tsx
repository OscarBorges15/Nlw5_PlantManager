import  React  from 'react';
import {
  SafeAreaView,
  View, 
  Text,   
  StyleSheet,
} from 'react-native';

import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentButtonProps extends RectButtonProps {
  title:string;
  active?:boolean
}


export function EnviromentButton ({
  title,
  active = false,
  ...rest

} : EnviromentButtonProps ){
  return(
    <RectButton

    style={[
      styles.container,
      active && styles.conteinerActive

    ]}
    {...rest}
    >
      <Text style={[
        styles.text,
        active && styles.textActive
      
      ]}>
        {title}


      </Text>
    </RectButton>  

  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.shape,
    height:40,
    width:76,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:12,
    marginRight:5,
    marginHorizontal:5,

  },
  conteinerActive:{
    backgroundColor:colors.green_light,

  },
  text:{
    color:colors.heading,
    fontFamily: fonts.text

  },
  textActive:{
    color:colors.green_dark,
    fontFamily:fonts.heading,

  }

})