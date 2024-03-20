import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomButton({label,onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={{backgroundColor:'#93bbff', padding:10, borderRadius:10, marginBottom:30, borderWidth: 0.5,borderColor: '#000000'}}>
        <Text style={{textAlign:'center', fontSize:20, color:'#fff',fontFamily:'PBlack',
    }}>
        {label}
        </Text>
      </TouchableOpacity>
  )
}