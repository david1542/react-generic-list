import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const itemRenderer = (item) => (props) => {
  const { checkedValue, onClick } = props;

  const domId = item.id + item.title;
  return (
    <Container>
      <label htmlFor={domId}>
        {item.title}
      </label>
      <input
        id={domId}
        type="checkbox"
        checked={checkedValue === item.value}
        onChange={() => onClick(item)}
      />
    </Container>
  );
}

const selector = (state, props) => ({
  checkedValue: state.checkedValue
})


const onClick = function (item) {
  this.setState({
    checkedValue: item.value,
  })
}

const checkboxListOptions = {
  initialState: {
    checkedValue: null
  },
  options: [
    {
      id: 1,
      title: 'Pizza',
      value: 'pizza'
    },
    {
      id: 2,
      title: 'Facebook',
      value: 'facebook'
    },
    {
      id: 3,
      title: 'Yahoo',
      value: 'yahoo'
    }
  ]
}

checkboxListOptions.options = checkboxListOptions.options.map(option => {
  return {
    ...option,
    template: itemRenderer,
    selector: selector,
    onClick
  }
})

export default checkboxListOptions;