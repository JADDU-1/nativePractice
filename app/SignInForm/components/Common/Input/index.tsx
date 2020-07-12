import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {TextInput} from 'react-native';

type PropsType = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  styles: any;
};
// PropsType>
@observer
class InputTag extends Component<PropsType> {
  render() {
    const {placeholder, styles, value, onChange} = this.props;
    return (
      <TextInput
        placeholder={placeholder}
        style={styles}
        onChangeText={text => onChange(text)}
        defaultValue={value}
      />
    );
  }
}

export default InputTag;
