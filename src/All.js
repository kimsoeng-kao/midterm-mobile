/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SCREEN_NAME } from './navigation';


var data = [
  {
    name: 'Stewed Mushrooms',
    image: require('./asset/namkho.jpg'),
    rating: 3,
    price: '$12',
    detail: 'Slice mushrooms fairly thickly. Heat the oil in a large frying pan. Stir in the garlic, after about 2 minutes, the mushrooms. Cook for 8-10 minutes, stirring occasionally. Season with salt& pepper, and stir in the parsley. Cook for 5 minutes more, and serve at once',
  },
  {
    name: 'Jackfruit Fried',
    image: require('./asset/mitkho.jpg'),
    rating: 5,
    price: '$15',
    detail: "The jackfruit texture is not dissimilar to a banana, mango, or pineapple in terms of being dense and fibrous. But the taste is quite distinctive. Some say it's sweet, and some say a jackfruit has a flavor similar to pulled pork, especially when cooked",
  },
  {
    name: 'Noodles',
    image: require('./asset/hutieu.jpg'),
    rating: 4,
    price: '$20',
    detail: 'Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings. ... Noodles are usually cooked in boiling water, sometimes with cooking oil or salt added. They are also often pan-fried or deep-fried.',
  },
  {
    name: 'Beef',
    image: require('./asset/cuonlalot.jpg'),
    rating: 2,
    price: '$12',
    detail: 'Beef, flesh of mature cattle, as distinguished from veal, the flesh of calves. The best beef is obtained from early maturing, special beef breeds. High-quality beef has firm, velvety, fine-grained lean, bright red in colour and well-marbled',
  },
  {
    name: 'Salad dressing',
    image: require('./asset/cuondiep.jpg'),
    rating: 5,
    price: '$13',
    detail: 'Salad dressing is defined as the emulsified semisolid food made from edible vegetable oil, acidifying ingredients, and egg yolks.',
  },
];


export default class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      data_temp: data,
    };
  }

  _rating(item) {
    let rating = [];
    // eslint-disable-next-line no-undef
    for (i = 0; i < item; i++) {
      rating.push(
        <Image
          source={require('./asset/star.png')}
          style={{ width: 15, height: 15, marginRight: 3 }}
          resizeMode="cover"
        />,
      );
    }
    return rating;
  }

  _handleDetail = (item) => {
    console.log(this.props);
    this.props.navigation.navigate('Detail', { storeData: item });
    console.log(item);
    console.log('=======item');
  }

  renderItem = ({ item, index }) => {
    const { navigation } = this.props;
    return (
      <LinearGradient
        colors={['#009245', '#8cc631']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.item}>
        <View style={styles.image_container}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.rating}>{this._rating(item.rating)}</View>
          <View style={styles.price_container}>
            <View style={styles.price}>
              <Text style={styles.textPrice}>{item.price}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.props.navigation.navigate('Detail', { storeData: item })
          }
          style={styles.button}>
          <AntDesign name="arrowright" color="green" size={15} />
        </TouchableOpacity>
      </LinearGradient>
    );
  };

  ItemSeparatorComponent = () => {
    return (
      <View
        style={{
          height: 10,
        }}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flatList}>
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.ItemSeparatorComponent}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 5,
  },
  flatList: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  image_container: {
    width: 90,
    height: 90,
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  rating: {
    marginTop: 5,
    flexDirection: 'row',
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price_container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  price: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  textPrice: {
    color: 'green',
    fontWeight: 'bold',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: '#f2f2f2',
    marginTop: 10,
  },
});
