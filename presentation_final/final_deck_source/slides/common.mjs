const S = {
  bg: "#F7F9F7",
  ink: "#19231F",
  muted: "#66716B",
  faint: "#E1E7E1",
  teal: "#0E7C7B",
  green: "#4E8C5A",
  coral: "#D95D39",
  amber: "#F2B84B",
  blue: "#3C6FA6",
  dark: "#16221F",
  white: "#FFFFFF",
};

function line(color = "#00000000", width = 0) {
  return { style: "solid", fill: color, width };
}

function rect(slide, ctx, x, y, w, h, fill, opts = {}) {
  return ctx.addShape(slide, {
    left: x,
    top: y,
    width: w,
    height: h,
    geometry: opts.geometry ?? "rect",
    fill,
    line: opts.line ?? line(),
  });
}

function text(slide, ctx, value, x, y, w, h, opts = {}) {
  return ctx.addText(slide, {
    text: String(value ?? ""),
    left: x,
    top: y,
    width: w,
    height: h,
    fontSize: opts.size ?? 20,
    color: opts.color ?? S.ink,
    bold: Boolean(opts.bold),
    typeface: opts.face ?? "Aptos",
    align: opts.align ?? "left",
    valign: opts.valign ?? "top",
    fill: opts.fill ?? "#00000000",
    line: opts.line ?? line(),
    insets: opts.insets ?? { left: 0, right: 0, top: 0, bottom: 0 },
  });
}

function rule(slide, ctx, x, y, w, color = S.faint, h = 1) {
  rect(slide, ctx, x, y, w, h, color);
}

function bg(slide, ctx) {
  rect(slide, ctx, 0, 0, ctx.W, ctx.H, S.bg);
  rect(slide, ctx, 0, 0, 24, ctx.H, S.teal);
}

function header(slide, ctx, kicker, title, page) {
  bg(slide, ctx);
  text(slide, ctx, kicker.toUpperCase(), 64, 42, 600, 18, {
    size: 9,
    color: S.teal,
    bold: true,
  });
  text(slide, ctx, title, 64, 70, 1000, 72, {
    size: 31,
    color: S.ink,
    bold: true,
    face: "Aptos Display",
  });
  text(slide, ctx, String(page).padStart(2, "0"), 1162, 42, 54, 24, {
    size: 14,
    color: S.muted,
    bold: true,
    align: "right",
  });
  rule(slide, ctx, 64, 148, 1152, S.faint, 1);
}

function footer(slide, ctx, label = "CMP720 Final Project Presentation | DeFT 2.5D Noxim Extension") {
  rule(slide, ctx, 64, 678, 1152, S.faint, 1);
  text(slide, ctx, label, 64, 688, 860, 16, { size: 8.5, color: S.muted });
}

function panel(slide, ctx, x, y, w, h, title, body, accent = S.teal) {
  rect(slide, ctx, x, y, w, h, S.white, { line: line(S.faint, 1) });
  rect(slide, ctx, x, y, 5, h, accent);
  text(slide, ctx, title, x + 18, y + 16, w - 36, 28, {
    size: 15,
    bold: true,
    color: S.ink,
  });
  text(slide, ctx, body, x + 18, y + 52, w - 36, h - 68, {
    size: 12.5,
    color: S.muted,
  });
}

function metric(slide, ctx, x, y, value, label, note, color = S.teal) {
  rect(slide, ctx, x, y, 224, 104, S.white, { line: line(S.faint, 1) });
  rect(slide, ctx, x, y, 224, 5, color);
  text(slide, ctx, value, x + 18, y + 21, 188, 32, {
    size: 28,
    bold: true,
    color: S.ink,
    face: "Aptos Display",
  });
  text(slide, ctx, label, x + 18, y + 58, 188, 18, {
    size: 11,
    color: S.ink,
    bold: true,
  });
  text(slide, ctx, note, x + 18, y + 78, 188, 16, { size: 8.5, color: S.muted });
}

