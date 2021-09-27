export const initialState = {
  status: {
    token: '',
    loginStatus: false,
  },
  orderItem: {
    loading: true,
    data: {
      totalPages: 0,
      currentPage: 0,
      content: [],
    },
    err: null,
  },
  orderIdItem: {
    loading: true,
    data: {
      id: 0,
      itemName: '',
    },
    err: null,
  },
}
