---
title: 'Principle #4 Validate early &#038; often'
pubDate: 2023-06-19T15:10:47+01:00
author: 'Dr Jonathan Berry'
summary: 'Validation builds confidence in your data.  It should be automated and happen early in data workflows.'

guid: 'https://www.fjelltopp.org/?p=1537'
permalink: /data-management-principle-validate-early-often/
image: /media/Untitled-design-42-1600x685.png
type: "Article"
language: "en"
tags:
    - 6Principles
    - DataManagement

authImage: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png'
---

*This is the fifth post in a series that outlines “[Six principles for sound data management](/six-principles-of-sound-data-management/)“.*

---

Every data-centred system needs a comprehensive validation strategy of some sort. What is yours?

This is especially important for human-generated data. Without validation you cannot have confidence in your data. Without validation, your data could actually be breaking your system and other systems that depend on it. Validation is a central part of Fjelltopp’s work towards our mission of harmonising health data.

Health data is notoriously messy. We’ve seen it all: Microsoft Excel date formats crashing entire software systems, a health worker claiming they had vaccinated tens of thousands of individuals in a single day, countries stating that the number of people who have tested positive for a disease is larger than the number of people tested for that disease.

Each and every one of these validation issues undermines the data quality, thereby undermining the decisions made with that data and the wider reaching impact of those decisions. The quality of data and metadata poses the single biggest threat to health information system interoperability.

This article will help you design and evaluate your data validation strategy.

## **Validate Early**

