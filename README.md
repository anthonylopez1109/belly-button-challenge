# Belly Button Biodiversity Dashboard

## Project Description
In this project, I built an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes (operational taxonomic units, or OTUs) that colonize human navels. The dataset reveals that a small handful of microbial species are present in more than 70% of people, while others are relatively rare.

This project allows users to interactively visualize the microbial biodiversity data and explore demographic information, bar charts, and bubble charts.

## Features
- **Dropdown Menu**: Select an individual’s ID to dynamically update charts and demographic information.
- **Bar Chart**: Displays the top 10 most common OTUs for the selected individual.
- **Bubble Chart**: A scatter plot where the size and color of each bubble represent different characteristics of the sample.
- **Demographic Information**: Displays detailed metadata about the individual based on the selected ID.
- **Interactive Update**: When a new sample is selected from the dropdown, all charts and metadata are updated automatically.

## Dataset
The dataset consists of three main components:
- `metadata`: Demographic data for each individual in the study.
- `samples`: Data about the microbial samples from each individual, including OTU IDs, sample values, and OTU labels.
- `names`: A list of sample IDs corresponding to the individuals in the study.

The data is hosted at:
- `https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json`

## How It Works
The app works by loading data from the `samples.json` file and visualizing it in the following ways:
1. **Bar Chart**: A horizontal bar chart displays the top 10 OTUs for the selected individual. The chart shows the `otu_ids` as labels, `sample_values` as values, and `otu_labels` as hover text.
2. **Bubble Chart**: A scatter plot shows the distribution of samples for the selected individual, where the x-axis represents the OTU IDs, the y-axis represents the sample values, the marker size is proportional to the sample values, and the marker color corresponds to the OTU IDs.
3. **Demographic Info**: The metadata for the selected individual is displayed, showing personal information such as age, gender, ethnicity, and location.