function label(slide, ctx, value, x, y, w, color = S.teal) {
  rect(slide, ctx, x, y, w, 28, color);
  text(slide, ctx, value, x + 10, y + 7, w - 20, 12, {
    size: 9,
    color: S.white,
    bold: true,
    align: "center",
  });
}

function chiplet(slide, ctx, x, y, id) {
  rect(slide, ctx, x, y, 188, 116, "#FEFEFC", { line: line(S.ink, 1) });
  text(slide, ctx, `Chiplet ${id}`, x + 12, y + 9, 120, 16, { size: 10, bold: true });
  const cell = 15;
  for (let row = 0; row < 4; row += 1) {
    for (let col = 0; col < 4; col += 1) {
      const fill = (row === 0 && col === 1) || (row === 1 && col === 3) || (row === 3 && col === 2) || (row === 2 && col === 0)
        ? S.amber
        : "#DCE5DD";
      rect(slide, ctx, x + 42 + col * 22, y + 34 + row * 18, cell, cell, fill, { line: line("#AAB7AD", 1) });
    }
  }
}

function vlink(slide, ctx, x, y, h = 54, color = S.coral) {
  rect(slide, ctx, x, y, 8, h, color);
  text(slide, ctx, "VL", x - 9, y + h + 5, 28, 12, { size: 8, color, bold: true, align: "center" });
}

function step(slide, ctx, x, y, w, title, body, color = S.teal) {
  rect(slide, ctx, x, y, w, 82, S.white, { line: line(S.faint, 1) });
  rect(slide, ctx, x, y, w, 5, color);
  text(slide, ctx, title, x + 12, y + 16, w - 24, 18, { size: 12, bold: true, color: S.ink });
  text(slide, ctx, body, x + 12, y + 39, w - 24, 32, { size: 9.5, color: S.muted });
}

function arrow(slide, ctx, x, y, w, color = S.muted) {
  rule(slide, ctx, x, y, w, color, 2);
  text(slide, ctx, ">", x + w - 10, y - 8, 14, 14, { size: 12, color, bold: true });
}

function tinyTable(slide, ctx, x, y, widths, rows, opts = {}) {
  const rowH = opts.rowH ?? 34;
  rows.forEach((row, r) => {
    const yy = y + r * rowH;
    const fill = r === 0 ? S.dark : (r % 2 ? S.white : "#F1F5F1");
    rect(slide, ctx, x, yy, widths.reduce((a, b) => a + b, 0), rowH, fill, { line: line(S.faint, 1) });
    let xx = x;
    row.forEach((cell, c) => {
      text(slide, ctx, cell, xx + 8, yy + 9, widths[c] - 16, rowH - 12, {
        size: r === 0 ? 8.8 : 9.5,
        color: r === 0 ? S.white : S.ink,
        bold: r === 0 || c === 0,
      });
      if (c > 0) rule(slide, ctx, xx, yy, 1, S.faint, rowH);
      xx += widths[c];
    });
  });
}

export function slide01(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  rect(slide, ctx, 880, 0, 400, 720, S.dark);
  text(slide, ctx, "FINAL PROJECT STATUS", 64, 70, 620, 20, { size: 10, color: S.teal, bold: true });
  text(slide, ctx, "DeFT for 2.5D\nChiplet Networks", 64, 118, 660, 144, {
    size: 48,
    color: S.ink,
    bold: true,
    face: "Aptos Display",
  });
  text(slide, ctx, "Noxim simulator extension, validated synthetic sweep, and claim-safe final report path.", 66, 284, 660, 56, {
    size: 19,
    color: S.muted,
  });
  metric(slide, ctx, 64, 420, "128", "routers modeled", "64 chiplet + 64 interposer", S.teal);
  metric(slide, ctx, 310, 420, "16", "physical VLs", "startup permanent fault masks", S.coral);
  metric(slide, ctx, 556, 420, "2", "VCs / VNs", "VN.0 and VN.1 mapped to VC 0/1", S.amber);
  text(slide, ctx, "Yusuf Tahir Orhan\nCMP720 Final Project Presentation\nMay 2026", 940, 94, 260, 90, {
    size: 15,
    color: S.white,
    bold: true,
  });
  text(slide, ctx, "Main status", 940, 252, 220, 18, { size: 10, color: S.amber, bold: true });
  text(slide, ctx, "Implementation and validation infrastructure are complete enough for a descriptive final report. Stronger performance claims remain blocked until follow-up validation creates stronger artifacts.", 940, 282, 230, 150, {
    size: 15,
    color: "#DDE8E1",
  });
  footer(slide, ctx, "Based on Extended Proposal requirements and the original DeFT paper");
  return slide;
}

