import React, { useState } from 'react';
import { View } from 'react-native';
import { Menu, Divider, IconButton } from 'react-native-paper';
import theme from '../styles';

import { connect } from 'react-redux';
import { Logout } from '../redux/actions/index';

function UserMenu( props ){
  const [ menu, setmenuStatus ] = useState(false);

  const _openMenu = () => setmenuStatus(true);
  const _closeMenu = () => setmenuStatus(false);
    return (
        <View
          style={{
            paddingTop: 10,
            marginRight: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            width: 10,
          }}>
          <Menu
            visible={menu}
            onDismiss={ _closeMenu }
            style={{ marginTop: 50 }}
            contentStyle={{ backgroundColor: theme.colors.backgroundLight }}
            anchor={ <IconButton size={25} onPress={ _openMenu } icon="account" color={ theme.colors.disabled } /> }
          >
            <Menu.Item onPress={() => {}} title="Perfil" />
            <Divider />
            <Menu.Item onPress={() => { props.Logout() }} title="Salir" />
          </Menu>
        </View>
    );
}

const mapStateToProps = ( state ) => {
  return {
      values : state.teleReducer
  }
}

export default connect(mapStateToProps, { Logout })(UserMenu);