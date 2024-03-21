import { View } from 'react-native';

const DisplayCircule = (props) => {
    return (
          <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: props.color }} />
    );
}

export default DisplayCircule;