export function slide02(presentation, ctx) {
  const slide = presentation.slides.add();
  header(slide, ctx, "proposal to current status", "What changed after the proposal stage", 2);
  panel(slide, ctx, 64, 190, 350, 345, "Proposed", "Implement DeFT in a cycle-accurate Noxim extension. Evaluate synthetic traffic and PARSEC/GEM5 traces. Compare against XY routing under VL fault scenarios. Report reachability, latency, and throughput.", S.blue);
  panel(slide, ctx, 458, 190, 350, 345, "Applied", "Built DEFT_2_5D topology, physical VL fault model, two-VN transition enforcement, schema-v1 VL LUTs, DEFT route selection, synthetic traffic profiles, metrics export, runner, analysis, and final sweep.", S.teal);
  panel(slide, ctx, 852, 190, 350, 345, "Changed", "PARSEC/GEM5 was deferred because the dependency and trace pipeline are absent. Standard XY is treated as a limited control baseline. Results are descriptive and blank-aware, not improvement claims.", S.coral);
  label(slide, ctx, "Current recommendation: use the report as-is for tomorrow; revise later only after feedback or new validated artifacts.", 238, 574, 802, S.dark);
  footer(slide, ctx);
  return slide;
}

export function slide03(presentation, ctx) {
  const slide = presentation.slides.add();
  header(slide, ctx, "problem definition", "Inter-chiplet traffic has two coupled risks", 3);
  chiplet(slide, ctx, 92, 214, 0);
  chiplet(slide, ctx, 354, 214, 1);
  chiplet(slide, ctx, 92, 398, 2);
  chiplet(slide, ctx, 354, 398, 3);
  rect(slide, ctx, 690, 282, 370, 190, "#DDE8E1", { line: line("#9EB0A3", 1) });
  text(slide, ctx, "Active interposer", 808, 366, 180, 22, { size: 15, bold: true, align: "center", color: S.ink });
  vlink(slide, ctx, 178, 330, 46, S.coral);
  vlink(slide, ctx, 440, 330, 46, S.coral);
  arrow(slide, ctx, 548, 378, 122, S.teal);
  arrow(slide, ctx, 1062, 378, 78, S.teal);
  text(slide, ctx, "Down to interposer", 548, 342, 132, 18, { size: 10, color: S.teal, bold: true });
  text(slide, ctx, "Up to chiplet", 1060, 342, 110, 18, { size: 10, color: S.teal, bold: true });
  panel(slide, ctx, 760, 170, 420, 74, "Deadlock risk", "The up-down-up path can create cyclic channel dependencies even if each local chiplet mesh is deadlock-free.", S.coral);
  panel(slide, ctx, 760, 520, 420, 74, "Reliability risk", "A failed Vertical Link removes physical access between a chiplet boundary router and the interposer.", S.amber);
  footer(slide, ctx);
  return slide;
}

