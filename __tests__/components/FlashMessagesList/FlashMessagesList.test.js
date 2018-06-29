import React from 'react';

import FlashMessagesList from '../../../src/components/FlashMessagesList/FlashMessagesList';

jest.doMock('../../../src/components/FlashMessage/FlashMessage', () => {
  const FlashMessageMock = () => <div />;
  return FlashMessageMock;
});

jest.mock('redux-flash', () => {
  const flashMessageType = [{
    message: 'Success',
    isError: false,
    id: '1'
  }];
  return flashMessageType;
});

describe('Sidebar tests', () => {
  let wrapper;
  let flash;
  let removeMessage;

  beforeEach(() => {
    removeMessage = jest.fn();
  });

  describe('Sidebar props passing', () => {
    beforeEach(() => {
      flash = [{
        message: 'Success',
        isError: false,
        id: '1'
      }];

      wrapper = mount(
        <FlashMessagesList
          flash={flash}
          removeMessage={removeMessage}
        />);
    });

    it('should component to exist', () => {
      expect(wrapper).toBeDefined();
    });

    it('should pass props correctly', () => {
      expect(wrapper.props().flash.length).toBe(1);
    });
  });

  describe('Sidebar condition rendering', () => {
    it('should set FlashMessage bgColor to #f4511e when error occurs', () => {
      flash = [{
        message: 'Error',
        isError: true,
        id: '1'
      }];

      wrapper = mount(
        <FlashMessagesList
          flash={flash}
          removeMessage={removeMessage}
        />);

      expect(wrapper.find('FlashMessage').props().bgColor).toBe('#f4511e');
    });

    it('should set FlashMessage bgColor to #1de9b6 if there is no error', () => {
      flash = [{
        message: 'Success',
        isError: false,
        id: '1'
      }];

      wrapper = mount(
        <FlashMessagesList
          flash={flash}
          removeMessage={removeMessage}
        />);

      expect(wrapper.find('FlashMessage').props().bgColor).toBe('#1de9b6');
    });
  });
});
