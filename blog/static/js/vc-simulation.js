function randomUniform(min, max) {
  return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class VCConfig {
  constructor(
    initialBudget,
    startupRange,
    investmentRange,
    growthRange,
    failChanceReduction,
    revenuePercent,
    maxQuarters,
    failChanceRange,
    exitChance,
    vcOperatingCost
  ) {
    this.initialBudget = initialBudget;
    this.startupRange = startupRange;
    this.investmentRange = investmentRange;
    this.growthRange = growthRange;
    this.failChanceReduction = failChanceReduction;
    this.revenuePercent = revenuePercent;
    this.maxQuarters = maxQuarters;
    this.failChanceRange = failChanceRange;
    this.exitChance = exitChance;
    this.vcOperatingCost = vcOperatingCost;
  }
}

class Startup {
  constructor(investment, failChance, growthRange) {
    this.investment = investment;
    this.failChance = failChance;
    this.growthRange = growthRange;
    this.value = 0;
    this.age = 0;
    this.exit = false;
  }

  update(config) {
    this.age += 1;

    if (this.age > 2 && Math.random() < config.exitChance) {
      console.log(`Startup exited after ${this.age} quarters`);
      this.value = this.investment * 10;
      this.exit = true;
      return;
    }

    if (Math.random() < this.failChance) {
      this.value = 0;
      return;
    }
    const growth = randomUniform(0, this.growthRange);
    this.value = this.investment * growth;
    this.failChance *= 1 - config.failChanceReduction;
  }
}

class Step {
  constructor(startups, vcBudgetM) {
    this.startups = startups;
    this.vcBudgetM = vcBudgetM;
  }

  get numStartups() {
    return this.startups.length;
  }
}

class VCResults {
  constructor(config, steps) {
    this.config = config;
    this.steps = steps;
  }
}

function runSimulation(config) {
  let budget = config.initialBudget;
  let startups = [];
  let steps = [];

  for (let quarter = 1; quarter <= config.maxQuarters; quarter++) {
    budget -= config.vcOperatingCost;
    let numStartups = randomInt(...config.startupRange);
    for (let i = 0; i < numStartups; i++) {
      const investment = randomUniform(...config.investmentRange);
      if (budget >= investment) {
        const failChance = randomUniform(...config.failChanceRange);
        const growthRange = randomUniform(...config.growthRange);
        budget -= investment;
        startups.push(new Startup(investment, failChance, growthRange));
      }
    }

    startups.forEach((startup) => {
      startup.update(config);
      if (startup.value > 0) {
        budget += startup.value * config.revenuePercent;
      }
    });

    startups = startups.filter((s) => s.value > 0 && !s.exit);
    steps.push(new Step([...startups], budget / 1000000));

    const activeStartups = startups.length;
    const totalValue = startups.reduce((acc, s) => acc + s.value, 0);
    console.log(
      `Quarter ${quarter}: Budget = $${budget.toFixed(
        2,
      )}, Active Startups = ${activeStartups}, Total Startup Value = $${totalValue.toFixed(
        2,
      )}`,
    );

    if (budget <= 0) {
      console.log(`VC is broke on quarter ${quarter}. Simulation ends.`);
      break;
    }
  }

  return new VCResults(config, steps);
}

function plotResults(results, config) {
  const vcBudgets = results.steps.map((step) => step.vcBudgetM);
  const quarters = vcBudgets.map((_, idx) => `Q${idx + 1}`);
  const numStartups = results.steps.map((step) => step.numStartups);

  const layout = {
    title: "VC Budget and Startup Count Over Time",
    titlefont: { size: 18, color: "#d5c4a1" }, // base05
    showlegend: false,
    grid: {
      rows: 2,
      columns: 1,
      pattern: "independent",
      roworder: "top to bottom",
    },
    paper_bgcolor: "#282828", // base00
    plot_bgcolor: "#282828", // base00
    xaxis: {
      title: "Quarter",
      domain: [0.1, 1],
      titlefont: { size: 12, color: "#d5c4a1" }, // base05
      tickfont: { size: 8, color: "#d5c4a1" }, // base05
      tickcolor: "#d5c4a1", // base05
      gridcolor: "#504945", // base02
    },
    xaxis2: {
      title: "Quarter",
      domain: [0.1, 1],
      titlefont: { size: 12, color: "#d5c4a1" }, // base05
      tickfont: { size: 8, color: "#d5c4a1" }, // base05
      tickcolor: "#d5c4a1", // base05
      gridcolor: "#504945", // base02
    },
    yaxis: {
      title: "VC Budget (Millions $)",
      titlefont: { size: 13, color: "#d5c4a1" }, // base05
      tickfont: { size: 12, color: "#d5c4a1" }, // base05
      tickcolor: "#d5c4a1", // base05
      gridcolor: "#504945", // base02
    },
    yaxis2: {
      title: "Number of Startups",
      titlefont: { size: 13, color: "#d5c4a1" }, // base05
      tickfont: { size: 12, color: "#d5c4a1" }, // base05
      tickcolor: "#d5c4a1", // base05
      gridcolor: "#504945", // base02
    },
    margin: { l: 50, r: 50, t: 100, b: 50 },
    responsive: true,
    automargin: true,
  };

  const budgetTrace = {
    x: quarters,
    y: vcBudgets,
    xaxis: "x1",
    yaxis: "y1",
    type: "scatter",
    mode: "lines+markers",
    name: "VC Budget (in millions)",
    line: { color: "#d5c4a1" }, // base05
    marker: { size: 8, color: "#d5c4a1" }, // base05
  };

  const startupsTrace = {
    x: quarters,
    y: numStartups,
    xaxis: "x2",
    yaxis: "y2",
    type: "bar",
    name: "Number of Startups",
    marker: { color: "#665c54" }, // base03
  };

  Plotly.newPlot("plot", [budgetTrace, startupsTrace], layout, {
    responsive: true,
  });
}