export function slide04(presentation, ctx) {
  const slide = presentation.slides.add();
  header(slide, ctx, "implemented model", "The simulator now has a concrete 2.5D topology", 4);
  metric(slide, ctx, 80, 198, "4 x 4", "mesh per chiplet", "four chiplets total", S.teal);
  metric(slide, ctx, 330, 198, "8 x 8", "active interposer", "one mesh below chiplets", S.blue);
  metric(slide, ctx, 580, 198, "96", "chiplet links", "cardinal links inside chiplets", S.green);
  metric(slide, ctx, 830, 198, "112", "interposer links", "cardinal interposer mesh", S.amber);
  tinyTable(slide, ctx, 96, 372, [300, 260, 420], [
    ["Component", "Implemented value", "Purpose"],
    ["Router ID space", "0..127", "Separates chiplet routers from interposer routers"],
    ["Packet endpoints", "0..63", "Synthetic traffic only injects at chiplet PEs"],
    ["Vertical Links", "16 physical bidirectional", "Fault manager marks each VL functional or faulty"],
    ["Fault policy", "startup permanent", "Fault mask is fixed before routing begins"],
  ], { rowH: 44 });
  footer(slide, ctx, "Implemented model is traceable through docs/ARCHITECTURE.md and docs/DECISIONS.md");
  return slide;
}

export function slide05(presentation, ctx) {
  const slide = presentation.slides.add();
  header(slide, ctx, "virtual networks", "Why VNs are needed: they break the dependency cycle", 5);
  text(slide, ctx, "Without VN separation", 94, 190, 280, 24, { size: 16, bold: true, color: S.coral });
  rect(slide, ctx, 102, 246, 132, 48, S.white, { line: line(S.coral, 2) });
  rect(slide, ctx, 302, 246, 132, 48, S.white, { line: line(S.coral, 2) });
  rect(slide, ctx, 302, 388, 132, 48, S.white, { line: line(S.coral, 2) });
  rect(slide, ctx, 102, 388, 132, 48, S.white, { line: line(S.coral, 2) });
  text(slide, ctx, "chiplet H", 126, 262, 80, 18, { size: 11, bold: true, align: "center" });
  text(slide, ctx, "Down", 340, 262, 60, 18, { size: 11, bold: true, align: "center" });
  text(slide, ctx, "interposer H", 320, 404, 96, 18, { size: 11, bold: true, align: "center" });
  text(slide, ctx, "Up", 148, 404, 40, 18, { size: 11, bold: true, align: "center" });
  arrow(slide, ctx, 238, 270, 58, S.coral);
  rule(slide, ctx, 368, 298, 2, S.coral, 86);
  text(slide, ctx, "v", 363, 374, 16, 14, { size: 11, color: S.coral, bold: true });
  rule(slide, ctx, 238, 412, 58, S.coral, 2);
  text(slide, ctx, "<", 234, 404, 14, 14, { size: 12, color: S.coral, bold: true });
  rule(slide, ctx, 166, 298, 2, S.coral, 86);
  text(slide, ctx, "^", 160, 292, 16, 14, { size: 11, color: S.coral, bold: true });
  text(slide, ctx, "The same physical resource class can wait on itself around the up-down-up route.", 84, 484, 394, 58, { size: 14, color: S.muted });
  text(slide, ctx, "With DeFT VNs", 590, 190, 220, 24, { size: 16, bold: true, color: S.teal });
  panel(slide, ctx, 590, 238, 550, 70, "Rule 1", "Routing from VN.1 to VN.0 is forbidden; VN.0 -> VN.1 is allowed.", S.teal);
  panel(slide, ctx, 590, 326, 550, 70, "Rule 2", "In VN.0, Up-to-Horizontal movement is forbidden.", S.amber);
  panel(slide, ctx, 590, 414, 550, 70, "Rule 3", "In VN.1, Horizontal-to-Down movement is forbidden.", S.coral);
  label(slide, ctx, "Core idea: move through two ordered channel classes instead of one cyclic class.", 620, 544, 500, S.dark);
  footer(slide, ctx, "This slide directly addresses the first-presentation feedback about virtual networks");
  return slide;
}

