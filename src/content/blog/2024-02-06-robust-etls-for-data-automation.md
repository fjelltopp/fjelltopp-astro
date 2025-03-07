---
title: 'Robust ETLs for data automation'
pubDate: 2024-02-06T15:46:54+00:00
author: 'Jonathan Berry'
summary: 'Understanding how to build robust ETL (Extract, Transform, Load) processes is crucial in today’s data-driven world. '

guid: 'https://www.fjelltopp.org/?p=2015'
permalink: /robust-etls-for-data-automation/
image: /media/Untitled-design-40-1-1600x685.png
type: "Article"
language: "en"
authImage: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png'
tags: []
---

Understanding how to build robust ETL (Extract, Transform, Load) processes is crucial in today’s data-driven world. At Fjelltopp, we’ve honed our skills in creating ETLs that not only manage data efficiently but also ensure its integrity and usability. This is critical in high-impact fields such as public health and international development

This article will introduce the concept of ETLs for automating data management, and give you a metric by which to assess whether an ETL has been built well.

<div aria-hidden="true" class="wp-block-spacer" style="height:47px"></div>## What is an ETL?

Extract Transform Load (ETL) pipelines are a common architectural pattern in data engineering. There are all sorts of situations where data needs to first be extracted from some source, transformed in some manner and then finally loaded into a target system. The purpose of building an ETL might be to ingest data from a third party system into your own, or to push data from your system into a third party system, or just to validate and clean up data in your own system. In this final case the source system and the target system are the same.

Fjelltopp have worked upon many different ETL solutions for our clients, including multiple solutions that push data into, and pull data out of, the [DHIS2 platform](https://dhis2.org) – an open-source health information system used widely across Africa. We have also built ETLs that pull data from source into PowerBI dashboards, or that automate aggregation, cleaning and validation processes upon data uploaded to a CKAN instance.

<figure class="wp-block-image size-large">![](https://www.fjelltopp.org/media/fjelltopp-about_our_experts_new_01-edited.jpg)</figure>## ETLs vs ELTs

More recently there has been a rise in the use of the term “ELT” meaning to extract from source, immediately load into the target system, before running any data transformations. In this model the source data is duplicated in the target system before it undergoes any transformation steps. This points to the importance of maintaining clear audit trails and versioning in your system, as it avoids the risk of blackboxing transformations in some unknown third system. In practice the two terms are often used interchangeably, but it is interesting to reflect on the conceptual difference between them.

## First things first – access &amp; orchestration

Before embarking on building an ETL (Extract, Transform, Load) process, you’ll need to ensure that the data you want to work with is stored in a centralised storage system with machine/programmatic access (most likely via an API). This might be an SQL database or cloud-based storage solution. Fjelltopp has particular experience working with the [CKAN platform](https://www.fjelltopp.org/service/ckan-support-service/), which provides extensive features via its API to search, read and write data and associated metadata. This is your source system, from which you will “extract” data.

<div class="wp-block-media-text is-stacked-on-mobile"><figure class="wp-block-media-text__media">![](https://www.fjelltopp.org/media/fjelltop-service03-image01-1200x1191.jpg)</figure><div class="wp-block-media-text__content">In a similar way you will also need to ensure that you have machine access to the target system into which you want to “load” your data. In some cases this may actually be the same as your source system.

Finally you will need a framework to host and orchestrate your ETL. Each ETL is a piece of software built to automate a particular workflow. These typically need to be run from a PC, or server, in an asynchronous manner and often as background jobs. On many occasions they need to be scheduled to run on a periodic basis, or triggered to run by specific events. When an ETL fails, we need proper logs and notifications to be raised, so that further action can be taken to make a fix. There are many frameworks out there to help with this challenge of ETL orchestration, e.g. [AWS Glue](https://aws.amazon.com/glue/), [Azure Data Factory](https://azure.microsoft.com/en-gb/products/data-factory) and the popular open source solution [Apache Airflow](https://airflow.apache.org/).

</div></div>## Six marks of a robust ETL

Fjelltopp has extensive experience building robust data processing ETL/ELTs to clean, transform, normalise and move data as well as to check data quality and integrity. Examples include building ETLs that: push data from our public health surveillance software into DHIS2, pull data from DHIS2 into the ADR, validate data in the ADR, clean and analyse data for our research projects, and support PowerBI dashboards for WHO Romania and WHO EMRO.

Using our experience we have put together what we call our “six marks of a robust ETL”. Let us know if you think anything is missing!

---

1. **Separated input and output data** – The raw input data should be clearly identified, and the ETL should not change/touch it. The ETL should store its outputs separately to its inputs – it should always be possible to retrospectively distinguish between the inputs and outputs of an ETL run. This is essential for versioning and traceability.
2. **Idempotency –** Running the ETL successfully multiple times should yield the same result. i.e. it should not create duplicate records, or throw errors because output already exists from a previous run.
3. **Flexible input, strict output –** The ETL should be as flexible as possible with regards to the format of its input data, but always provide a strictly predictable output format.
4. **Clear logging –** Proper logging frameworks should be used to record information about an ETL run at varying degrees of severity. Detailed logs of each run should be kept for the purpose of debugging and accountability.
5. **Versioning and archiving** – It should always be possible to retrospectively identify the version of the ETL code that was run, the exact data inputs used for the run, and the outputs it generated, so that bugs can be reproduced and understood.
6. **Security –** ETLs should use industry standard security practises to connect to data sources and targets, ensure data is always encrypted at rest and in transit, and that access to the data through any orchestration tool (e.g. Apache Airflow) is restricted and monitored.

---

For further information consider reading our blog post entitled [“Principle: #3 Automate wherever possible”](https://www.fjelltopp.org/data-management-principle-automate-wherever-possible/).

<div aria-hidden="true" class="wp-block-spacer" style="height:21px"></div>## We’d love to know what you think…

In a world where data is king, building robust ETLs is not just a technical necessity but an art that requires a deep understanding of data and its nuances. At Fjelltopp, we’re committed to pushing the boundaries of what ETLs can achieve, ensuring data integrity, security, and usability.

<div class="wp-block-media-text is-stacked-on-mobile"><figure class="wp-block-media-text__media">![](https://www.fjelltopp.org/media/PIXA4314_1-1200x800.jpg)</figure><div class="wp-block-media-text__content">We’d love to hear what you think, especially in relation to the following questions:

- Are there any processes or workflows in your office that could be automated using an ETL?
- Does your office have the necessary tools in place to support automation of workflows through ETL development?
- If you are an engineer, what do you think of our “six marks of a good ETL”? Are we missing anything that is really important?

</div></div>