Validation should take place wherever there is an “unknown entity” interacting with your data. Furthermore it should take place *as early as possible* after that interaction to minimise the knock on effect of poor data quality across your system. As discussed in principle [\#3 Automate where possible,](https://www.fjelltopp.org/data-management-principles-3-automate-wherever-possible/) “Computer’s don’t make mistakes; humans do.” Humans are likely to be the most common “unknown entity” in your system!

In most public-health cases it is therefore essential to validate at the point of “data entry”. In many of Fjelltopp’s projects data is submitted by humans using an electronic form. Implementing sound input validation as part of the form’s user interface is essential. In Fjelltopp’s project [“The AIDS Data Repository”](https://www.fjelltopp.org/project/the-aids-data-repository-for-unaids-geneva/) users prepare and submit data tables to our data repository. Each table receives comprehensive validation every single time a new version is uploaded to our system.

<div class="wp-block-media-text alignwide has-media-on-the-right is-stacked-on-mobile is-image-fill" style="grid-template-columns:auto 37%"><div class="wp-block-media-text__content">Humans may interact with data in ways that wouldn’t immediately be thought of as “data entry” e.g. data approval, review, and transformation. After each interaction, the data should be revalidated.

“Unknown entities” aren’t always easily identified as humans. Code that generates or acts upon data may be an unknown entity as well (because it has been written by a human). Each time a human interacts with the code, they interact with the data. In this case, appropriate validation actually looks like software testing to “validate” the code change. When using third-party code you have to consider the degree to which you trust the developers. In some cases it may be appropriate to treat the code as an “unknown entity” and validate the results of the code.

</div><figure class="wp-block-media-text__media" style="background-image:url(https://www.fjelltopp.org/media/fjelltopp-about_our_experts_new_01-1174x1200.jpg);background-position:50% 50%">![](https://www.fjelltopp.org/media/fjelltopp-about_our_experts_new_01-1174x1200.jpg)</figure></div>## **Validate Often**

That may sound like a whole lot of validation. If you are currently checking data manually, you are probably thinking that the proposal above is unrealistic. And you would be correct!

Validation should be automated wherever possible.

It is very repetitive. However, broadly speaking, the more you validate, the more confidence you have in your data. In software engineering, manual testing of your code base is a recipe for collapse as the project grows. These tests should always be automated and they should run as quickly as possible. The same is true for data validation. In fact, in many ways data validation is analogous to software testing and error handling.

## **The Four Dimensions of Data Validation**

Based on our experience at Fjelltopp we have identified four different dimensions to data validation. A good validation strategy will consider:

<div aria-hidden="true" class="wp-block-spacer" style="height:25px"></div><div class="wp-block-media-text alignwide is-stacked-on-mobile is-image-fill" style="grid-template-columns:30% auto"><figure class="wp-block-media-text__media" style="background-image:url(https://www.fjelltopp.org/media/Untitled-design-43-1200x1013.png);background-position:50% 50%">![](https://www.fjelltopp.org/media/Untitled-design-43-1200x1013.png)</figure><div class="wp-block-media-text__content">**\[1\] Column constraints**

*These simple constraints only relate to a single field or column in a data record. Examples include checking the data type, making the field required/not required, restricting the possible values, ensuring numbers are within a certain range, or text is under a certain character limit.*

**\[2\] Row constraints**

*Row constraints relate to a single data record, but concern interactions between fields within that record. For instance, you may wish to ensure that: field A is greater than field B; that the sum of multiple fields is always 100%; or require a value for either field A or field B, but not both.*

**\[3\] Table constraints**

*These constraints concern all records/rows in a given data table. Perhaps the most common table-level constraint is the uniqueness constraint for a primary or composite key. Checking that a value is unique requires comparing it against every other row in the table. Other table level constraints we have come across include: requiring all values to be within “n” standard deviations of the overall mean; or checking that your long format data has a consistent number of entries for each field.*

**\[4\] Dataset (or data package) constraints**

*Some constraints can actually concern multiple tables. The most common dataset-level constraint is the foreign key check – ensuring that all values in a given column are also found in a column from a different table. This is a common requirement in relational database design. Another example of a dataset-level constraint is to simply require that certain data tables are included in your dataset.*

</div></div><div aria-hidden="true" class="wp-block-spacer" style="height:25px"></div>## **Errors vs Warnings**

There is a difference between validation errors and warnings – the former should block the data workflow, the latter should raise awareness but not actually block the workflow. It is important to consider carefully what should be an error or a warning. In our experience, if you are at all unsure it is best to err on the side of “non-blocking” – make the issue a warning until you are confident it can be treated as an error.

A good validation engine ideally has the flexibility to distinguish between many levels of severity. We envisage something similar to the Python logging framework: issues are ranked by severity, and thresholds set at “runtime” to identify them as *blocking*, *non-blocking* or *ignored*. If you ever find a tool capable of this, please let us know!

<figure class="wp-block-image size-large">![Fjelltopp Home Header](https://www.fjelltopp.org/media/Fjelltopp-Home-Header-e1669718187227-1200x495.jpg)</figure>## **Tools that you may be interested in**

There are a number of open-source tools out there to help you validate your data. Here are just a few examples we have found to be most interesting:

- [**XLSForms**](https://xlsform.org/en/) is an Excel based syntax for defining electronic forms for data entry using the [XForm](https://www.w3.org/TR/xforms11/) standard. It includes a range of validation features to ensure data input is clean.
- **[Frictionless Data](https://frictionlessdata.io/)** is a Python &amp; R based framework providing tools for validation of data tables and packages along all four validation dimensions.
- **[Pandera](https://pandera.readthedocs.io/en/stable/)** is a Python tool for validating Pandas dataframes.
- **[R Validate Package](https://cran.r-project.org/web/packages/validate/index.html)** is an R tool for validating R data frames.

---

## We’d love to know what you think…

Set up a meeting with us [here](https://docs.google.com/forms/d/e/1FAIpQLSdzzKi5MGz4I45KUxFhOfdwXAr9gNzWs5CRi9REblm3LVI0Hg/viewform). We’ve got some questions to get you thinking:

- Where do “unknown entities” (e.g. humans) interact with your data?
- How would you rank each point of interaction according to the risk it poses?
- Are you validating each point of interaction? If so, is it automated or manual?
- Which of the four dimensions of validation are relevant?
- Should your validation checks block the data workflow?

<div aria-hidden="true" class="wp-block-spacer" style="height:31px"></div><div class="wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-5 wp-block-buttons-is-layout-flex"><div class="wp-block-button">[Read Principle #5 Version Everything](/data-management-principle-version-everything/)</div></div><div aria-hidden="true" class="wp-block-spacer" style="height:29px"></div>
