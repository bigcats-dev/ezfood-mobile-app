// patch-metro.js
const fs = require("fs");
const path = require("path");

// 🟢 Utility แก้ text ในไฟล์
function patchFile(target, replacements) {
  if (!fs.existsSync(target)) {
    console.log("❌ ไม่พบไฟล์:", target);
    return;
  }
  let code = fs.readFileSync(target, "utf8");
  let changed = false;

  for (const [from, to] of replacements) {
    if (code.includes(from)) {
      code = code.replace(new RegExp(from, "g"), to);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(target, code, "utf8");
    console.log("✅ Patched:", target);
  } else {
    console.log("ℹ️ ไม่มีอะไรต้อง patch:", target);
  }
}

// 1) Patch importLocationsPlugin
const reconcileFile = path.join(
  __dirname,
  "node_modules/@expo/metro-config/build/serializer/reconcileTransformSerializerPlugin.js"
);
patchFile(reconcileFile, [
  [
    'require("metro/src/ModuleGraph/worker/importLocationsPlugin")',
    'require("metro").importLocationsPlugin'
  ]
]);

// 2) Patch TerminalReporter
const terminalFile = path.join(
  __dirname,
  "node_modules/@expo/metro-config/build/terminal/TerminalReporter.js"
);
patchFile(terminalFile, [
  [
    'require("metro/src/lib/TerminalReporter")',
    'require("metro").TerminalReporter'
  ]
]);

console.log("🎉 Metro patched for Node 22 compatibility");
