import React, { Component } from 'react';
import { CardSection } from './common';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { selectLibrary } from '../actions'

class ListItem extends Component{

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded){
      return (
        <Text>
          {library.description}
        </Text>
      )
    }
  }

  render() {
    const { titleStyle } = styles;
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
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded }
}

export default connect(mapStateToProps, { selectLibrary })(ListItem);
