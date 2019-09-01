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
import {RadioGroup, RadioButton} from 'react-native-radio-btn'

state = {
   radioItems: [
     {
       id: 1,
       label: 'Item 1',
       selected: false,
     },
     {
       id: 2,
       label: 'Item 2',
       selected: false,
     },
     {
       id: 3,
       label: 'Item 3',
       selected: false,
     },
   ],
 };

 onSelect(index, value) {
   console.log(`Selected index: ${index} , value: ${value}`);
 }

render(){
  return(
    <View style={styles.container}>

    <RadioGroup onSelect={(index, value) => this.onSelect(index, value)}>
        {this.state.radioItems.map((item, index) => {
          return (
            <RadioButton
              key={index}
              value={item.label}
              displayText={item.label}
              displayTextColor="#000"
              displayTextActiveColor="#fff"
              prefixColor="rgba(0, 0, 0, 0.4)"
              prefixActiveColor="rgba(0, 0, 0, 0.4)"
              prefixWithNumbers
            />
          );
        })}
      </RadioGroup>

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