export function slide06(presentation, ctx) {
  const slide = presentation.slides.add();
  header(slide, ctx, "virtual networks", "What the VNs do in the implementation", 6);
  step(slide, ctx, 72, 218, 224, "1. Assign VN", "VN.0 maps to VC 0. VN.1 maps to VC 1. DeFT runs require exactly two VCs.", S.teal);
  arrow(slide, ctx, 306, 258, 60, S.muted);
  step(slide, ctx, 378, 218, 224, "2. Route candidates", "DEFT or topology-aware helpers propose legal physical directions.", S.blue);
  arrow(slide, ctx, 612, 258, 60, S.muted);
  step(slide, ctx, 684, 218, 224, "3. Filter moves", "VN.1 -> VN.0, Up-Horizontal in VN.0, and Horizontal-Down in VN.1 are rejected.", S.coral);
  arrow(slide, ctx, 918, 258, 60, S.muted);
  step(slide, ctx, 990, 218, 224, "4. Reserve VC", "The router reserves the selected output VC and forwards the flit with that VC state.", S.amber);
  panel(slide, ctx, 94, 412, 500, 116, "Why the area overhead exists", "Hardware needs per-VC buffer/control resources, output-VC reservation logic, VN assignment/filter logic, and boundary-router LUT storage. The original DeFT paper reports less than 2% area overhead; this project discusses that as literature evidence, not synthesized silicon.", S.coral);
  panel(slide, ctx, 664, 412, 500, 116, "Why the overhead is limited", "Only two VNs are used. The extra logic is concentrated around DeFT routing, transition checks, and boundary VL selection rather than replacing the whole router datapath.", S.teal);
  footer(slide, ctx, "Paper reference: DeFT hardware analysis reports <2% area overhead; no project synthesis was performed");
  return slide;
}

export function slide07(presentation, ctx) {
  const slide = presentation.slides.add();
  header(slide, ctx, "fault-aware routing", "DeFT separates permanent faults from runtime route choice", 7);
  step(slide, ctx, 92, 204, 245, "Startup fault manager", "Applies a physical VL mask such as 0x0011 before packet routing.", S.coral);
  arrow(slide, ctx, 354, 244, 80, S.muted);
  step(slide, ctx, 452, 204, 245, "Schema-v1 LUT", "Keyed by fault mask, source chiplet, source router, and destination chiplet.", S.teal);
  arrow(slide, ctx, 714, 244, 80, S.muted);
  step(slide, ctx, 812, 204, 245, "Selected VL pair", "Chooses source exit and destination entry while avoiding marked faulty VLs.", S.amber);
  text(slide, ctx, "Example lookup path", 96, 360, 260, 24, { size: 15, bold: true });
  tinyTable(slide, ctx, 96, 405, [208, 208, 208, 208, 208], [
    ["fault mask", "source", "destination", "source exit", "dest entry"],
    ["0x0011", "chiplet 0 / router 0", "chiplet 3", "functional VL", "functional VL"],
  ], { rowH: 50 });
  panel(slide, ctx, 810, 522, 292, 72, "Fail-closed behavior", "Missing LUT entries or nonfunctional selected VLs return no legal output rather than silently inventing a path.", S.dark);
  footer(slide, ctx);
  return slide;
}

