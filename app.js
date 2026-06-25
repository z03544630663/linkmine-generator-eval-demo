(function () {
  var lang = localStorage.getItem("linkmine_lang") || "zh";
  var data = window.LINKMINE_STATIC_DATA;
  var activePanel = { supplierId: null, mode: null };
  var filter = "all";
  var apiBase = window.LINKMINE_API_BASE || "/api";

  var dictionary = {
    zh: {
      navJoint: "联合评测",
      navMethod: "评测方法",
      navCompare: "横向对比",
      navInquiry: "提交需求",
      heroKicker: "BitMain · DMA · LinkMine",
      heroTitle: "天然气发电机组联合评测",
      heroLead: "三方联合发起真实运行观察：同一气源、同一矿机负载、同一 LinkPlant 数据口径，记录不同主机厂方案在现场的持续表现。",
      observerSlot: "观察方席位",
      viewData: "查看数据",
      submitDemand: "提交需求",
      metricSuppliers: "主机厂",
      metricUnits: "接入机组",
      metricRuntime: "日历时间",
      metricSite: "场景",
      metricScene: "矿机负载",
      jointTitle: "从真实负载里看机组方案",
      jointLead: "本次活动围绕 LinkMine 加拿大天然气资源与矿机负载场景展开，以现场连续运行、电量结算和阶段性报告作为观察基础。",
      jointOneEyebrow: "项目模式",
      jointOneTitle: "真实运行，不做静态展示",
      jointOneBody: "合格主机厂以自有设备接入现场，机组输出并被矿机负载有效消纳后，按确认口径形成运行与结算记录。",
      jointTwoEyebrow: "联合角色",
      jointTwoTitle: "BitMain、DMA、LinkMine 协同发起",
      jointTwoBody: "BitMain 参与矿机负载与产业链协同，DMA 参与行业观察与内容发布，LinkMine 提供场景、数据采集和项目组织。",
      jointThreeEyebrow: "边界说明",
      jointThreeTitle: "数据观察，不做采购背书",
      jointThreeBody: "页面展示经授权的数据、阶段报告和技术资料，不构成设备认证、采购承诺或指定供应商推荐。",
      methodTitle: "评测只统一场景，不统一方案",
      methodLead: "项目统一天然气资源、矿机负载、现场运维规则、环境记录和 LinkPlant 数据口径；主机厂自行提交技术路线和机组方案。",
      galleryTitle: "现场记录优先",
      galleryLead: "页面展示的核心不是宣传语，而是累积消纳电量、发电功率、效率、在线率、停机原因和阶段性记录。",
      feedOneLabel: "Settlement",
      feedOneValue: "累积消纳电量",
      feedTwoLabel: "LinkPlant",
      feedTwoValue: "功率 / 效率 / 在线率",
      feedThreeLabel: "Stage Report",
      feedThreeValue: "阶段观察报告",
      brandsTitle: "参与评测的主机厂",
      brandsLead: "所有参赛主机厂统一展示，便于一眼看到当前进入或拟进入评测流程的厂商。",
      compareTitle: "发电机组横向对比",
      compareLead: "比赛统一集装箱尺寸（例如 40 尺高柜）和动力舱尺寸（例如 5.6 米），不锁定单一功率段；公开字段聚焦输出发电功率、发电效率、运行小时、在线率、累积发电量、停机和响应。",
      filterAll: "全部",
      filterRunning: "运行中",
      filterPending: "待接入",
      thSupplier: "主机厂",
      thUnit: "机组",
      thModel: "型号",
      thStatus: "状态",
      thPower: "输出发电功率",
      thEfficiency: "发电效率",
      thHours: "运行小时",
      thOnline: "在线率",
      thEnergy: "累积发电量",
      thOutage: "停机",
      thResponse: "响应",
      thAction: "操作",
      details: "查看详情",
      routeButton: "技术路线",
      close: "收起",
      running: "运行中",
      pending: "待接入",
      inquiryTitle: "提交项目需求",
      inquiryLead: "用于发电机组、矿机、电力消纳和天然气资源项目对接。提交后由后台统一管理。",
      labelCompany: "公司名称",
      labelContact: "联系人",
      labelEmail: "联系邮箱",
      labelLocation: "项目所在地",
      labelCapacity: "计划容量",
      labelMessage: "需求说明",
      privacyNote: "提交信息仅用于项目匹配和合作方沟通，不构成交易、设备推荐或性能保证。",
      formSubmit: "提交",
      footerJoint: "联合评测",
      footerMethod: "评测方法",
      footerData: "运行数据",
      footerInquiry: "项目需求",
      required: "请填写此项。",
      emailInvalid: "请填写有效邮箱。",
      submitOk: "需求已提交。",
      submitLocal: "接口未连接，已保存为本地演示记录。",
      empty: "暂无符合条件的机组。",
      techRoute: "技术路线",
      liveStatusTitle: "当前运行状态",
      liveStatusLead: "以下字段展示同一供应商两台机组的当前运行状态，实际上线后由 LinkPlant 或现场传感器接入。",
      monitorTitle: "监控画面",
      monitorCopy: "监控画面以现场摄像头接入和授权展示范围为准。",
      loadRate: "负载情况",
      outputStatus: "输出发电功率",
      voltage: "输出电压",
      current: "输出电流",
      frequency: "输出频率",
      powerFactor: "功率因数",
      rpm: "发动机转速",
      gasPressure: "燃气压力",
      coolantTemp: "冷却水温度",
      oilPressure: "机油压力",
      exhaustTemp: "涡前排气温度",
      manifoldPressure: "进气歧管压力",
      manifoldTemp: "进气歧管温度",
      continuousHours: "持续运行时间",
      runningRemark: "运行备注",
      coreConfig: "核心配置",
      partsConfig: "零配件品牌型号",
      routeDescription: "技术路线描述",
      factoryInfo: "主机厂参测信息",
      factoryName: "主机厂名称",
      participantType: "参测类型",
      participationStatus: "参测状态",
      proposalTitle: "技术方案",
      proposalSummary: "方案摘要",
      proposalFile: "方案附件",
      maintenance: "保养与质保",
      quote: "同配置报价",
      unitPrefix: "机组 ",
      kw: " kW"
    },
    en: {
      navJoint: "Joint evaluation",
      navMethod: "Method",
      navCompare: "Comparison",
      navInquiry: "Submit demand",
      heroKicker: "BitMain · DMA · LinkMine",
      heroTitle: "Joint natural gas generator evaluation",
      heroLead: "A joint field observation using the same gas source, the same mining load and the same LinkPlant data framework to record sustained performance across OEM solutions.",
      observerSlot: "Observer slot",
      viewData: "View data",
      submitDemand: "Submit demand",
      metricSuppliers: "Suppliers",
      metricUnits: "Connected units",
      metricRuntime: "Calendar time",
      metricSite: "Scenario",
      metricScene: "Mining load",
      jointTitle: "Evaluating generator solutions under real load",
      jointLead: "The program is built around LinkMine's Canadian natural gas resources and mining load scenario, using continuous operation, energy settlement and staged reports as the observation basis.",
      jointOneEyebrow: "Program model",
      jointOneTitle: "Real operation, not a static display",
      jointOneBody: "Qualified OEMs connect their own equipment to the site. Output that is effectively consumed by the mining load becomes the basis for operating and settlement records.",
      jointTwoEyebrow: "Joint roles",
      jointTwoTitle: "BitMain, DMA and LinkMine jointly initiate",
      jointTwoBody: "BitMain supports the mining-load and industry-chain context, DMA supports industry observation and publishing, and LinkMine provides the site, data capture and project organization.",
      jointThreeEyebrow: "Boundary",
      jointThreeTitle: "Data observation, not procurement endorsement",
      jointThreeBody: "The page shows authorized data, stage reports and technical files. It is not equipment certification, a purchase commitment or a preferred-supplier recommendation.",
      methodTitle: "The scenario is fixed. The solutions are not.",
      methodLead: "The program standardizes natural gas resources, mining load, field operation rules, environmental records and the LinkPlant data framework. OEMs submit their own technical routes and generator solutions.",
      galleryTitle: "Field records first",
      galleryLead: "The page prioritizes cumulative consumed energy, generated power, efficiency, online rate, stoppage reasons and staged records over marketing claims.",
      feedOneLabel: "Settlement",
      feedOneValue: "Cumulative consumed kWh",
      feedTwoLabel: "LinkPlant",
      feedTwoValue: "Power / efficiency / online rate",
      feedThreeLabel: "Stage Report",
      feedThreeValue: "Observation reports",
      brandsTitle: "Generator brands in evaluation",
      brandsLead: "All participating OEMs are shown together so observers can immediately see who is in or planned for the competition.",
      compareTitle: "Generator unit comparison",
      compareLead: "The competition standardizes container size, such as a 40 ft high-cube container, and power-cabin size, such as 5.6 m. It does not lock a single power class; public fields focus on generated power, efficiency, hours, online rate, cumulative generation, outages and response.",
      filterAll: "All",
      filterRunning: "Running",
      filterPending: "Pending",
      thSupplier: "Supplier",
      thUnit: "Unit",
      thModel: "Model",
      thStatus: "Status",
      thPower: "Generated power",
      thEfficiency: "Efficiency",
      thHours: "Hours",
      thOnline: "Online",
      thEnergy: "Cumulative generation",
      thOutage: "Outage",
      thResponse: "Response",
      thAction: "Actions",
      details: "View details",
      routeButton: "Technical route",
      close: "Close",
      running: "Running",
      pending: "Pending",
      inquiryTitle: "Submit project demand",
      inquiryLead: "For generator, mining machine, power offtake and natural gas resource project matching. Submissions are managed in the admin system.",
      labelCompany: "Company",
      labelContact: "Contact",
      labelEmail: "Email",
      labelLocation: "Project location",
      labelCapacity: "Planned capacity",
      labelMessage: "Demand details",
      privacyNote: "Submitted information is used only for project matching and partner communication. It is not a transaction, equipment recommendation or performance guarantee.",
      formSubmit: "Submit",
      footerJoint: "Joint evaluation",
      footerMethod: "Method",
      footerData: "Operating data",
      footerInquiry: "Project demand",
      required: "This field is required.",
      emailInvalid: "Enter a valid email.",
      submitOk: "Demand submitted.",
      submitLocal: "API is not connected. Saved as a local demo record.",
      empty: "No units match this filter.",
      techRoute: "Technical route",
      liveStatusTitle: "Current operating status",
      liveStatusLead: "The fields below show the current state of two units from the same supplier. Production data can come from LinkPlant or site sensors.",
      monitorTitle: "Monitoring view",
      monitorCopy: "Monitoring display depends on camera integration and authorized disclosure scope.",
      loadRate: "Load",
      outputStatus: "Generated power",
      voltage: "Voltage",
      current: "Current",
      frequency: "Frequency",
      powerFactor: "Power factor",
      rpm: "Engine RPM",
      gasPressure: "Gas pressure",
      coolantTemp: "Coolant temp",
      oilPressure: "Oil pressure",
      exhaustTemp: "Pre-turbine exhaust temp",
      manifoldPressure: "Intake manifold pressure",
      manifoldTemp: "Intake manifold temp",
      continuousHours: "Continuous runtime",
      runningRemark: "Operating note",
      coreConfig: "Core configuration",
      partsConfig: "Parts brand and model",
      routeDescription: "Technical route description",
      factoryInfo: "OEM participation",
      factoryName: "OEM name",
      participantType: "Participation type",
      participationStatus: "Participation status",
      proposalTitle: "Technical proposal",
      proposalSummary: "Proposal summary",
      proposalFile: "Proposal file",
      maintenance: "Maintenance and warranty",
      quote: "Same-configuration quote",
      unitPrefix: "Unit ",
      kw: " kW"
    }
  };

  function t(key) {
    return dictionary[lang][key] || key;
  }

  function pick(item, key) {
    return item[key + "_" + lang] || item[key] || "";
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char];
    });
  }

  function renderText() {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      node.textContent = t(node.getAttribute("data-i18n"));
    });
    var languageToggle = document.getElementById("languageToggle");
    languageToggle.classList.toggle("is-en", lang === "en");
    languageToggle.setAttribute("aria-pressed", String(lang === "en"));
  }

  function getVisibleSuppliers() {
    if (filter === "all") return data.suppliers;
    return data.suppliers.filter(function (supplier) {
      return supplier.status === filter;
    });
  }

  function renderMetrics() {
    var totalUnits = data.suppliers.reduce(function (sum, supplier) {
      return sum + supplier.units.length;
    }, 0);
    document.getElementById("supplierCount").textContent = data.suppliers.length;
    document.getElementById("unitCount").textContent = totalUnits;
    document.getElementById("runtimeTotal").textContent = formatCalendarTime(data.event_start || "2026-06-21T00:00:00+08:00");
  }

  function formatCalendarTime(startValue) {
    var start = new Date(startValue);
    var elapsedMs = Math.max(0, Date.now() - start.getTime());
    var days = Math.floor(elapsedMs / 86400000);
    var hours = Math.floor((elapsedMs % 86400000) / 3600000);
    if (lang === "zh") return days + " 天 " + hours + " h";
    return days + " d " + hours + " h";
  }

  function renderMethods() {
    var methods = data.methods[lang];
    document.getElementById("methodGrid").innerHTML = methods.map(function (method) {
      return [
        '<article class="method-card">',
        "<h3>" + escapeHtml(method.title) + "</h3>",
        "<p>" + escapeHtml(method.body) + "</p>",
        "</article>"
      ].join("");
    }).join("");
  }

  function renderBrands() {
    document.getElementById("brandWall").innerHTML = data.suppliers.map(function (supplier) {
      return [
        '<article class="brand-card" aria-label="' + escapeHtml(pick(supplier, "company")) + '">',
        '<div class="brand-logo">' + escapeHtml(supplier.code) + "</div>",
        "<span>" + escapeHtml(pick(supplier, "supplier_name")) + "</span>",
        "<h3>" + escapeHtml(pick(supplier, "company")) + "</h3>",
        "<p>" + escapeHtml(supplier.model) + " · " + escapeHtml(supplier.units.length) + " " + (lang === "zh" ? "台机组" : "units") + "</p>",
        '<strong class="brand-status">' + escapeHtml(t(supplier.status)) + "</strong>",
        "</article>"
      ].join("");
    }).join("");
  }

  function renderRows() {
    var suppliers = getVisibleSuppliers();
    if (!suppliers.length) {
      document.getElementById("comparisonRows").innerHTML = '<tr><td colspan="12">' + escapeHtml(t("empty")) + "</td></tr>";
      renderDetail();
      return;
    }

    document.getElementById("comparisonRows").innerHTML = suppliers.map(function (supplier) {
      var unitRows = supplier.units.map(function (unit, index) {
        var statusClass = supplier.status === "pending" ? " pending" : "";
        return [
          "<tr>",
          index === 0 ? '<td rowspan="' + supplier.units.length + '"><div class="supplier-cell"><span class="brand-logo">' + escapeHtml(supplier.code) + '</span><div><strong>' + escapeHtml(pick(supplier, "supplier_name")) + '</strong><span>' + escapeHtml(pick(supplier, "company")) + "</span></div></div></td>" : "",
          "<td>" + escapeHtml(t("unitPrefix") + unit.name) + "</td>",
          "<td>" + escapeHtml(supplier.model) + "</td>",
          '<td><span class="status-pill' + statusClass + '">' + escapeHtml(pick(unit, "status")) + "</span></td>",
          "<td>" + (unit.output_kw ? escapeHtml(unit.output_kw + t("kw")) : "-") + "</td>",
          "<td>" + escapeHtml(unit.efficiency || (unit.output_kw ? "38.5%" : "-")) + "</td>",
          "<td>" + escapeHtml(unit.hours + " h") + "</td>",
          "<td>" + escapeHtml(unit.online_rate) + "</td>",
          "<td>" + escapeHtml(formatEnergy(unit)) + "</td>",
          "<td>" + escapeHtml(unit.outages) + "</td>",
          "<td>" + escapeHtml(supplier.response_time) + "</td>",
          index === 0 ? '<td rowspan="' + supplier.units.length + '"><div class="action-stack"><button class="detail-button" type="button" data-panel="status" data-supplier="' + supplier.id + '">' + escapeHtml(activePanel.supplierId === supplier.id && activePanel.mode === "status" ? t("close") : t("details")) + '</button><button class="detail-button route-button" type="button" data-panel="route" data-supplier="' + supplier.id + '">' + escapeHtml(activePanel.supplierId === supplier.id && activePanel.mode === "route" ? t("close") : t("routeButton")) + "</button></div></td>" : "",
          "</tr>"
        ].join("");
      }).join("");
      return unitRows + renderInlinePanel(supplier);
    }).join("");
  }

  function renderInlinePanel(supplier) {
    if (activePanel.supplierId !== supplier.id || !activePanel.mode) return "";
    var html = activePanel.mode === "status" ? renderStatusPanel(supplier) : renderRoutePanel(supplier);
    return '<tr class="supplier-detail-row"><td colspan="12"><div class="detail-panel inline-detail-panel">' + html + "</div></td></tr>";
  }

  function formatEnergy(unit) {
    if (!unit.output_kw || !unit.hours) return "-";
    var energy = unit.energy_kwh || Math.round(Number(unit.output_kw) * Number(unit.hours));
    return energy.toLocaleString() + " kWh";
  }

  function renderDetail() {
    var panel = document.getElementById("detailPanel");
    panel.hidden = true;
    panel.innerHTML = "";
  }

  function renderStatusPanel(supplier) {
    return [
      '<div class="panel-head">',
      "<div><span>" + escapeHtml(pick(supplier, "supplier_name")) + "</span><h3>" + escapeHtml(t("liveStatusTitle")) + "</h3><p>" + escapeHtml(t("liveStatusLead")) + "</p></div>",
      '<strong class="panel-badge">' + escapeHtml(supplier.model) + "</strong>",
      "</div>",
      '<div class="runtime-layout">',
      '<div class="runtime-grid">',
      supplier.units.map(renderRuntimeCard).join(""),
      "</div>",
      renderMonitorCard(supplier),
      "</div>"
    ].join("");
  }

  function renderRuntimeCard(unit) {
    var runtime = runtimeData(unit);
    return [
      '<article class="runtime-card">',
      '<div class="runtime-card-head"><span>' + escapeHtml(t("unitPrefix") + unit.name) + '</span><strong class="status-pill">' + escapeHtml(pick(unit, "status")) + "</strong></div>",
      '<div class="runtime-specs">',
      miniSpec(t("loadRate"), runtime.load_rate),
      miniSpec(t("outputStatus"), unit.output_kw ? unit.output_kw + t("kw") : "-"),
      miniSpec(t("thEfficiency"), unit.efficiency || (unit.output_kw ? "38.5%" : "-")),
      miniSpec(t("voltage"), runtime.voltage_v),
      miniSpec(t("current"), runtime.current_a),
      miniSpec(t("frequency"), runtime.frequency_hz),
      miniSpec(t("powerFactor"), runtime.power_factor),
      miniSpec(t("rpm"), runtime.rpm),
      miniSpec(t("gasPressure"), runtime.gas_pressure_kpa),
      miniSpec(t("exhaustTemp"), runtime.exhaust_temp_c),
      miniSpec(t("manifoldPressure"), runtime.manifold_pressure_kpa),
      miniSpec(t("manifoldTemp"), runtime.manifold_temp_c),
      miniSpec(t("oilPressure"), runtime.oil_pressure_kpa),
      miniSpec(t("coolantTemp"), runtime.coolant_temp_c),
      miniSpec(t("continuousHours"), runtime.continuous_hours),
      miniSpec(t("runningRemark"), pick(unit, "remark")),
      "</div>",
      "</article>"
    ].join("");
  }

  function runtimeData(unit) {
    return {
      load_rate: unit.load_rate || (unit.output_kw ? Math.round(Number(unit.output_kw) / 250 * 100) + "%" : "-"),
      voltage_v: unit.voltage_v || (unit.output_kw ? "480 V" : "-"),
      current_a: unit.current_a || (unit.output_kw ? Math.round(Number(unit.output_kw) * 1000 / 480 / 1.732 / 0.98) + " A" : "-"),
      frequency_hz: unit.frequency_hz || (unit.output_kw ? "60.0 Hz" : "-"),
      power_factor: unit.power_factor || (unit.output_kw ? "0.98" : "-"),
      rpm: unit.rpm || (unit.output_kw ? "1,500 rpm" : "-"),
      gas_pressure_kpa: unit.gas_pressure_kpa || (unit.output_kw ? "7.2 kPa" : "-"),
      exhaust_temp_c: unit.exhaust_temp_c || (unit.output_kw ? "642°C" : "-"),
      manifold_pressure_kpa: unit.manifold_pressure_kpa || (unit.output_kw ? "168 kPa" : "-"),
      manifold_temp_c: unit.manifold_temp_c || (unit.output_kw ? "46°C" : "-"),
      coolant_temp_c: unit.coolant_temp_c || (unit.output_kw ? "86°C" : "-"),
      oil_pressure_kpa: unit.oil_pressure_kpa || (unit.output_kw ? "420 kPa" : "-"),
      continuous_hours: unit.continuous_hours || (unit.hours ? unit.hours + " h" : "-")
    };
  }

  function renderMonitorCard(supplier) {
    return [
      '<article class="monitor-card">',
      '<div class="monitor-screen">',
      '<div class="monitor-topline"><span>CAM-01</span><span>' + escapeHtml(pick(supplier, "supplier_name")) + "</span></div>",
      '<div class="monitor-play">▶</div>',
      '<div class="monitor-caption"><strong>' + escapeHtml(t("monitorTitle")) + "</strong><p>" + escapeHtml(t("monitorCopy")) + "</p></div>",
      "</div>",
      '<div class="camera-grid">',
      '<div><span>CAM-01</span><strong>' + (lang === "zh" ? "发电机组区域" : "Generator area") + "</strong></div>",
      '<div><span>CAM-02</span><strong>' + (lang === "zh" ? "燃气阀组与管线" : "Gas train and pipeline") + "</strong></div>",
      '<div><span>CAM-03</span><strong>' + (lang === "zh" ? "配电与负载区域" : "Distribution and load") + "</strong></div>",
      "</div>",
      "</article>"
    ].join("");
  }

  function renderRoutePanel(supplier) {
    var proposalSummary = pick(supplier, "proposal_summary") || pick(supplier, "route");
    var proposalFile = supplier.proposal_file || (lang === "zh" ? "后台可补充方案附件地址" : "Admin can add proposal file URL");
    var parts = [
      [t("coreConfig"), supplier.engine],
      ["Alternator", supplier.alternator],
      ["Controller", supplier.controller],
      ["ECU", supplier.ecu || "-"],
      ["AVR", supplier.avr || "-"],
      ["Gas train", supplier.gas_train],
      ["Intake", supplier.intake || "-"],
      ["Cooling", supplier.cooling],
      ["Exhaust", supplier.exhaust || "-"],
      ["Base and damping", supplier.base_system || "-"],
      ["Heating", supplier.heating || "-"],
      ["Sensors", supplier.sensors || "-"],
      [t("maintenance"), pick(supplier, "maintenance")],
      [t("quote"), supplier.quote]
    ];

    return [
      '<div class="panel-head">',
      "<div><span>" + escapeHtml(pick(supplier, "supplier_name")) + "</span><h3>" + escapeHtml(t("techRoute")) + "</h3><p>" + escapeHtml(t("routeDescription")) + "</p></div>",
      '<strong class="panel-badge">' + escapeHtml(supplier.model) + "</strong>",
      "</div>",
      '<h4 class="subsection-title">' + escapeHtml(t("factoryInfo")) + "</h4>",
      '<div class="parts-grid route-meta-grid">',
      spec(t("factoryName"), pick(supplier, "factory_name") || pick(supplier, "company")),
      spec(t("participantType"), supplier.participant_type || (lang === "zh" ? "发电机组主机厂" : "Generator OEM")),
      spec(t("participationStatus"), supplier.participation_status || t(supplier.status)),
      spec(t("proposalTitle"), pick(supplier, "proposal_title") || t("techRoute")),
      spec(t("proposalFile"), proposalFile),
      "</div>",
      '<div class="route-summary"><h4>' + escapeHtml(t("routeDescription")) + "</h4><p>" + escapeHtml(pick(supplier, "route")) + "</p></div>",
      '<div class="route-summary"><h4>' + escapeHtml(t("proposalSummary")) + "</h4><p>" + escapeHtml(proposalSummary) + "</p></div>",
      '<h4 class="subsection-title">' + escapeHtml(t("partsConfig")) + "</h4>",
      '<div class="parts-grid">',
      parts.map(function (item) { return spec(item[0], item[1]); }).join(""),
      "</div>"
    ].join("");
  }

  function miniSpec(label, value) {
    return '<div class="mini-spec"><span>' + escapeHtml(label) + '</span><strong>' + escapeHtml(value) + "</strong></div>";
  }

  function spec(label, value) {
    return '<div class="spec-item"><span>' + escapeHtml(label) + '</span><strong>' + escapeHtml(value || "-") + "</strong></div>";
  }

  function bindComparison() {
    document.getElementById("comparisonRows").addEventListener("click", function (event) {
      var button = event.target.closest("[data-panel]");
      if (!button) return;
      var id = Number(button.getAttribute("data-supplier"));
      var mode = button.getAttribute("data-panel");
      if (activePanel.supplierId === id && activePanel.mode === mode) {
        activePanel = { supplierId: null, mode: null };
      } else {
        activePanel = { supplierId: id, mode: mode };
      }
      renderRows();
      renderDetail();
    });

    document.querySelector(".toolbar").addEventListener("click", function (event) {
      var button = event.target.closest("[data-filter]");
      if (!button) return;
      filter = button.getAttribute("data-filter");
      activePanel = { supplierId: null, mode: null };
      document.querySelectorAll(".filter-chip").forEach(function (chip) {
        chip.classList.toggle("active", chip.getAttribute("data-filter") === filter);
      });
      renderRows();
      renderDetail();
    });
  }

  function validateForm(form) {
    var errors = {};
    ["company", "contact", "email", "location", "capacity", "message"].forEach(function (name) {
      if (!form.elements[name].value.trim()) errors[name] = t("required");
    });
    if (!errors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.elements.email.value.trim())) {
      errors.email = t("emailInvalid");
    }
    document.querySelectorAll(".field-error").forEach(function (node) {
      node.textContent = errors[node.getAttribute("data-field")] || "";
    });
    return Object.keys(errors).length === 0;
  }

  function bindForm() {
    var form = document.getElementById("inquiryForm");
    var status = document.getElementById("formStatus");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      status.textContent = "";
      status.className = "form-status";
      if (!validateForm(form)) return;

      var payload = {};
      new FormData(form).forEach(function (value, key) {
        payload[key] = value;
      });

      fetch(apiBase + "/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).then(function (response) {
        if (!response.ok) throw new Error("request failed");
        return response.json();
      }).then(function () {
        status.textContent = t("submitOk");
        status.classList.add("success");
        form.reset();
      }).catch(function () {
        var saved = JSON.parse(localStorage.getItem("linkmine_demo_inquiries") || "[]");
        saved.push(Object.assign({ created_at: new Date().toISOString() }, payload));
        localStorage.setItem("linkmine_demo_inquiries", JSON.stringify(saved));
        status.textContent = t("submitLocal");
        status.classList.add("success");
        form.reset();
      });
    });
  }

  function renderAll() {
    renderText();
    renderMetrics();
    renderMethods();
    renderBrands();
    renderRows();
    renderDetail();
  }

  function loadData() {
    fetch(apiBase + "/evaluation")
      .then(function (response) {
        if (!response.ok) throw new Error("api unavailable");
        return response.json();
      })
      .then(function (payload) {
        if (payload && payload.suppliers) data = payload;
        renderAll();
      })
      .catch(function () {
        renderAll();
      });
  }

  document.getElementById("languageToggle").addEventListener("click", function () {
    lang = lang === "zh" ? "en" : "zh";
    localStorage.setItem("linkmine_lang", lang);
    renderAll();
  });

  bindComparison();
  bindForm();
  loadData();
})();
