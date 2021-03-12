export let GenSelect = ({ value, style }) => {
  let [selected, setSelected] = useState(false);
  const onPress = () => {
    setSelected(!selected);
  };

  return (
    <View style={styles.genIcon}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.boxes,
            {
              color: selected ? 'black' : 'white',
              backgroundColor: selected ? '#FFB424' : '#E8E8E8',
            },
          ]}
        >
          <Image source={require('../assets/genX.png')} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.boxes,
            {
              color: selected ? 'black' : 'white',
              backgroundColor: selected ? '#FFB424' : '#E8E8E8',
            },
          ]}
        >
          <Image source={require('../assets/gen.png')} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.boxes,
            {
              color: selected ? 'black' : 'white',
              backgroundColor: selected ? '#FFB424' : '#E8E8E8',
            },
          ]}
        >
          <Image source={require('../assets/genY.png')} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.boxes,
            {
              color: selected ? 'black' : 'white',
              backgroundColor: selected ? '#FFB424' : '#E8E8E8',
            },
          ]}
        >
          <Image source={require('../assets/genO.png')} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
