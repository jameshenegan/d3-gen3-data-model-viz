/**
 * Basic Setup for the Viz
 *
 */

// set up the canvas

const height = 800;
const width = 800;
const marginSize = 200;
const yOffset = 50;
const xOffset = 150;
const colorScale = d3.schemeCategory10;

const svg = d3
  .select("#viz")
  .append("svg")
  .attr("viewBox", `0 0 ${width + marginSize} ${height + 100}`);

const vizGroup = svg.append("g");

// create a blue, rectangular background for the viz group
// why?  so that if you zoom out, things won't look weird

vizGroup
  .append("rect")
  .attr("x", -3000)
  .attr("y", -3000)
  .attr("height", height + marginSize + 6000)
  .attr("width", width + marginSize + 6000)
  .attr("fill", colorScale[0]);

/**
 * Tree: Data prep, nodes and links
 *
 */

// instantiate the stratify function for the tree data
// this will help convert our data into a hierarchy
const stratify = d3
  .stratify()
  .id((d) => d.name)
  .parentId((d) => d.parent);

// apply the function to our data
// this returns the root of the hierarchy
const rootNode = stratify(data);

// instantiate the tree function
// this computes the locations of the nodes of the tree
const tree = d3.tree().size([width, height]);

// apply the tree function to our data
// this gives us information about the nodes of the tree
const treeData = tree(rootNode).descendants();

// get nodes selection and join data
const nodes = vizGroup.selectAll(".node").data(treeData);

// get link selection and join new data
const link = vizGroup.selectAll(".link").data(tree(rootNode).links());

// enter new links
link
  .enter()
  .append("path")
  .attr("class", "link")
  .attr("fill", "none")
  .attr("stroke", "#aaa")
  .attr("stroke-width", 2)
  .attr(
    "d",
    d3
      .linkVertical()
      .x((d) => d.x + xOffset)
      .y((d) => d.y + yOffset)
  );

// Text
const enterNodes = nodes
  .enter()
  .append("g")
  .attr("class", "node")
  .attr("transform", (d) => `translate(${d.x + xOffset}, ${d.y + yOffset})`)
  .append("text")
  .attr("text-anchor", "middle")
  .attr("dy", 5)
  .attr("fill", "white")
  .text((d) => d.data.name)
  .attr("transform", (d) => `translate(${-(d.data.name.length + 100)}, ${0})`);

/**
 * Zoom functionality
 *
 */

// Set up the zoom function
const zoom = d3.zoom().scaleExtent([0.5, 32]).on("zoom", zoomed);

// Have the svg call the zoom function
svg.call(zoom).call(zoom.transform, d3.zoomIdentity);

function zoomed({ transform }) {
  // Update the vizGroup based on the zoom transform object
  vizGroup.attr("transform", transform);
}

/**
 * Bubble Packs
 *
 */

const totalSize = 95;

// Define the div for the tooltip
var div = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

const makeCirclePack = (term, source) => {
  const { x, y } = treeData.filter((node) => node.id === term)[0];

  const localNode = vizGroup
    .append("g")
    .attr("transform", `translate(${x + xOffset}, ${y + yOffset})`); // to give a 50px margin
  const packStratify = d3
    .stratify()
    .id((d) => d.name)
    .parentId((d) => d.parent);

  const localData = dataKey[term];

  const rootNode = packStratify(localData).sum((d) => d.amount);

  // function used to compute the x,y, and r values
  const pack = d3.pack().size([totalSize, totalSize]).padding(10);

  const bubbleData = pack(rootNode).descendants();
  console.log({ pack, bubbleData });

  console.log(bubbleData);
  // join data and add group for each node
  const nodeGroups = localNode
    .selectAll("g")
    .data(bubbleData)
    .enter()
    .append("g")
    .attr(
      "transform",
      (d) => `translate(${d.x - totalSize / 2}, ${d.y - totalSize / 2})`
    );

  // returns an array of nodeGroups entered into the DOM (groups)

  nodeGroups.selectAll("circle").remove();

  // add circle to each node group
  nodeGroups
    .append("circle")
    .attr("r", (d) => {
      if (source === "") {
        return d.r;
      } else if (d.depth == 0) {
        return d.r;
      } else if (d.data.source !== source) {
        return 0;
      } else {
        return d.r;
      }
    })
    .attr("stroke", (d) => d3.schemeCategory10[7])
    .attr("stroke-width", 1)
    .attr("fill", (d) => {
      if (d.data.source === "Form") {
        return d3.schemeCategory10[4];
      } else if (d.data.source === "Derived") {
        return d3.schemeCategory10[5];
      } else if (d.data.source === "Instrument") {
        return d3.schemeCategory10[6];
      } else {
        return d3.schemeCategory10[d.depth + 1];
      }
    })
    .on("mouseover", (event, node) => {
      div.style("opacity", 1);
      div
        .html(`${node.data.name}`)
        .style("left", event.pageX + "px")
        .style("top", event.pageY - 28 + "px");
    })
    .on("mousemove", (event, node) => {
      div

        .style("left", event.pageX + "px")
        .style("top", event.pageY - 28 + "px");
    })
    .on("mouseout", function (event, node) {
      div.style("opacity", 0);
    })
    .on("click", zoomed);
};

const makeCircles = (nodeNames, source) => {
  nodeNames.forEach((term) => {
    makeCirclePack(term, source);
  });
};

makeCircles(nodeNames, "");

const handleChange = (event) => {
  event.target.value;
  makeCircles(nodeNames, event.target.value);
};
document.getElementById("select").addEventListener("change", handleChange);
