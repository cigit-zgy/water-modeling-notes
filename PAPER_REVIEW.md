# Paper Review 规范

## 1. 目的

`Paper Review` 是本博客的周度研究雷达。目标是持续筛选能够提高研究判断、方法设计和建模能力的高水平论文，重点覆盖污水处理动力学模型、活性污泥模型、Hybrid ODE / Neural ODE、科学机器学习、动态系统、LLM 与 scientific agents。

本项目优先评价**方法可迁移性**，不以“是否研究污水处理”作为主要相关性标准。来自动力系统、化学工程、系统生物学、Scientific ML 或 Scientific AI 的论文，只要能够明确映射到当前研究问题，可以高于普通污水处理应用论文。

本文件是 Paper Review 的唯一项目级规则来源。检索范围、相关性定义、评分、证据边界、写作结构和文件组织如需调整，必须先修改本文件。博客全局构建、排版和可访问性规则仍由仓库现有基础设施管理。

## 2. 两阶段证据

### Abstract review

每期 `index.mdx` 首先依据出版商元数据和摘要完成筛选与初评。允许写：摘要明确给出的研究问题、方法、数据/实验、指标和结果，以及基于这些事实作出的初步方法迁移判断。

禁止根据常识补全摘要未报告的模型结构、训练细节、验证方案、limitations 或因果机制；摘要中的作者结论应表述为“作者报告/摘要显示”，不能写成已独立验证的事实。

### Full-text review

用户补充全文后，每篇论文创建一个独立的 `papers/*.mdx`。全文阶段可以分析模型结构、公式、数据、实验设计、baselines、ablation、uncertainty、limitations、reproducibility 和图表。主文件只更新全文状态、F-score、最终一句话判断和子文件链接，避免重复写两遍。

## 3. 检索范围

核心水与环境期刊：Nature Water、Water Research、Environmental Science & Technology、Environmental Science & Technology Letters。

跨领域方法期刊：Nature Computational Science、Nature Machine Intelligence、Nature Chemical Engineering、Nature Methods、Nature Communications、Science Advances、PNAS。必要时可纳入其他方法高度相关的一流期刊；NeurIPS、ICML、ICLR 可作为尚未进入期刊的方法前沿补充。

期刊范围用于建立候选池，不设期刊配额。某一期没有合适论文时，不为覆盖期刊而降低标准。

## 4. 相关性门槛

候选论文至少要能映射到以下一个研究轴：

1. mechanistic wastewater / bioprocess modelling；
2. ASM、动力学 ODE/DAE、reaction-process models；
3. Hybrid ODE、Neural ODE、differentiable mechanistic models；
4. system identification、model reduction、structure discovery、operator learning；
5. parameter inference、uncertainty、data assimilation；
6. optimization、MPC、adaptive experimental design；
7. 带物理/机理结构的 Scientific ML；
8. scientific agents、tool use、knowledge graph、structured scientific representation；
9. trustworthy、reproducible、auditable scientific AI。

相关性分级：

| Level | 定义 |
| --- | --- |
| High | 方法可直接映射到现有研究任务，只需有限概念改造。 |
| Medium | 经过一次实质性方法改造后可迁移。 |
| Low | 研究对象相近，但方法对当前能力增量有限。 |
| Exclude | 无法指出明确的方法或科学问题映射。 |

普通预测论文如果主要贡献只是常规模型替换或小幅精度提升，即使研究 WWTP，也通常不进入 Top 10。

## 5. 周度筛选

常规检索顺序：最近 7 天 → 不足时扩展至 30 天 → 再不足时扩展至 90 天。不为凑满 10 篇降低质量阈值，因此某一期允许少于 10 篇。

目标构成约为：跨领域方法与 Scientific AI 占 60–70%，水/环境领域占 30–40%。这是目标分布，不是固定配额。

首期允许少量当年重要论文超出 90 天窗口，用于建立方法基线；必须在主文件中明确标记。后续不常规使用该例外。

## 6. 评分

采用 100 分制：

| Dimension | Weight | 判断问题 |
| --- | ---: | --- |
| Methodological novelty | 25 | 是否存在实质性方法创新？ |
| Transferability | 25 | 是否能提高当前研究的方法能力？ |
| Scientific rigor | 20 | 当前证据阶段下，验证设计是否可信？ |
| Research leverage | 15 | 是否可能形成新的研究问题、workflow 或技术路线？ |
| Venue quality | 10 | 期刊/会议在相应领域是否足够强？ |
| Reproducibility | 5 | 是否提供代码、数据或足够实现信息？ |

维护两个分数：`A-score` 为摘要阶段初筛分数，并作为当期历史选择依据保留；`F-score` 在全文阅读后给出，可以显著高于或低于 A-score。

85–100：Must Read；75–84：Recommended；65–74：Watch；低于 65 通常不入选。A-score 是 triage score，不代表对全文科学质量的最终判断。

## 7. 写作规格

### 周度主文件

路径：`src/content/paper-review/YYYY-MM-DD/index.mdx`。标题必须包含日期。

固定结构：本期概览 → 本期论文总表 → 本期研究地图 → Top 3 → 逐篇摘要阶段介绍 → 跨论文方法观察 → 全文补充状态。

每篇摘要阶段介绍通常控制在 **300–500 个中文字**，回答五件事：研究问题、核心方法、摘要报告的主要结果、为什么值得当前研究关注、全文阶段最需要核查什么。避免逐句改写 abstract。

### 全文子文件

路径：`src/content/paper-review/YYYY-MM-DD/papers/NN-firstauthor-short-topic.mdx`。

通常 **800–1,200 个中文字**，确有公式、实验设计或复杂模型结构时可扩展至约 1,500 字。建议结构：基本信息、科学问题、方法与模型结构、数据与实验设计、主要结果、方法创新、可迁移关系、局限与风险、F-score 与最终判断。

全文子文件不重复主文件的摘要介绍。

## 8. 文件组织

每期编号按照首次周度筛选顺序固定，不因 F-score 改变而重编号。

```text
src/content/paper-review/2026-08-30/
├── index.mdx
└── papers/
    ├── 01-firstauthor-short-topic.mdx
    └── ...
```

全文 PDF 属于研究材料，不提交公开博客仓库。推荐本地结构：

```text
paper-review-local/2026-08-30/
└── 01-firstauthor-short-topic/
    └── paper.pdf
```

若全文通过 ChatGPT / File Library 提供，则上传文件本身作为对应全文 review 的证据来源。

## 9. 维护原则

本文件只保存会反复影响 Paper Review 判断的规则，避免累积一次性编辑偏好。任何隐藏评分规则、隐含期刊优先级或临时写作要求都不能覆盖本文件。