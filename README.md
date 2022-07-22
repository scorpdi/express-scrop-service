# express-scrop-service

#### 介绍

nodejs项目

#### 软件架构

nodejs
express
sequelize(ORM)
mysql



#### 安装教程

1.  xxxx
2.  xxxx
3.  xxxx

#### 使用说明

1.  xxxx
2.  xxxx
3.  xxxx

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request

## sequelize

```bash
npx sequelize-cli model:generate --name User --attributes userName:string,passWord:string,userId:uuid,token:string,openid:string
# 运行迁移
 npx sequelize-cli db:migrate
# 撤回迁移
 sequelize-cli db:migrate:undo

#  {
# 	allowNull: false, // 是否允许为空
# 	autoIncrement: true, // 字段是否是自增类型
# 	primaryKey: true, // 字段是否是主键
# 	type: Sequelize.INTEGER // 字段是整型
#     defaultValue: null, // 字段默认值
#     unique: true // 唯一索引
#   }
```
## docker 发布
```
docker build --rm -t node-service-20220714 .
docker run -d -p 3000:3000 --name node-service node-service-20220714
```
## 记录
```
# 查询对应端口号的进程
lsof -i tcp:3000 
# 杀进程
kill PID
```