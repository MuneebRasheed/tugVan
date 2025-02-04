import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {windowHeight} from '../../utils/dimensions';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import {useSelector} from 'react-redux';
const EarningCard = () => {
  const companyId = useSelector(state => state.user.companyId);
  const InBiddingData = useSelector(state =>
    state.booking.bookings.filter(
      val =>
        val?.bids?.includes(companyId) &&
        val?.status == 'COMPLETED' &&
        val?.company == companyId,
    ),
  );
  let sum = 0;
  InBiddingData.map(val => {
    sum += val?.priceToCharge;
  });
  return (
    <View style={styles.earningCardWrapper}>
      <View style={styles.mainHeading}>
        {iconMapping.wallet}
        <Text style={styles.textEarning}>{strings?.earning}</Text>
      </View>
      <View>
        <Text style={styles.textPrice}>{`£${sum}`}</Text>
      </View>
    </View>
  );
};

export default EarningCard;
