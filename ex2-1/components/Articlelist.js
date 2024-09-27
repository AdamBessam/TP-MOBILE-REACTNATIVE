// import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// const data = [
//   { id: '1', title: 'Article Nº: 1', content: 'Contenu de l\\\'article 1: ........................' },
//   { id: '2', title: 'Article Nº: 2', content: 'Contenu de l\\\'article 2: ........................' },
//   { id: '3', title: 'Article Nº: 3', content: 'Contenu de l\\\'article 3: ........................' },
//   { id: '4', title: 'Article Nº: 4', content: 'Contenu de l\\\'article 4: ........................' },
// ];

// const Articlelist = ({ navigation }) => {
//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       onPress={() => navigation.navigate('ArticleDetails', { article: item })}
//     >
//       <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc', flexDirection: 'row' }}>
//         <Text>{item.title}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <FlatList
//       data={data}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id}
//     />
//   );
// };

// export default Articlelist;
// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// const data = [
//   { id: '1', title: 'Article Nº: 1', content: 'Contenu de l\\\'article 1: ........................' },
//   { id: '2', title: 'Article Nº: 2', content: 'Contenu de l\\\'article 2: ........................' },
//   { id: '3', title: 'Article Nº: 3', content: 'Contenu de l\\\'article 3: ........................' },
//   { id: '4', title: 'Article Nº: 4', content: 'Contenu de l\\\'article 4: ........................' },
// ];

// const Articlelist = ({ navigation }) => {
//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.itemContainer}
//       onPress={() => navigation.navigate('ArticleDetails', { article: item })}
//     >
//       <Text style={styles.itemTitle}>{item.title}</Text>
//       <Text style={styles.itemContent}>{item.content.substring(0, 50) + '...'}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <FlatList
//       data={data}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id}
//       contentContainerStyle={styles.list}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   list: {
//     padding: 16,
//   },
//   itemContainer: {
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//     backgroundColor: '#fafafa',
//     borderRadius: 10,
//     marginBottom: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   itemTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 8,
//     color: '#333',
//   },
//   itemContent: {
//     fontSize: 14,
//     color: '#666',
//   },
// });

// export default Articlelist;
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const data = [
  { id: '1', title: 'Article Nº: 1', content: 'Name : Chocolat', image: require('./image/image.png') },
  { id: '2', title: 'Article Nº: 2', content: 'Name : DUCOBU PASSE AU VERT', image: require('./image/image1.png') },
  { id: '3', title: 'Article Nº: 3', content: 'Name : Borderlands ', image: require('./image/image2.png') },

];

const Articlelist = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('ArticleDetails', { article: item })}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentPreview: {
    fontSize: 14,
    color: '#666',
  },
});

export default Articlelist;

