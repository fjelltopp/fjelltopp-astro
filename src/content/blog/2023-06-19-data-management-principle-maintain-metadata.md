---
title: 'Principle #2 Maintain metadata'
pubDate: 2023-06-19T14:16:59+01:00
author: 'Dr Jonathan Berry'
summary: 'Metadata is essential for data managed by large teams over long periods. It ensures data is findable and reusable. '
coverImage: ../../assets/dots/dots6.png
type: "Article"
language: "en"
tags:
    - 6Principles
    - DataManagement
authImage: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png'
---

*This is the third post in a series that outlines “[Six principles for sound data management](/six-principles-of-sound-data-management/)“.*

---

### Why Metadata?

A simple CSV or Excel file can be rendered entirely useless without appropriate “metadata”. Column names rarely provide enough information to truly understand the column content, because they are generally chosen for uniqueness and conciseness.

The answer to many questions must be known/inferred in order to use a piece of data for example:

- What unit was the data recorded in? e.g. Metres? Kilometres? Feet? Yards?
- Is the data restricted to certain values or a certain range?

There are also important questions about the wider dataset to be answered, such as:

- When was the dataset created?
- How was the dataset created?
- Why was the dataset created?

At the time of dataset creation and first-use, the answer to these questions may appear mundanely obvious. The answers likely reside in the mind of the researcher / engineer / epidemiologist who conducted data collection. If these answers aren’t clearly recorded somewhere, they will be lost with staff turnover or poor communication between team members. Metadata is therefore essential for datasets maintained and used for longer periods of time by larger teams.

### What is Metadata?

Metadata has been broadly defined by IEEE and the Dublin Core Metadata Initiative as [“structured data about data”.](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.88.5042&rep=rep1&type=pdf) Note that the emphasis in this definition is on the structuring of data. Related documentation, standard operating procedures, research papers (or even podcasts and other media) may contain plenty of “data about data”. Whilst these mediums may be engaging, they are unlikely to provide a complete reference for rapid comprehension of the dataset.

<Image class="w-full md:w-1/3 md:float-left py-5 md:pr-5" src="/fjelltopp-astro/src/assets/dots/dots5.jpg" alt="" />

By comparison, structured data is predictable, consistent, and organised, making it easier and quicker to browse and understand. Well-structured data is ideally machine readable and searchable, thereby promoting data:

- **Findability**
- **Accessibility**
- **Interoperability**
- **Reusability**

