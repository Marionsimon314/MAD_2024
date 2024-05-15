import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Header,ButtonAT,Footer,Gap,Line } from '../../components';

const Home = ({navigation}) => {
  return (
    <View style = {styles.bodyView}>
        <Header title={"Money Tracker"} isProfile={true}/>
        <View style = {styles.YBView}>
            <Text style ={styles.txtStyle}>Your Balance</Text>
            <Gap height={8}/>
            <View style = {styles.moneyView}>
                <Text style = {styles.moneyStyle}>Rp.10.000.000</Text>
            </View>
            <Line/>
            <View style = {styles.cashOnView}>
                <Text style = {styles.cashOntxt}>Cash on Hand</Text>
                <Gap width={20}/>
                <Text style = {styles.cashOn}>Rp.4.000.000</Text>
            </View>
            <Gap height={11}/>
            <View style = {styles.cashOnView}>
                <Text style = {styles.cashOntxt}>Cash on Bank</Text>
                <Gap width={20}/>
                <Text style = {styles.cashOn}>Rp.6.000.000</Text>
            </View>
        </View>
        <View style = {styles.ATView}>
            <Text style ={styles.txtStyle}>Add Transaction</Text>
            <Gap height={25}/>
            <ButtonAT text={'Cash On Hand'} onPress={()=>navigation.navigate('CashonHand')}/>
            <Gap height={18}/>
            <ButtonAT text={'Cash On Bank'} onPress={()=>navigation.navigate('CashonBank')}/>
        </View>
        <Footer/>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    bodyView : {
        flexGrow : 1,
        justifyContent : 'space-between',
    },

    txtStyle : {
        fontFamily : 'Poppins',
        fontStyle : 'normal',
        fontWeight : '500',
        fontSize : 18,
        color : '#000000',
        lineHeight : 24,
    },

    YBView : {
        paddingHorizontal : 28,
        paddingTop : 10,
        backgroundColor : '#FFFFFF',
        height : 212,
        justifyContent : 'center'
    },
    
    moneyView : {
        alignItems : 'center',
    },

    moneyStyle : {
        fontFamily : 'Poppins',
        fontStyle : 'normal',
        fontWeight : 800,
        fontSize : 24,
        lineHeight : 36,
        color : '#000000'
    },

    cashOnView : {
        flexDirection : 'row',
    },

    cashOntxt : {
        fontFamily : 'Poppins',
        fontStyle : 'normal',
        fontWeight : 500,
        fontSize : 16,
        lineHeight : 21,

        color : '#000000'
    },

    cashOn : {
        fontFamily : 'Poppins',
        fontStyle : 'normal',
        fontWeight : 600,
        fontSize : 17,
        lineHeight : 21,

        color : '#000000'
    },

    ATView : {
        justifyContent : 'center',
        paddingHorizontal : 28,
        backgroundColor : '#FFFFFF',
        height : 240,
    }
})