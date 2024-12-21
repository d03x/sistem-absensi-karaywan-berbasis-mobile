import Bun from "bun"; // Ensure Bun is imported from the correct module

try {
 const build = await Bun.build({
    outdir: "./dist",
    target: "node",
    entrypoints: ["./index.ts"],
  });
  console.info(`Status: ${build.success}`);

} catch (error) {
  console.warn("Status:false");
}
