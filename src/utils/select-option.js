export const selectStyles = {
    control: (provided ,state) => ({
      ...provided,
      width: "850px",
      height: "46px",
      borderRadius: 22,
      padding: "0 8px",
      borderColor: state.isFocused ? '#d8d8d8' : '#d8d8d8',
      "&:hover": {
        borderColor: "#d8d8d8",
        boxShadow: "none"
      },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      width: 0
    }),
    menu: (provided) => ({
      ...provided,
      top: 40,
      borderRadius: 10,
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0,
      borderRadius: 10,
    }),
    option: (provided, state) => ({
      ...provided,
      padding: '10px',
      backgroundColor: state.isFocused ? 'black' : '#fff',
      color: state.isFocused ? '#fff' : 'black',
      "&:hover": {
        backgroundColor: "black",
        color: "white"
      },
    })
}

export const instagramIdOption = [
    { value: '@rkdgus_9', label: '@rkdgus_9' },
    { value: 'naver.com', label: 'naver.com' },
    { value: 'daum.net', label: 'daum.net' },
]