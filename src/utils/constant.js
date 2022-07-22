
/**
 * 数据返回code msg
 */
 const RESULT = {
  SUCCESS: {code: 200, msg: '成功'},
  ARG_ERROR: {code: 400, msg: '请求参数错误'},
  NO_LOGIN: {code: 401, msg: '未登录'},
  FORBIDDEN: {code: 403, msg: '无权限'},
  NOT_FOUND: {code: 404, msg: '未找到'},
  INTERNAL_ERROR: {code: 500, msg: '服务器内部错误'},
};

exports.RESULT = RESULT