These four principles form the basis of the [FAIR manifesto for publishing scientific data](https://www.go-fair.org/fair-principles/). Practically speaking, such structured data may be distributed in tabular form, or something that offers a higher dimensionality, such as JSON, XML, or YAML.

Fjelltopp works primarily with two different types of metadata:

- **Data dictionaries** recording information concerning a dataset’s component fields and columns, especially promoting *interoperability* and *reusability.* Data dictionaries include information concerning columns, fields or elements of a dataset, including: name, description, creation date, units, type, origin and relationships to other elements.
- **Data catalogues** recording information concerning the organisation and categorisation of multiple datasets, especially promoting *discoverability* and *accessibility.* Data catalogues include information such as the dataset: name, description, author, maintainer, creation date, modification date, purpose, licence for use and sources. Data catalogues may also provide tools for tagging datasets according to particular topics of interest, or organising datasets under hierarchical structures.

### Challenges of Managing Metadata

Metadata poses several challenges to the data manager.

- There is a significant cost to creating and maintaining metadata in terms of time and money. The return from this investment is not seen immediately. It is important to pragmatically consider the expected lifetime and potential use of your data, so that you can set appropriate expectations for the management of your metadata.
- Unless expectations are reinforced by tools and procedural protocols it is likely that completeness, accuracy and timeliness of metadata will be poor. Tools and protocols should be configured to make metadata entry as easy as possible. Automate and pre-populate metadata creation wherever possible.
- It is rarely appropriate to block, or disrupt data entry due to the unavailability of metadata. For this reason it may not be feasible to make metadata mandatory at the point of data entry in order to improve its completeness. Other approaches have to be taken to encourage users to manage metadata responsibly.
- Metadata should be versioned alongside the actual data. If someone changes some metadata (e.g. the name or description), it is crucial that we understand who did it, why they did it and whether it should have any impact upon other metadata and data. Ensure your data management platform can version both data and metadata.

<Image class="w-ful py-5" src="/fjelltopp-astro/src/assets/product/fjelltopp-mock-up-3.jpg" alt="TODO" />

## Evaluating your Metadata

There are many examples of institutions defining their expectations of metadata in a public space. You may wish to review such examples and compare them against your own metadata. Consider carefully why expectations differ between institutions. The [following examples ](https://direct.mit.edu/dint/article/2/4/443/94892/The-Semantic-Data-Dictionary-An-Approach-for)are drawn from:

- [Data Dictionary Standards from Stony Brook University](https://www.stonybrook.edu/commcms/irpe/about/data_governance/_files/DataDictionaryStandards.pdf)
- [The Open Science Framework](https://help.osf.io/article/217-how-to-make-a-data-dictionary)
- [United States Government (USG) Statistical Community of Practice and Engagement](https://github.com/USG-SCOPE/data-dictionary/blob/gh-pages/Metadata-Scheme-for-Data-Dictionaries.md)
- The [Project Open Data Metadata Schema](https://project-open-data.cio.gov/v1.1/schema/) is based on the [Data Catalog Vocabulary](https://www.w3.org/TR/vocab-dcat-2/)

A study undertaken in Fjelltopp’s sector of epidemiology and public health implemented an online international stakeholder survey in order to identify [“dimensions of metadata quality”](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5001774/). The results are thought provoking and easily digestible. Consider how your metadata scores against the following criteria:

- **Accuracy** (correctness of the metadata)
- **Accessibility** (extent to which the metadata can be accessed)
- **Discoverability** (how visible the metadata are – can it be easily found)
- **Appropriateness** (extent to which the metadata are relevant)
- **Comprehensiveness** (extent to which the metadata are complete)
- **Interoperability** (can metadata be exchanged and used by 3rd parties?)
- **Timeliness** (is the metadata current, with accurate temporal information?)
- **Versionability** (extent to which a new version may be easily created)
- **Extendibility** (extent to which the metadata may be easily extended)
- **Meta-metadata** (the existence of metadata about the metadata)

---

<Image class="h-200 w-full md:w-1/3 md: float-right py-5 md:pl-5 object-cover object-center" src="/fjelltopp-astro/src/assets/pics/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg" alt="TODO" />

### Dos & Don'ts for Metadata Management

How do your data management practices stack up against the following list of dos and don’ts?

- **DON'T** Assume that you will always be around to answer questions about your dataset. Write the important information down in a structured manner and store it in a central location.
- **DON'T** Make metadata fields mandatory unless you are absolutely sure the field can be easily populated in all possible use cases.
- **DON'T** Store more metadata than is strictly necessary, given a careful consideration of your data’s lifetime and expected use. There is a tradeoff between metadata completeness and overhead incurred creating and maintaining metadata.
- **DO** Automate as much of the metadata creation process as possible.
- **DO** Consider incorporating open standards into your metadata schemas where possible.
- **DO** Configure and use tools to facilitate, prompt and encourage the creation and maintenance of metadata.
- **DO** Consider whether your metadata architectures respect cultural and linguistic diversity of your user base. This is especially important in an international setting.
- **DO** Consider making your metadata public even if you need to keep your actual data private. This may promote collaboration and knowledge sharing with trusted individuals.

Fjelltopp would be delighted to discuss any of the above points with you – you can set up a free meeting with us [here](https://docs.google.com/forms/d/e/1FAIpQLSdzzKi5MGz4I45KUxFhOfdwXAr9gNzWs5CRi9REblm3LVI0Hg/viewform).

[Read Principle #3 Automate wherever possible](/data-management-principle-automate-wherever-possible/)
