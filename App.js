import React from 'react';
import CurrencyInput from 'react-native-currency-input';
import {Button, StyleSheet, Text, View, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CompSlider from './src/components/CompSlider';
import formatNumber from './src/utils/formatNumber';
import WrapButton from './src/components/WrapButton';
const App = () => {
  const [amount, setAmount] = React.useState(38000);
  const [term, setTerm] = React.useState(12);
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#084F85', '#003B67']} style={styles.gradient}>
        <View style={styles.innerContainer}>
          <View style={styles.headlineContainer}>
            <Text style={styles.headline}>Simulá tu crédito</Text>
          </View>
          <View style={styles.sliderMol}>
            <View style={styles.sliderDesc}>
              <Text style={styles.amountText}>MONTO TOTAL</Text>
              <View style={styles.textInputContainer}>
                <Text style={styles.textPrefix}>{'$'}</Text>
                <CurrencyInput
                  textAlign="center"
                  keyboardType="numeric"
                  style={styles.amountValue}
                  value={amount}
                  onChangeValue={value => {
                    if (value != '') {
                      setAmount(value);
                    } else {
                      setAmount(5000);
                    }
                  }}
                  precision={0}
                  onEndEditing={() => {
                    if (parseInt(amount) < 5000) {
                      setAmount(5000);
                    } else if (parseInt(amount) > 50000) {
                      setAmount(50000);
                    }
                  }}
                  onBlur={() => {
                    if (parseInt(amount) < 5000) {
                      setAmount(5000);
                    } else if (parseInt(amount) > 50000) {
                      setAmount(50000);
                    }
                  }}
                />
              </View>
            </View>
            <View style={styles.sliderContainer}>
              <CompSlider
                maximumValue={50000}
                minimumValue={5000}
                setAmount={setAmount}
                step={500}
                value={amount ? parseInt(amount) : 5000}
              />
            </View>
            <View style={styles.sliderFooter}>
              <Text style={styles.sliderFooterText}>$ 5.000</Text>
              <Text style={styles.sliderFooterText}>$ 50.000</Text>
            </View>
          </View>
          <View style={styles.sliderMol}>
            <View style={styles.sliderDesc}>
              <Text style={styles.amountText}>PLAZO</Text>
              <View style={styles.textInputContainer}>
                <TextInput
                  keyboardType="numeric"
                  onChangeText={value => {
                    if (value != '') setTerm(value);
                  }}
                  style={styles.amountValue}
                  value={term.toString()}
                  textAlign="center"
                  onEndEditing={() => {
                    if (term)
                      if (term < 3) {
                        setTerm(3);
                      } else if (term > 24) {
                        setTerm(24);
                      }
                  }}
                  onBlur={() => {
                    if (term < 3) {
                      setTerm(3);
                    } else if (term > 24) {
                      setTerm(24);
                    }
                  }}
                />
              </View>
            </View>
            <View style={styles.sliderContainer}>
              <CompSlider
                maximumValue={24}
                minimumValue={3}
                setAmount={setTerm}
                step={1}
                value={typeof term === Number ? term : 3}
              />
            </View>
            <View style={styles.sliderFooter}>
              <Text style={styles.sliderFooterText}>3</Text>
              <Text style={styles.sliderFooterText}>24</Text>
            </View>
          </View>
          <View>
            <View style={styles.totalDesc}>
              <Text style={styles.totalText}>CUOTA FIJA POR MES</Text>
              <Text style={styles.total}>
                {amount != '' && term != ''
                  ? '$ ' + formatNumber(amount / term, 2, '.', ',')
                  : ''}
              </Text>
            </View>
            <View style={styles.buttonsContainer}>
              <View style={{width: '70%', paddingRight: 10}}>
                <Button color={'#17AA8D'} title="OBTENE CREDITO" />
              </View>
              <View style={{width: '30%', height: 30}}>
                <WrapButton
                  onPress={() => {}}
                  color={'#0B548B'}
                  title={'VER DETALLE DE CUOTAS'}
                />
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 25,
    marginTop: 40,
    marginHorizontal: 40,
    backgroundColor: '#003B67',
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  headline: {
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    fontSize: 25,
  },
  headlineContainer: {
    alignSelf: 'center',
    paddingVertical: 20,
  },
  sliderMol: {
    paddingVertical: 10,
  },
  sliderContainer: {
    paddingBottom: 5,
  },
  sliderDesc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    alignItems: 'center',
  },
  sliderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sliderFooterText: {
    color: 'white',
    fontFamily: 'Montserrat-Regular',
  },
  amountText: {
    fontFamily: 'Montserrat-Regular',
    color: 'white',
    fontSize: 18,
  },
  amountValue: {
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    fontSize: 20,
    height: 30,
    paddingVertical: 0,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalDesc: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#00355D',
    alignItems: 'center',
  },
  totalText: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 10,
    paddingLeft: 15,
  },
  total: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  },
  textPrefix: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    alignContent: 'center',
  },
  textInputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    height: 40,
  },
});

export default App;

// top color #084F85
// bottom color #003B67
//mid color #00355D
// first boton #17AA8D
// second botton #0B548B
