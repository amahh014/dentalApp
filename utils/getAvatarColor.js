export default letter => {
    const charCode = letter.charCodeAt();
    if (charCode >= 65 && charCode <= 78) {
      return {
        background: '#F5D6D9',
        color: '#F38181',
      };
    }
    if (charCode >= 79 && charCode <= 84) {
      return {
        background: '#F8ECD5',
        color: '#F1A32F',
      };
    }
    if (charCode >= 85 && charCode <= 90) {
      return {
        background: '#DAD5F8',
        color: '#816CFF',
      };
    }
    return {
      background: '#E9F5FF',
      color: '#2A86FF',
    };
  };