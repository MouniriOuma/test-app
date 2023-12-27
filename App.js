import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, FlatList, SectionList } from 'react-native';




const SectionListBasics = () => {
return (

<View style={{ flex: 1, paddingTop: 80, }}>
<SectionList

sections={[

{title: 'D', data: ['Devin', 'Dan', 'Dominic']},

{title: 'B',
data: [
'Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie', ],
},
{title: 'D', data: ['Devin', 'Dan', 'Dominic']},

{title: 'B',
data: [
'Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie', ],
},
]}
renderItem={({item}) => <Text style={{ padding: 10, fontsize: 18, height: 44, }}>{item}</Text>}
renderSectionHeader={({section}) => (

<Text style={{ paddingTop: 2, paddingLeft: 10, paddingRight: 10, paddingBottom: 2, fontsize: 14, fontweight:'bold', backgroundColor: 'rgba(247,247,247,1.0)', }}> {section.title}
</Text>
)}
keyExtractor={item => `basicListEntry-${item}`}
/>
</View>
);
};
export default SectionListBasics; 

/* const SectionListBasics = () => {
  return (
    <View >
      <SectionList
      sections={[
      {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
      {
      title: 'J', data: [
      
      'Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie',
      ],
      },
      {
      title: 'M', data: [
      
      'Mackson', 'Mames', 'Millian', 'Mimmy', 'Moel', 'Mohn', 'Mulie',],
      },
    ]}
      renderItem={({item}) =><Text >{item}</Text>} 
      renderSectionHeader={({section}) => (
      
      <Text >{section.title}</Text>
       )}
    />
    </View>
    );
};

export default SectionListBasics;
 */


/*Flat list basic */
/* const tab=[
          {key: 'Devin'}, {key: 'Dan'}, {key: 'Joel'}, {key: 'John'}, {key: 'Joel'}, {key: 'John'}, {key: 'Joel'}, {key: 'John'},
          {key:'Dominic'}, {key: 'Jillian'}, {key: 'Jillian'}, {key: 'Jillian'}, {key:
          'Jackson'}, {key: 'James'},  {key:'Jimmy'}, {key: 'Julie'}, {key: 'Jimmy'}, {key: 'Julie'},
          {key:'Jimmy'}, {key: 'Julie'}
          ];
const FlatListBasics = () => {
  return (
    <View style={{ flex: 1, paddingTop: 22, }}>
      <FlatList 
      data={tab}
      renderItem={({item})=><Text>{item.key} </Text>}/>

    </View>
  );
};
export default FlatListBasics;
 */

/* scrollView basic */
/* 
function App(){ 
  return (

      <ScrollView style={{backgroundColor: 'pink', marginHorizontal: 20}}> 
      <Text style={{ margin: 16, fontSize: 100 }}>Scroll here to see more ===={'>'}!
        you yes you .. look down .. scroll more.. mooooore ..  i said more.. alittle more.. 
        why not scroll more lol .. i made this .. just to tell you .. 
        nothing .. hihihihihiihihihihi .. evile laugh 
      </Text>
      <View style={{ marginTop: 1024 }} />
      <Text style={{ margin: 16 }}>Made you look! </Text> 
      </ScrollView>

);
}
export default App; */


/* scrollView with horizontal and pagingEnabled */
/* function App(){ 
  return (

      <ScrollView  style={{backgroundColor: 'pink', marginHorizontal: 20}} horizontal pagingEnabled> 
      <Text style={{ margin: 16, fontSize: 100 }}>Scroll here to see more ===={'>'}!
        you yes you .. look down .. scroll more.. mooooore .. i said more.. alittle more.. 
        why not scroll more lol .. i made this .. just to tell you .. 
       nothing .. hihihihihiihihihihi .. evile laugh 
      </Text>
      <View style={{ marginTop: 1024 }} />
      <Text style={{ margin: 16 }}>Made you look!</Text> 
      </ScrollView>

);
}
export default App; */
/* 
export default function App() {
  return (
    <View style={styles.container}>
      <Text>test test
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */