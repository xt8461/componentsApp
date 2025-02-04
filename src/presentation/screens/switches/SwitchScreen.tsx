import React from 'react';
import {Text} from 'react-native';
import CustomView from '../../components/ui/CustomView';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const SwitchScreen = () => {
  return (
    <CustomView style={{ marginTop: 60, paddingHorizontal: 20 }}>
      <Card>
        <Button 
        text='Click'
        onPress={ () => {} }/>
      </Card>
    </CustomView>
  );
};

export default SwitchScreen;
