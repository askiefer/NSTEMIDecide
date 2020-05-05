/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationChange as rol
} from 'react-native-responsive-screen';

import Unorderedlist from 'react-native-unordered-list';

let screenheight = Dimensions.get("window").height;

import { CARDIAC_CATHETERIZATION_IMAGE } from '../..';

class Page5 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    }

    this.onLayout = this.onLayout.bind(this);

  }

  onLayout(e) {
    this.setState({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    });
  }
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
            <ScrollView
            maximumZoomScale={10.0}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
            <View
              onLayout={this.onLayout} 
              style={[styles.body]}>
                <View style={[styles.sectionContainer, styles.centerTitle, {marginTop: this.state.height * .03}]}>
                    <Text style={styles.sectionTitle}>What is cardiac catheterization?</Text>
                </View>
            <View style={styles.sectionContainer}>
                <View style={styles.sectionParagraph}>
                    <View
              onLayout={this.onLayout} 
              style={[styles.listItem, {marginTop: this.state.height * .02}]}>
                    <Unorderedlist style={styles.bullet}>
                    <Text style={[styles.boldText, styles.listText]}>
                      <Text style={styles.underlineText}>Cardiac catheterization</Text> is a procedure to look for blockages in your heart.
                    </Text> 
                    </Unorderedlist>
                    <Text></Text>
                    </View>
                    <View
              onLayout={this.onLayout} 
              style={[styles.listItem, {marginTop: this.state.height * .01}]}>
                    <Unorderedlist style={styles.bullet}><Text style={styles.listText}>
                        A dye is injected through a tube (catheter). This tube can enter
                        one of two spots: through the leg (femoral artery) or
                        the wrist (radial artery).
                    </Text></Unorderedlist>
                    <Text></Text>
                    </View>
                    <View
              onLayout={this.onLayout} 
              style={[styles.listItem, {marginTop: this.state.height * .01}]}>
                    <Unorderedlist style={styles.bullet}><Text style={styles.listText}>
                    The dye makes the arteries visible on X-ray, allowing doctors
                    to see  if there are blocked arteries.
                        </Text></Unorderedlist>
                    </View>
                    <Text></Text>
                </View>
            </View>
            <View
              onLayout={this.onLayout} 
              style={[styles.sectionContainer, {marginTop: this.state.height * .02}]}></View>
            {/* <View style={[styles.sectionContainer]}> */}
              <View style={[styles.labelContainer, {width: this.state.width * .55}]}>
                  <View style={styles.labelBox}>
                      <Text style={[styles.labelText, styles.boldText]}>
                          Cardiac catheterization
                      </Text>
                  </View>
              </View>
            {/* </View> */}
                <View
                onLayout={this.onLayout} 
                style={[styles.imageContainer, {height: hp("40%")}]}>
                    <Image style={styles.image} source={ CARDIAC_CATHETERIZATION_IMAGE } resizeMode="contain"/>
                </View>
            </View>
            </ScrollView>
            <View style={styles.footer}>
              <Text style={styles.copyright}>Copyright 2020 New York University.</Text>
              <Text style={styles.copyright}>All Rights Reserved.</Text>
              <Text style={styles.pageNumber}>5</Text>
            </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#f6f6f6',
    // height: screenheight - hp('10%')
  },
  sectionContainer: {
    paddingHorizontal: wp('5%'),
  },
  boldText: {
    fontWeight: '700'
  },
  listText: {
    fontSize: hp('2.4%')
  },
  labelText: {
    fontSize: hp('2.5%'),
    color: Colors.white,
  },
  listItem: {
    // marginTop: hp('2%')
  },
  bullet: {
    fontSize: hp('2%')
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
  imageContainer: {
    // height: hp('40%'),
    alignContent: 'center',
    backgroundColor: Colors.white,
    margin: wp('3%'),
    borderWidth: 1,
  },
  centerTitle: {
    alignItems: 'center',
    alignContent: 'center',
  },
  image: {
      width: undefined,
      height: undefined,
      flex: 1,
  },
  sectionTitle: {
    fontSize: hp('3.5%'),
    fontWeight: '700',
    color: Colors.black,
    fontFamily: 'Avenir',
    marginBottom: hp('1.5%')
  },
  labelBox: {
    // margin: wp('1%'),
    backgroundColor: '#1f3864',
    padding: wp('1%'),
    // margin: wp('2%'),
    paddingHorizontal: wp('2%')
  },
  footer: {
    margin: hp('.5%')
  },
  pageNumber: {
    fontSize: hp('2%'),
    textAlign: 'center',
    fontFamily: 'Avenir',
  },
  copyright: {
    fontSize: hp('1.2%'),
    textAlign: 'right',
    fontFamily: 'Avenir',
  },
});

export default Page5;
