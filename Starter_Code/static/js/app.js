const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

// Option changed function to update charts and demographic info based on selected ID
const optionChanged = async id => {
    const { names, metadata, samples } = await d3.json(url);

    // Set the default ID if none is provided
    if (!id) {
        id = names[0];
    }

    // Populate the dropdown with options if it's not already populated
    let dropdown = d3.select("#selDataset");
    dropdown.html(''); // Clear any existing options before adding new ones

    // Append options to the dropdown
    names.forEach(name => {
        dropdown.append("option")
                .text(name)
                .property("value", name); // Use property to set the value
    });

    // Set the dropdown's value to the selected id
    dropdown.property("value", id);

    // Get metadata for selected ID
    let meta = metadata.find(obj => obj.id == id);
    let { otu_ids, sample_values, otu_labels } = samples.find(obj => obj.id == id);

    // Demographic Info
    d3.select('#sample-metadata').html('');
    Object.entries(meta).forEach(([key, val]) => {
        d3.select('#sample-metadata').append('h6').text(`${key.toUpperCase()}: ${val}`);
    });

    // Bar Chart
    var barData = [
        {
            x: sample_values.slice(0, 10).reverse(),
            y: otu_ids.slice(0, 10).reverse().map(x => `OTU ${x}`),
            text: otu_labels.slice(0, 10).reverse(),
            type: 'bar',
            orientation: "h"
        }
    ];
    Plotly.newPlot("bar", barData);

    // Bubble Chart
    var bubbleData = [
        {
            x: otu_ids,
            y: sample_values,
            mode: 'markers',
            marker: {
                size: sample_values, // Bubble size corresponds to sample_values
                color: otu_ids,      // Bubble color corresponds to otu_ids
                colorscale: 'Viridis' // Color scale for better visualization
            },
            text: otu_labels // Hover text shows the otu_labels
        }
    ];

    var bubbleLayout = {
        title: { text: 'Bubble Chart' },
        showlegend: false,
        height: 600,
        width: 1200
    };

    Plotly.newPlot('bubble', bubbleData, bubbleLayout);
};

// Initialize with the first option selected
const init = async () => {
    const { names } = await d3.json(url);
    optionChanged(names[0]); // Call the function with the first sample by default
};

// Trigger the initial plot
init();
