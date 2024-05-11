import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

const UserLocationMarker = ({ coordinate, heading }) => {
  const circleRadius = 15; // Adjust as needed
  const arrowSize = 8; // Adjust as needed

  const rotation = `rotate(${heading}deg)`; // Apply heading rotation

  return (
    <View style={styles.markerContainer}>
      <Svg width={circleRadius * 2} height={circleRadius * 2}>
        <Circle cx={circleRadius} cy={circleRadius} r={circleRadius} fill="blue" />
        <Path
          d={`M${circleRadius},${circleRadius - arrowSize} L${circleRadius + arrowSize},${circleRadius} L${circleRadius - arrowSize},${circleRadius + arrowSize} Z`}
          fill="white"
          transform={rotation}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  markerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserLocationMarker;
