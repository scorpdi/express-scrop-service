# service-api

#### 介绍

node 服务

#### 软件架构

软件架构说明

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

#### 特技

1.  使用 Readme_XXX.md 来支持不同的语言，例如 Readme_en.md, Readme_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)

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