const data = require('./lighthouse-report.json');

console.log('\n=== LIGHTHOUSE AUDIT RESULTS ===\n');
console.log('Performance:', Math.round(data.categories.performance.score * 100));
console.log('Accessibility:', Math.round(data.categories.accessibility.score * 100));
console.log('Best Practices:', Math.round(data.categories['best-practices'].score * 100));
console.log('SEO:', Math.round(data.categories.seo.score * 100));

console.log('\n=== CORE WEB VITALS ===\n');
const audits = data.audits;
console.log('First Contentful Paint:', audits['first-contentful-paint'].displayValue);
console.log('Largest Contentful Paint:', audits['largest-contentful-paint'].displayValue);
console.log('Total Blocking Time:', audits['total-blocking-time'].displayValue);
console.log('Cumulative Layout Shift:', audits['cumulative-layout-shift'].displayValue);
console.log('Speed Index:', audits['speed-index'].displayValue);

console.log('\n=== MAIN OPPORTUNITIES FOR IMPROVEMENT ===\n');
const opportunities = Object.values(data.audits).filter(a => a.details && a.details.type === 'opportunity' && a.score !== null && a.score < 1).sort((a,b) => (b.numericValue || 0) - (a.numericValue || 0));

opportunities.slice(0, 10).forEach((o, idx) => {
  console.log(`${idx + 1}. ${o.title}`);
  console.log(`   Potential Savings: ${o.displayValue || 'N/A'}`);
  console.log(`   Description: ${o.description.substring(0, 100)}...`);
  console.log('');
});

console.log('\n=== DIAGNOSTICS ===\n');
const diagnostics = Object.values(data.audits).filter(a => a.details && a.details.type === 'debugdata' || (a.scoreDisplayMode === 'informative' && a.score !== null && a.score < 1));

diagnostics.slice(0, 5).forEach((d, idx) => {
  if (d.title) {
    console.log(`${idx + 1}. ${d.title}`);
    if (d.displayValue) console.log(`   Value: ${d.displayValue}`);
    console.log('');
  }
});
