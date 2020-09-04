import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  vwContentSpace: {
    height: 20,
    width: 20,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'rgba(51,51,51,0.5)',
  },
  iconSelectedDel: {
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: {width: -0.5, height: 0.5},
    textShadowRadius: 2,
  },
  vwContentIcon: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    elevation: 2,
  },
  vwOnlySpace: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 0,
    top: 0,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tcbRemove: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 9,
  },
  vwPropsContent: {
    height: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  vwContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ListBody: (props) => ({
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: props.bgc,
    padding: 10,
    elevation: 5,
  }),
  TextCont: (props) => ({
    color:
      props.bgc != '#474747' && props.bgc != '#000000' ? '#333' : '#FFFFFF',
  }),
  btnShare: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#009dff',
    padding: 15,
    margin: 10,
    width: 120,
    height: 120,
    borderRadius: 70,
  },
  btnDel: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#ff0000',
    padding: 15,
    margin: 10,
    width: 120,
    height: 120,
    borderRadius: 70,
  },
  txtShare: {
    fontWeight: 'bold',
    color: '#009dff',
  },
  txtDel: {
    fontWeight: 'bold',
    color: '#ff0000',
  },
  box: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(51,51,51,0.8)',
  },
  boxBody: {
    width: '90%',
    height: 200,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  data: {
    height: 15,
    backgroundColor: '#333',
    borderRadius: 4,
    paddingRight: 5.5,
    paddingLeft: 5,
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  txtannolistinfo: {
    fontSize: 9,
    color: '#FFFFFF',
  },
});