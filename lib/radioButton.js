import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";

export default class RadioButton extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedIndex: nextProps.selectedIndex
    });
  }
  render() {
    var { children } = this.props;
    const alphabets = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];
    return (
      <View style={{ opacity: this.props.disabled ? 0.4 : 1 }}>
        <TouchableOpacity
          style={{
            color: "#fff !important"
          }}
          disabled={this.props.disabled}
          onPress={() =>
            this.context.onSelect(this.props.index, this.props.value)
          }
          underlayColor="white"
        >
          <View
            style={[
              styles.container,
              this.props.style,
              this.props.isSelected
                ? {
                    backgroundColor: "#E08036",
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: "#E08036",
                    margin: 4,
                    color: "#fff !important"
                }
                : {
                    backgroundColor: "#F3F3F3",
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: "#E3E3E3",
                    margin: 4
                }
            ]}
          >
            <View
              style={this.props.isSelected ? styles.item : styles.itemSelected}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                {this.props.prefixWithAlphabet ? (
                  <Text
                    style={{
                      color: `${
                        this.props.isSelected
                          ? this.props.prefixActiveColor
                          : this.props.prefixColor
                      }`,
                      fontSize: 16,
                      textTransform: "uppercase"
                    }}
                  >
                    {alphabets[this.props.index]}.
                  </Text>
                ) : null}
                {this.props.prefixWithNumbers ? (
                  <Text
                    style={{
                      color: `${
                        this.props.isSelected
                          ? this.props.prefixActiveColor
                          : this.props.prefixColor
                      }`,
                      fontSize: 16
                    }}
                  >
                    {this.props.index + 1}.
                  </Text>
                ) : null}

                <Text
                  style={{
                    color: `${
                      this.props.isSelected
                        ? this.props.displayTextActiveColor
                        : this.props.displayTextColor
                    }`,
                    fontSize: 16,
                    marginLeft: 8
                  }}
                >
                  {this.props.displayText}
                </Text>
                {children}
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

RadioButton.contextTypes = {
  onSelect: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  thickness: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  highlightColor: PropTypes.string
};

let styles = StyleSheet.create({
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#9813FF"
  },
  buttonText: {
    padding: 20,
    color: "white"
  },
  container: {
    flexGrow: 1,
    flexDirection: "row",
    padding: 10
  },
  radio: {
    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    color: "#fff"
  },
  itemSelected: {
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    color: "#fff"
  }
});
