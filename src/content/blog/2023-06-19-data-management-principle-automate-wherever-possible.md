---
title: 'Principle: #3 Automate wherever possible'
pubDate: 2023-06-19T14:49:15+01:00
author: 'Dr Jonathan Berry'
summary: 'There are so many reasons to automate data management processes beyond the savings made in time and resources. '

guid: 'https://www.fjelltopp.org/?p=1531'
permalink: /data-management-principle-automate-wherever-possible/
image: /media/Untitled-design-39-1600x685.png
type: "Article"
language: "en"
tags:
    - 6Principles
    - DataManagement

authImage: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png'
---

*This is the fourth post in a series that outlines “[Six principles for sound data management](/six-principles-of-sound-data-management/)“.*

---

Data management is infamously repetitive. Tools like Excel are full of features that help you automate this repetition. For instance, dragging formulas across many rows can create sweeping changes to your data in just a few clicks. Macros might be used to automate other aspects of the spreadsheet, and even pull in up-to-date data from external sources.

Before such tools existed, just consider the amount of manual work involved in similar data management tasks, such as financial accounting. It was many orders of magnitude larger! This is the power of computing, the power of automation.

## **When Should you Automate?**

Wherever people are repeating themselves, automation should be introduced. This repetition may occur over time or space. Perhaps multiple people are having to perform the same task with your data, or perhaps the same person is having to perform the same task several times a week.

<div class="wp-block-image"><figure class="aligncenter size-full">![](https://www.fjelltopp.org/media/unnamed.png)</figure></div>## **Why Automate?**

Whilst the xkcd comic is insightful, there are more reasons to automate than simply saving time and money (which in itself is an excellent reason). You should probably consider automation even when the time saved will not necessarily match the time invested. Here’s why:

- **Computers don’t make mistakes; humans do.**  The more complex a task is, the greater the risk of human error. It is important to consider the impact of these errors. If they incur significant damage or costs elsewhere, they should be eradicated with automation.
- **Automation is documentation.** Where a task can be entirely performed by software, the code acts as a complete and detailed record of exactly how the task was performed. If someone later wishes to verify any aspect of how the given task was executed, they need just refer to the codebase. If a human performs the task, separate documentation needs to be created, which may itself incorporate human error.
- **Automation unlocks the power of repetition.** Perhaps you haven’t considered the *added benefit* of repeating a task more frequently? A task currently performed manually on an annual basis, could bring extra insight if performed weekly by some automation. Repetition can improve data accuracy, data timeliness, and facilitate cleaning data upstream at source.
- **Automating a process may improve the process design.** The act of automating a task offers an opportunity to review and improve the process behind that task. It may expose problems or weaknesses in the process that were embedded at the time of establishment. Maybe a data source is outdated. Maybe a data element is no longer needed, or maybe valuable data elements are being missed.

## **How to Automate**

In order to build automation you must have a way for software to read and write data to your system. This generally requires your data management system to have an Application Programming Interface (API). An API is a list of functions that can be called by a third party software module in order to perform system actions without requiring the software to simulate the act of interpreting text, clicking buttons or entering information into the User Interface (UI).

 It should be possible to do everything that a human does through the UI as a piece of software through the API. This is possible with the Open Source [CKAN](https://ckan.org/) data portal, which Fjelltopp has extensive experience working with.

A common model of automation is called an Extract-Transform-Load (ETL) pipeline. This is a common software design pattern: first extract data from some source, then transform the data in some manner before then loading it into some target system.

Building and orchestrating reliable and extendable ETLs is an art form. We recommend using existing technologies where appropriate, such as Pandas, PETL (Python ETL), Node-DataPumps, or Apache Airflow for orchestrating many large ETLs. Extensive content can be found across the internet concerning how to build good ETLS. This matter is beyond the scope of this article, but for further reading on the subject, here is one of our [favourite articles.](http://gtoonstra.github.io/etl-with-airflow/principles.html)

Consider automating important data management tasks that users don’t want to complete themselves. Your data management system should incorporate automation to support easy metadata creation, versioning, validation, archiving, and access management. Fjelltopp has found that a significant proportion of the desired metadata can be auto-filled in our systems with the right tweaks to the software. Furthermore we have created dataset templates that users can use when uploading their data. These templates provide sensible default metadata that can then be updated by the user with further detail.

<div aria-hidden="true" class="wp-block-spacer" style="height:0px"></div><div aria-hidden="true" class="wp-block-spacer" style="height:37px"></div><figure class="wp-block-image">![](https://www.fjelltopp.org/media/fjelltopp-service_header_new_04-2.jpg)</figure>## **Evaluating Automation**

If you or your contractors have built a module of automation it is important to properly evaluate the work. For each automated process you are responsible for, consider the following questions:

- Is the automation easily configurable according to your requirements?
- Does the automation run effectively for *all* possible inputs and configurations?
- Does the automation run in an acceptable time frame using the computing resources available?
- Are you informed when the automation fails and can you quickly access information explaining why it failed?
- Is the automation repeatable? I.e. Do you have a record of all factors contributing to the automation results including configuration parameters, the codebase, and the source data? This metadata should be stored somewhere.

The team here at Fjelltopp would be delighted to discuss any of the above points with you – you can set up a free meeting with us [here](https://docs.google.com/forms/d/e/1FAIpQLSdzzKi5MGz4I45KUxFhOfdwXAr9gNzWs5CRi9REblm3LVI0Hg/viewform).

<div aria-hidden="true" class="wp-block-spacer" style="height:35px"></div><div class="wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-4 wp-block-buttons-is-layout-flex"><div class="wp-block-button">[Read Principle #4 Validate early and often](/data-management-principle-validate-early-often/)</div></div><div aria-hidden="true" class="wp-block-spacer" style="height:35px"></div>