export function slide08(presentation, ctx) {
  const slide = presentation.slides.add();
  header(slide, ctx, "implementation evidence", "The deck can point to concrete code surfaces without showing raw code", 8);
  tinyTable(slide, ctx, 82, 190, [310, 380, 370], [
    ["Implementation surface", "What it proves", "Where it appears in the project"],
    ["Topology + VL model", "128-router DEFT_2_5D mapping and 16 physical VL inventory", "DeftTopology.* and NoC construction"],
    ["Fault injection", "Startup permanent physical VL masks are validated before routing", "DeftFaultInjectionManager.*"],
    ["Virtual networks", "VN.0/VN.1 assignment and illegal transition filtering are enforced", "DeftVirtualNetwork.* and Router pipeline"],
    ["DeFT route path", "Runtime schema-v1 LUT selects source exit and destination entry", "DeftVerticalLinkLut.* and Routing_DEFT.*"],
    ["Experiment support", "JSON metrics, runner manifests, and blank-aware analysis are reproducible", "GlobalStats.* and experiment helpers"],
  ], { rowH: 42 });
  label(slide, ctx, "Presenter note: show this as implementation proof; do not spend time reading code in class.", 240, 472, 800, S.dark);
  tinyTable(slide, ctx, 184, 540, [250, 230, 360], [
    ["Validation artifact", "Status", "Claim boundary"],
    ["Final sweep", "150/150 completed", "descriptive finite-window evidence"],
    ["Analysis cross-check", "0 mismatches", "tables match raw artifacts"],
  ], { rowH: 38 });
  footer(slide, ctx);
  return slide;
}

export function slide09(presentation, ctx) {
  const slide = presentation.slides.add();
  header(slide, ctx, "report table 4 summary", "Condition-level metrics show real measurements and blank-aware limits", 9);
  metric(slide, ctx, 90, 198, "150", "completed runs", "2 routings x 3 traffic x 5 masks x 5 seeds", S.teal);
  metric(slide, ctx, 340, 198, "30", "condition cells", "routing / traffic / mask groups", S.blue);
  metric(slide, ctx, 590, 198, "54", "zero-injection runs", "completed runs with no measured injection", S.coral);
  metric(slide, ctx, 840, 198, "0", "raw mismatches", "analysis cross-check passed", S.green);
  text(slide, ctx, "Condition-cell coverage", 108, 386, 320, 24, { size: 17, bold: true });
  const barX = 108;
  const barY = 436;
  const unit = 15;
  rect(slide, ctx, barX, barY, 12 * unit, 44, S.teal);
  rect(slide, ctx, barX + 12 * unit, barY, 13 * unit, 44, S.amber);
  rect(slide, ctx, barX + 25 * unit, barY, 5 * unit, 44, S.coral);
  text(slide, ctx, "12 complete", barX + 18, barY + 14, 160, 16, { size: 10, color: S.white, bold: true });
  text(slide, ctx, "13 partial", barX + 12 * unit + 18, barY + 14, 150, 16, { size: 10, color: S.ink, bold: true });
  text(slide, ctx, "5 empty", barX + 25 * unit + 18, barY + 14, 90, 16, { size: 10, color: S.white, bold: true });
  tinyTable(slide, ctx, 622, 386, [126, 90, 48, 52, 65, 66, 82], [
    ["Mode", "Mask", "Inj.", "Recv.", "Reach.", "Lat.", "Status"],
    ["DEFT / local", "0x0000", "289", "166", "0.574", "23.38", "complete"],
    ["DEFT / uniform", "0x0001", "137", "84", "0.613", "23.96", "complete"],
    ["DEFT / hotspot", "0x0011", "114", "72", "0.632", "40.36", "partial"],
    ["XY / local", "0x0000", "7", "0", "0.000", "blank", "partial"],
  ], { rowH: 34 });
  label(slide, ctx, "Interpretation: concrete results exist; ranking and improvement claims are still blocked.", 662, 574, 520, S.dark);
  footer(slide, ctx, "Condensed from final report Table 4: Condition-Level Descriptive Metrics");
  return slide;
}

