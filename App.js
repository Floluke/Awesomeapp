/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React, { useState } from "react";
 import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
 
 const FlexDirectionBasics = () => {
   const [flexDirection, setflexDirection] = useState("row");
 
   return (
    <View style={{ flex:1, flexDirection: "column" }}>
      <View style={{ flex:1, flexDirection: "row" }}>
        <View style={{ flex:1,backgroundColor: "skyblue", flexDirection:"row"}}>
          <View style={{ height:50,width:50, backgroundColor: "black" }}></View>
        </View>
        <View style={{ flex:1,backgroundColor: "green",flexDirection:"row-reverse"}}>
          <View style={{ height:50,width:50, backgroundColor: "black"}}></View>
        </View>
      </View>
      <View style={{ flex:1, flexDirection: "row" }}>
        <View style={{ flex:1,backgroundColor: "yellow",flexDirection:"column-reverse"}}>
          <View style={{ height:50,width:50, backgroundColor: "black"}}></View>
        </View>
        <View style={{ flex:1,backgroundColor: "chocolate",flexDirection:"column-reverse"}}>
          <View style={{ backgroundColor: "",flexDirection:"row-reverse"}}>
            <View style={{ height:50,width:50, backgroundColor: "black"}}></View>
          </View>
        </View>
      </View>
    </View>
   );
 };
 
 const PreviewLayout = ({
   label,
   children,
   values,
   selectedValue,
   setSelectedValue,
 }) => (
   <View style={{ padding: 10, flex: 1 }}>
     <Text style={styles.label}>{label}</Text>
     <View style={styles.row}>
       {values.map((value) => (
         <TouchableOpacity
           key={value}
           onPress={() => setSelectedValue(value)}
           style={[
             styles.button,
             selectedValue === value && styles.selected,
           ]}
         >
           <Text
             style={[
               styles.buttonLabel,
               selectedValue === value && styles.selectedLabel,
             ]}
           >
             {value}
           </Text>
         </TouchableOpacity>
       ))}
     </View>
     <View style={[styles.container, { [label]: selectedValue }]}>
       {children}
     </View>
   </View>
 );
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop: 8,
     backgroundColor: "aliceblue",
   },
   box: {
     width: 50,
   },
   row: {
     flexDirection: "row",
     flexWrap: "wrap",
   },
   button: {
     paddingHorizontal: 8,
     paddingVertical: 6,
     borderRadius: 4,
     backgroundColor: "oldlace",
     alignSelf: "flex-start",
     marginHorizontal: "1%",
     marginBottom: 6,
     minWidth: "48%",
     textAlign: "center",
   },
   selected: {
     backgroundColor: "coral",
     borderWidth: 0,
   },
   buttonLabel: {
     fontSize: 12,
     fontWeight: "500",
     color: "coral",
   },
   selectedLabel: {
     color: "white",
   },
   label: {
     textAlign: "center",
     marginBottom: 10,
     fontSize: 24,
   },
 });
 
 export default FlexDirectionBasics;