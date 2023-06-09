interface TagStyle {
  [key: string]: {
    textColor: string;
    bgColor: string;
  };
}
const tagStyle: TagStyle = {
  已報到佛七: {
    textColor: 'success',
    bgColor: 'success-10',
  },
  寮房已確認: {
    textColor: 'white',
    bgColor: 'primary',
  },
  已報名佛七: {
    textColor: 'primary',
    bgColor: 'primary-tint',
  },
  已取消: {
    textColor: 'neutral-80',
    bgColor: 'neutral-40',
  },
  已離單: {
    textColor: 'neutral-80',
    bgColor: 'neutral-40',
  },
  已取消掛單: {
    textColor: 'neutral-80',
    bgColor: 'neutral-40',
  },
  無故未報到: {
    textColor: 'neutral-80',
    bgColor: 'neutral-40',
  },
  已產出註冊連結: {
    textColor: 'secondary',
    bgColor: 'secondary-tint',
  },
  已註冊: {
    textColor: 'success',
    bgColor: 'success-10',
  },
  註冊連結失效: {
    textColor: 'danger',
    bgColor: 'danger-10',
  },
};

export default tagStyle;
