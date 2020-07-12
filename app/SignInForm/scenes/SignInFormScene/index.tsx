import React, {Component} from 'react';
import {observable} from 'mobx';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Picker,
  ScrollView,
  CheckBox,
  Button,
  Alert,
} from 'react-native';
import {observer} from 'mobx-react';
import DatePicker from 'react-native-datepicker';
import {TriangleColorPicker, ColorPicker} from 'react-native-color-picker';
import LinearGradient from 'react-native-linear-gradient';
@observer
class SignInForm extends Component {
  @observable firstName: string = '';
  @observable lastName: string = '';
  @observable mobileNumber: string = '';
  @observable email: string = '';
  @observable password: string = '';
  @observable confirmPassword: string = '';
  @observable selectedOption: string = '';
  @observable selectedValue: string = '';
  @observable date: any = '';
  @observable address: string = '';
  @observable color1: string = '#00ccfe';
  @observable color2: string = '#333399';

  onChangeFirstName = (value: string) => {
    this.firstName = value;
  };
  onChangeLastName = (value: string) => {
    this.lastName = value;
  };
  onChangeNumber = (value: string) => {
    this.mobileNumber = value;
  };
  onChangeEmail = (value: string) => {
    this.email = value;
  };
  onChangePassword = (value: string) => {
    this.password = value;
  };
  onChangeConfirmPassword = (value: string) => {
    this.confirmPassword = value;
  };
  addressVerifier = (value: string) => {
    this.address = value;
  };

  setSelectedValue = (value: string) => {
    this.selectedValue = value;
  };
  render() {
    const {color1, color2} = this;
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[color1, color2]}>
        <ScrollView style={styles.TotalContainer}>
          <View style={styles.ColorTag}>
            <Text style={styles.ColorContent}>
              Select your favourite colors
            </Text>
            <ColorPicker
              onColorSelected={(color: string) => (this.color1 = color)}
              hideSliders={true}
              style={{height: 60, width: 60}}
            />
            <TriangleColorPicker
              onColorSelected={(color: string) => (this.color2 = color)}
              hideSliders={true}
              style={{height: 60, width: 60}}
            />
          </View>
          <ScrollView style={styles.ViewTag}>
            <View style={styles.Heading}>
              <Text style={styles.TextTag}>Sign Up</Text>
              <Text style={styles.TextContent}>
                Please fill in this form to create an account!
              </Text>
            </View>
            <View style={styles.FormMainTag}>
              <TextInput
                placeholder="First Name"
                style={styles.NameTag}
                value={this.firstName}
                onChangeText={this.onChangeFirstName}
              />
              <TextInput
                placeholder="Last Name"
                style={styles.NameTag}
                value={this.lastName}
                onChangeText={this.onChangeLastName}
              />

              <TextInput
                placeholder="Mobile Number"
                keyboardType="numeric"
                style={styles.InputCommonTag}
                value={this.mobileNumber}
                onChangeText={this.onChangeNumber}
              />
              <TextInput
                placeholder="Email"
                style={styles.InputCommonTag}
                value={this.email}
                onChangeText={this.onChangeEmail}
              />
              <TextInput
                placeholder="Password"
                style={styles.InputCommonTag}
                value={this.password}
                onChangeText={this.onChangePassword}
              />
              <TextInput
                placeholder="Confirm Password"
                style={styles.InputCommonTag}
                value={this.confirmPassword}
                onChangeText={this.onChangeConfirmPassword}
              />
            </View>
            <View style={styles.Options}>
              <Text style={styles.TextContent}> Select your gender</Text>
              {['Male', 'Female', 'Other'].map(item => {
                return (
                  <View key={item} style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.circle}
                      onPress={() => (this.selectedOption = item)}>
                      {this.selectedOption === item && (
                        <View style={styles.checkedCircle} />
                      )}
                    </TouchableOpacity>

                    <Text style={styles.TextContent}>{item}</Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.PickerContainer}>
              <Text style={styles.TextContent}>Select your branch</Text>
              <Picker
                selectedValue={this.selectedValue}
                style={styles.Picker}
                onValueChange={itemValue => this.setSelectedValue(itemValue)}>
                <Picker.Item label="CSE" value="CSE" />
                <Picker.Item label="ECE" value="ECE" />
                <Picker.Item label="EEE" value="EEE" />
                <Picker.Item label="MECH" value="MECH" />
              </Picker>
            </View>
            <View style={styles.PickerContainer}>
              <Text style={styles.TextContent}>DOB</Text>
              <DatePicker
                style={{width: '30%'}}
                date={this.date}
                placeholder="dd/mm/yyyy"
                format="DD-MM-YYYY"
                minDate="01-01-2020"
                maxDate="01-01-2025"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                customStyles={{
                  dateInput: {
                    padding: 0,
                    marginLeft: 0,
                    width: 30,
                    height: 30,
                  },
                }}
                onDateChange={(date: any) => {
                  this.date = date;
                }}
              />
            </View>
            <View style={styles.PickerContainer}>
              <Text style={styles.TextContent}>Enter your address </Text>
              <TextInput
                style={styles.TextArea}
                onChangeText={this.addressVerifier}
                placeholder="Type your address here!.... "
              />
            </View>

            <View style={styles.TermsAndConditions}>
              <CheckBox />
              <Text style={styles.TextContent}>
                I acceptTerms of Use & Privacy Policy
              </Text>
            </View>
            <View>
              <Button
                title="Sign Up"
                onPress={() => Alert.alert('Submitted')}
              />
            </View>
          </ScrollView>
        </ScrollView>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  TotalContainer: {
    padding: 16,
  },
  ColorContent: {
    color: 'white',
    fontSize: 16,
  },
  TextArea: {
    backgroundColor: '#f2f2f2',
    height: 40,
    borderColor: 'grey',
  },
  NameTag: {
    padding: 6,
    marginTop: 8,
    backgroundColor: '#f2f2f2',
    height: 40,
    width: '45%',
    borderRadius: 4,
  },
  InputCommonTag: {
    flexGrow: 1,
    borderRadius: 4,
    padding: 6,
    marginTop: 8,
    backgroundColor: '#f2f2f2',
    height: 40,
    width: '95%',
  },
  ViewTag: {
    backgroundColor: 'white',
    padding: 24,
  },
  FormMainTag: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  ColorTag: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Heading: {
    paddingBottom: 6,
    borderColor: '#f2f2f2',
    borderBottomWidth: 1,
  },
  TextTag: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  TextContent: {
    fontSize: 16,
    color: 'grey',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    marginRight: 2,
    height: 14,
    width: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  checkedCircle: {
    width: 8,
    height: 8,
    borderRadius: 7,
    backgroundColor: 'grey',
  },
  Options: {
    marginTop: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  Picker: {
    width: '30%',
    borderColor: 'grey',
    borderRadius: 4,
    borderWidth: 1,
  },
  PickerContainer: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  TermsAndConditions: {
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
  },
});
export default SignInForm;
