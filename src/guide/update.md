# **更新记录和未来计划** 

**未来发布计划**

- v1.3.0
  - 每个中间节点都可以自定义表单，多审批节点的，对应不同表单填写
  - 设计器考虑bpmn


**正在执行中的计划** 注意事项：工具包路径调整，新增升级脚本
  - 人员解偶，新增人员表
  - jpa扩展
  - oracle适配
  - 抄送
  - 会签，票签
  - 加减签
  - 转办完善
  - vue3版本设计器


**已完成计划** 
- v1.1.91  2024-05-17
  - 修复设置默认填充器时候，判空错误


- v1.1.90  2024-05-08 【注意事项：执行1.1.90版本sql】
  - orm支持mybatis-plus扩展
  - 多租户字段隔离提供全局配置，自动获取
  - 增加软删除可以配置化
  - 新增三个测试模块

- v1.1.7 2024-04-27
  - 启动流程时，支持第二个节点为网关节点的情况
  - 开始监听器和结束监听器新增返回当前任务和新建任务集合
  - 修复终止流程bug

- v1.1.6 2024-04-23
  - 支持转办功能
  - 任务自动流转到创建人
  - 考虑流程终止功能
  - 修复流程流转异常

- v1.1.51 2024-04-19
  - 实体类支持序列化
  - 修复java17以上@Resource包路径变更的问题

- v1.1.5
  - 支持自定义填充
  - 新增配置文件，部分功能可配置
  - 重构代码，insService.skip标识即将删除，改用taskService.skip
  - 引入日志门面

- v1.1.42
  - 修复并行网关后面没有中间节点
  - 修复开始任务记录代办，为保存流程状态
  - 新增链式查询排序提供id排序
  - 新增历史任务记录结束节点
  - 新增赋值流程记录创建更新时间
  - 优化表实体类链式赋值
  - 代办已办查询标记为即将删除, 已挪到业务系统中

- v1.1.41
  - 修复已经设置后续节点动态权限后，办理时未生效问题；
  - 枚举扩展getByKey方法 @Holly_Git
  - 调整实例类结构，方便链式写法

- v1.1.4
  - 修复监听器部分判空bug  感谢@Holly_Git
  - 新增创建任务监听器
  - 修改flow_node监听类型和监听路径字段长度
  - 新增监听器生命周期概念，完善文档
  - 重构流程开启流程和流程办理代码
  - 开始节点也能记录到历史任务记录中

- v1.1.3
  - 新增权限监听器，办理中动态设置权限  感谢@Holly

- v1.1.2
  - 流程定义新增复制按钮
  - 补齐sql脚本，完善文档
  - 跳转条件获取方式变更为流程变量  感谢@Holly
  - 监听器变量新增返回结点信息    感谢@Holly
  - 新增根据流程定义和当前节点code获取下一节点api接口.   感谢@Holly
  - 删除多余的字段和代码

- v1.1.0
  - 可以跳转指定节点
  - 增加全局变量
  - 增加监听器
  - 重构代码，解偶orm，方便扩展不同orm和数据，新增代码示例
  - 修复并行网关流程流程图显示错误问题


- v1.0.0
  - 完善流程设计器和流程图，新增vue3版本
  - 放弃js引擎，自研条件表达式
  - 新增支持条件表达式
  - 可退回到任意节点
  - 支持生成流程图 
  - 流程设计器开发
  - 互斥网关，并行网关（会签、或签）功能开发
  - 抽离spring生态依赖，支持solon，并且保持事务与业务系统一致
  - 支持代办任务和已办任务，通过权限标识过滤数据
  - 新增多租户模式
  - 原生提供排序
  - 原生提供分页查询
  - 项目上传中央仓库
  - 工作流模块抽取为独立项目，提供集成方式 
  - 已办任务和任务记录，审批页面中包含业务详情页面 
  - 提供代办任务、提供角色、部门等权限配置
  - 提供流程配置界面
  - 流程配置文件改为表单填报方式
  - 用户角色抽取出来 
  - 整理流程表，调整表名和字段名