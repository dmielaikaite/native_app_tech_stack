import React, { Component } from 'react';
import { CardSection } from './common';
import { Text, View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { selectLibrary } from '../actions'

class ListItem extends Component{

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    const { descriptionStyle } = styles;
    if (expanded){
      return (
        <CardSection>
          <Text style={descriptionStyle}>
            {library.description}
          </Text>
        </CardSection>
      )
    }
  }

  render() {
    const { titleStyle, descriptionStyle } = styles;
    const { title, id } = this.props.library;

    return(
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 28,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded }
}

export default connect(mapStateToProps, { selectLibrary })(ListItem);
