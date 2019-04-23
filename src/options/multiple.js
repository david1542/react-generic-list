import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const itemRenderer = (item) => (props) => {
  const { values, onClick } = props;

  const domId = item.id + item.title;
  const checked = values.some(val => val === item.value);
  
  return (
    <Container>
      <label htmlFor={domId}>
        {item.title}
      </label>
      <input
        id={domId}
        type="checkbox"
        checked={checked}
        onChange={() => onClick(item)}
      />
    </Container>
  );
}

const selector = (state, props) => ({
  values: state.values
})


const onClick = function (item) {
  const { values } = this.state;

  let newValues = values ? values.slice() : [];
  const checked = newValues.some(val => val === item.value);
  if (checked) {
    newValues = newValues.filter(val => val !== item.value);
  } else {
    newValues.push(item.value);
  }

  this.setState({
    values: newValues,
  })
}

const checkboxListOptions = {
  initialState: {
    values: []
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