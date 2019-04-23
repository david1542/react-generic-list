import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  color: ${props => props.color || 'black'};
  font-size: 15px;
  font-weight: bold;
`;

const itemRenderer = (item) => (props) => {
  return (
    <Link
      href={item.href}
      target="_blank"
      color={props.color}
    >
      {item.title}
    </Link>
  );
}

const selector = (state, props) => ({
  color: state.itemColor
})

const navigationListOptions = {
  initialState: {
    itemColor: 'red'
  },
  options: [
    {
      id: 1,
      title: 'Google',
      href: 'http://www.google.com'
    },
    {
      id: 2,
      title: 'Facebook',
      href: 'http://www.facebook.com'
    },
    {
      id: 3,
      title: 'Yahoo',
      href: 'http://www.yahoo.com'
    }
  ]
}

navigationListOptions.options = navigationListOptions.options.map(option => {
  return {
    ...option,
    template: itemRenderer,
    selector: selector
  }
})

export default navigationListOptions;