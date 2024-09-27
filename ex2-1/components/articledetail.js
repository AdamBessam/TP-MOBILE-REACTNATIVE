// import React from 'react';
// import { View, Text } from 'react-native';

// const Articledetail = ({ route }) => {
//   const { article } = route.params;
//   return (
//     <View style={{ padding: 16 }}>
//       <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{article.title}</Text>
//       <Text style={{ marginTop: 8 }}>{article.content}</Text>
//     </View>
//   );
// };

// export default Articledetail;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Articledetail = ({ route }) => {
  const { article } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.content}>{article.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
});

export default Articledetail;
