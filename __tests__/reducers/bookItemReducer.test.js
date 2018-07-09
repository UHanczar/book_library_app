import bookItemReducer from '../../src/reducers/bookItemReducer';
import {
  FETCH_BOOK_ITEM,
  FETCH_BOOK_ITEM_SUCCESS,
  FETCH_BOOK_ITEM_ERROR,
  REMOVE_ITEM,
  ASSIGN_BOOK,
  UNASSIGN_BOOK,
  ASSIGN_BOOK_SUCCESS,
  UNASSIGN_BOOK_SUCCESS,
  ASSIGN_BOOK_ERROR,
  UNASSIGN_BOOK_ERROR,
  RATE_ITEM_SUCCESS
} from '../../src/actions/types';

describe('bookItemReducer tests', () => {
  it('should set loading property to true, when fetch request was sent', () => {
    expect(bookItemReducer({
      loading: false,
      assigning: false,
      book: null
    }, { type: FETCH_BOOK_ITEM })).toEqual({
      loading: true,
      assigning: false,
      book: null
    });
  });

  it('should load book list and set load to false', () => {
    expect(bookItemReducer({
      loading: true,
      assigning: false,
      book: null
    }, {
      type: FETCH_BOOK_ITEM_SUCCESS,
      payload: {
        name: 'book'
      }
    })).toEqual({
      loading: false,
      assigning: false,
      book: {
        name: 'book'
      }
    });
  });

  it('should set load to false, when error occurs', () => {
    expect(bookItemReducer({
      loading: true,
      assigning: false,
      book: null
    }, {
      type: FETCH_BOOK_ITEM_ERROR
    })).toEqual({
      loading: false,
      assigning: false,
      book: null
    });
  });

  it('should remove book on unMountingComponent', () => {
    expect(bookItemReducer({
      loading: false,
      assigning: false,
      book: 'book'
    }, {
      type: REMOVE_ITEM
    })).toEqual({
      loading: false,
      assigning: false,
      book: null
    });
  });

  it('should not change state, when unregistered action was dispatched', () => {
    expect(bookItemReducer({
      loading: false,
      assigning: false,
      book: 'book'
    }, {
      type: 'FETCH_SOMETHING'
    })).toEqual({
      loading: false,
      assigning: false,
      book: 'book'
    });
  });

  it('should set assigning to true, when book assigning starts', () => {
    expect(bookItemReducer({
      loading: false,
      assigning: false,
      book: null
    }, {
      type: ASSIGN_BOOK
    })).toEqual({
      loading: false,
      assigning: true,
      book: null
    });
  });

  it('should set unassigning to true, when book unassigning starts', () => {
    expect(bookItemReducer({
      loading: false,
      assigning: false,
      book: null
    }, {
      type: UNASSIGN_BOOK
    })).toEqual({
      loading: false,
      assigning: true,
      book: null
    });
  });

  it('should set set book properly, when assign starts', () => {
    expect(bookItemReducer({
      loading: false,
      assigning: true,
      book: null
    }, {
      type: ASSIGN_BOOK_SUCCESS,
      payload: {
        name: 'book',
        isAvailable: false
      }
    })).toEqual({
      loading: false,
      assigning: false,
      book: {
        name: 'book',
        isAvailable: false
      }
    });
  });

  it('should set set book properly, when unassign starts', () => {
    expect(bookItemReducer({
      loading: false,
      assigning: true,
      book: null
    }, {
      type: UNASSIGN_BOOK_SUCCESS,
      payload: {
        name: 'book',
        isAvailable: true
      }
    })).toEqual({
      loading: false,
      assigning: false,
      book: {
        name: 'book',
        isAvailable: true
      }
    });
  });

  it('should set set assigning to false, when unassign fails', () => {
    expect(bookItemReducer({
      loading: false,
      assigning: true,
      book: null
    }, {
      type: ASSIGN_BOOK_ERROR
    })).toEqual({
      loading: false,
      assigning: false,
      book: null
    });
  });

  it('should set set unassigning to false, when unassign fails', () => {
    expect(bookItemReducer({
      loading: false,
      assigning: true,
      book: null
    }, {
      type: UNASSIGN_BOOK_ERROR
    })).toEqual({
      loading: false,
      assigning: false,
      book: null
    });
  });

  it('should set book rating properly', () => {
    expect(bookItemReducer({
      loading: false,
      assigning: false,
      book: {
        name: 'book',
        isAvailable: false,
        ratingData: []
      }
    }, {
      type: RATE_ITEM_SUCCESS,
      payload: [{ rating: '4' }]
    })).toEqual({
      loading: false,
      assigning: false,
      book: {
        name: 'book',
        isAvailable: false,
        ratingData: [{ rating: '4' }]
      }
    });
  });

  it('should not change state, when no action was dispatched', () => {
    expect(bookItemReducer()).toEqual({
      loading: false,
      book: null,
      assigning: false
    });
  });
});
