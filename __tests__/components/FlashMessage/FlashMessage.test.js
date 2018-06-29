import React from 'react';

import FlashMessage from '../../../src/components/FlashMessage/FlashMessage';

describe('Footer tests', () => {
  let wrapper;
  let message;
  let bgColor;
  let id;
  let removeMessage;

  beforeEach(() => {
    message = 'Flash message';
    bgColor = '#ffffff';
    id = '1';
    removeMessage = jest.fn();
    wrapper = mount(
      <FlashMessage
        message={message}
        bgColor={bgColor}
        id={id}
        removeMessage={removeMessage}
      />
    );
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should call removeMessage on close button click', () => {
    wrapper.find('.flash__message-item-close').simulate('click');
    expect(removeMessage.mock.calls.length).toBe(1);
  });
});
