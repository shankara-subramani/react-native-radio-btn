# React Native Radio Button

Fork of: [react-native-flexi-radio-button](https://github.com/thegamenicorus/react-native-flexi-radio-button)

[Example Expo Snack](https://snack.expo.io/@i_shankar/react-native-radio-btn)

## Installation
```
npm i react-native-radio-btn
```
or
```
yarn add react-native-radio-btn
```

## Usage

```
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

onSelect(index, value){
  this.setState({
    text: `Selected index: ${index} , value: ${value}`
  })
}

render(){
  return(
    <View style={styles.container}>
    
      <RadioGroup
        onSelect = {(index, value) => this.onSelect(index, value)}
      >
        <RadioButton value={'item1'} >
          <Text>This is item #1</Text>
        </RadioButton>

        <RadioButton value={'item2'}>
          <Text>This is item #2</Text>
        </RadioButton>

        <RadioButton value={'item3'}>
          <Text>This is item #3</Text>
        </RadioButton>
      </RadioGroup>
      
      <Text style={styles.text}>{this.state.text}</Text>
      
    </View>
  )
}
```

### Configuration
##### Radio Group:
| Property | Type | Default | Description |
|---------------|----------|-------------|----------------------------------------------------------------|
| size | number | 20 | Size of the radio button |
| thickness | number | 1 | width of radio button border |
| color | string | '#007AFF' | color of radio button |
| activeColor | string | null | color of radio button when selected|
| highlightColor | string | null | background of radio button after selected |
| selectedIndex | number | null | default selected index of radio group, can be changed to new value or to null for clear selection  |
| style | object | null | Custom styles to be applied if supplied |
| onSelect | function(index, value) | null | function to be invoked when radio button is selected |

##### Radio Button:

| Property | Type | Default | Description |
|-----------|--------|---------|--------------------------------------------|
| value | any |  null | value will be passed on callback `onSelect` as second argument  |
| style | object | null | Styles to be applied on 'RadioButton' component |
| color | string |  same as 'RadioGroup' component | color of radio dot  |
| disabled | bool |  false | If true, disable all interactions for this component.  |
| displayTextColor | string | '#000' | color of label text |
| displayTextActiveColor | string | '#fff' | color of label text when selected |
| prefixColor | string | '#000' | color of prefixes |
| prefixActiveColor | string | '#fff' | color of prefixes when selected |
| prefixWithAlphabet | boolean | false | prefixes label with alphabets (a,b,...z) |
| prefixWithNumbers | boolean | false | prefixes label with numbers (1,2...n) |