export function slide10(presentation, ctx) {
  const slide = presentation.slides.add();
  header(slide, ctx, "report table 5 summary", "Pairwise readiness explains why the results are not a ranking claim", 10);
  tinyTable(slide, ctx, 92, 188, [190, 132, 108, 118, 408], [
    ["Traffic", "Mask", "XY", "DEFT", "Readiness"],
    ["hotspot_3x10", "0x0000", "E", "C", "XY-empty"],
    ["hotspot_3x10", "0x0001", "E", "P", "XY-empty"],
    ["hotspot_3x10", "0x0011", "E", "P", "XY-empty"],
    ["hotspot_3x10", "0x0111", "E", "C", "XY-empty"],
    ["hotspot_3x10", "0x1111", "E", "C", "XY-empty"],
    ["localized_40", "all masks", "P", "C", "latency-blank"],
    ["uniform", "0x0000-0x0111", "P", "C", "latency-blank"],
    ["uniform", "0x1111", "P", "P", "latency-blank"],
  ], { rowH: 34 });
  panel(slide, ctx, 120, 532, 300, 74, "C / P / E", "C = complete injection cell. P = partial injection cell. E = empty injection cell.", S.teal);
  panel(slide, ctx, 490, 532, 300, 74, "XY-empty", "The XY side injected zero packets in the measured cell, so it cannot be compared.", S.coral);
  panel(slide, ctx, 860, 532, 300, 74, "latency-blank", "Both modes may inject, but one side has no received packets, so latency ranking is blocked.", S.amber);
  footer(slide, ctx, "Condensed from final report Table 5: XY/DEFT Pairwise Readiness");
  return slide;
}

export function slide11(presentation, ctx) {
  const slide = presentation.slides.add();
  header(slide, ctx, "limitations and trade-offs", "Current blockers are explicit, not hidden", 11);
  tinyTable(slide, ctx, 88, 190, [270, 360, 430], [
    ["Item", "Current status", "Why it matters"],
    ["Blocked: PARSEC/GEM5 traces", "No GEM5/PARSEC setup, traces, schema, or provenance", "Cannot claim real-application workload support"],
    ["Blocked: directional VL faults", "Current fault model is physical bidirectional VL state", "Paper-aligned single-direction fault cases need new design"],
    ["Blocked: eventual delivery", "Drain mode exists only as opt-in smoke-validated support", "Needs a separate experiment before report claims"],
    ["Comparison baseline", "Standard XY is limited; IA-XY exists but limited results are exploratory", "No ranking or latency-improvement claims yet"],
  ], { rowH: 54 });
  panel(slide, ctx, 108, 536, 470, 78, "Embedded-system trade-off", "DeFT buys reliability through extra VC resources, VN transition logic, and LUT storage. The project keeps this bounded to two VCs and documents the overhead as literature-based.", S.teal);
  panel(slide, ctx, 650, 536, 470, 78, "Scalability trade-off", "More chiplets and fault states increase LUT generation and validation burden, so future work must version artifacts and avoid ad hoc trace imports.", S.coral);
  footer(slide, ctx);
  return slide;
}

export function slide12(presentation, ctx) {
  const slide = presentation.slides.add();
  header(slide, ctx, "conclusion and future work", "The final message: implemented, validated, and honest about limits", 12);
  panel(slide, ctx, 88, 190, 330, 270, "Current status", "A working DeFT-oriented Noxim extension exists with topology, routing, fault, VN, LUT, traffic, metric, runner, and analysis support. The final synthetic sweep completed and the final report package is ready.", S.teal);
  panel(slide, ctx, 474, 190, 330, 270, "Before final report submission", "Do not rewrite the report tonight. After the presentation, update only if feedback or new validated artifacts justify it. Keep all unsupported claims out.", S.amber);
  panel(slide, ctx, 860, 190, 330, 270, "Future work", "Versioned PARSEC/GEM5 trace schema, tiny trace fixtures, directional fault model, drain-based eventual-delivery experiments, stronger IA-XY baseline comparison, and RL-based VL selection.", S.coral);
  text(slide, ctx, "Recommended answer if asked about final report: I would update it after feedback, but I would not strengthen results unless the new validation artifacts support the stronger wording.", 138, 548, 1000, 54, {
    size: 18,
    color: S.ink,
    bold: true,
    align: "center",
  });
  footer(slide, ctx, "End");
  return slide;
}
