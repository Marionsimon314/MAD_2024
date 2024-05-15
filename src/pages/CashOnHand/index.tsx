import { StyleSheet, View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ButtonAT, Gap, Header,TextInputAT,TransactionCard } from '../../components'

const CashonHand = ({ navigation }) => {
  return (
    <View style={styles.CoHView}>
        <Header title = 'Cash On Hand' onBack={() => navigation.goBack()}/>
        <View style = {styles.descView}>
            <TextInputAT label = 'Description' placeholder = 'Add the description'/>
            <Gap height={17}/>
            <TextInputAT label = 'Type' placeholder = 'Debit/Credit'/>
            <Gap height={22}/>
            <ButtonAT text = 'Save'/>
        </View>
        <ScrollView style = {styles.ltView}>
            <Text style={styles.txtStyle} >Last 3 Transaction</Text>
            <Gap width={10}/>
                <TransactionCard date={'16 April 2020'} items={'Earning'} price={'Rp.1.500.000'} />
                <Gap height={15}/>
                <TransactionCard date={'17 April 2020'} items={'Birthday Party'} price={'Rp.300.000'} isExpense={true}/>
                <Gap height={15}/>
                <TransactionCard date={'20 April 2020'} items={'Wi-Fi'} price={'Rp.523.000'}isExpense={true}/>
                <Gap height={15}/>
        </ScrollView>
    </View>
  )
}

export default CashonHand;

const styles = StyleSheet.create({
    
    CoHView : {
        flex : 1,
    },

    descView : {
        marginTop : 25,
        backgroundColor : '#FFFFFF',
        height : 310,
        justifyContent : 'center',
        paddingHorizontal : 24
    },

    ltView : {
        marginTop : 25,
        backgroundColor : '#FFFFFF',
        height : 310,
    },

    txtStyle : {
        marginLeft : 25,
        marginVertical : 25,
        fontFamily : 'Poppins',
        fontStyle : 'normal',
        fontWeight : 700,
        fontSize : 20,
        lineHeight : 24,

        color : '#020202'
    },

})