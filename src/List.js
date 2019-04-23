import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class List extends Component {
  constructor(props) {
    super(props);

    if (props.data.initialState) {
      this.state = props.data.initialState;
    }

    this.createList = this.createList.bind(this);
  }

  createList(options) {
    return options.map(item => {
      const { template, selector, ...props } = item;
      const Template = template(props);
      const itemProps = selector(this.state, this.props);

      if (props.onClick) {
        props.onClick = props.onClick.bind(this);
      } 
      return (
        <Template
          key={item.id}
          {...itemProps}
          {...props}
        />
      )
    });
  }

  render() {
    const { data } = this.props;
    const items = this.createList(data.options);
    
    return (
      <Container>
        {items}
      </Container>
    );
  }
}