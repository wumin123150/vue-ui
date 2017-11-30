import Mock from 'mockjs'

Mock.setup({
  timeout: '350-600'
})

const token = {
  success: true,
  code: 200,
  message: 'Success',
  data: '1'
}

Mock.mock(/\/login/, 'post', () => token)

export default Mock
