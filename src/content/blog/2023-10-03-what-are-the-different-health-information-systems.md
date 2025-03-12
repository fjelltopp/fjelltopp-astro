---
title: 'Six open-source health information systems you should know about'
pubDate: 2023-10-03T11:31:22+01:00
author: 'Dr Jonathan Berry'
summary: 'We summarise six of the most important open source health information systems. '

guid: 'https://www.fjelltopp.org/?p=1928'
permalink: /what-are-the-different-health-information-systems/
footnotes:
    - ''
coverImage: ../../assets/dots/dots3.png
type: "Article"
language: "en"
tags:
    - 6Principles
    - DataManagement

authImage: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png'
---

Have you ever started to look into a solution for your health data issue but have no idea where to start? Often people go looking for answers but just end up with an avalanche of no context technical jargon and end up further from a solution than when they started.

Here at Fjelltopp, we appreciate that not everybody is as into tech as we are, and we certainly don’t want to add to the aforementioned information avalanche either. So here’s the health information systems that could be the start of fixing your health data issues, what they do and why they might work for you.

###What are Routine Health Information Systems (RHIS)?

RHIS is an umbrella term used to refer to all systems that are designed to collect, manage, analyse and report on health-related data in a routine and systematic manner. This data is needed to make good decisions that lead to improved health. Many of the countries we work with struggle to implement such systems, due to the complexity of the data demands, the lack of resources and expertise, the need to agree on standards for metadata and exchange, poor co-ordination between financial and political partners, no clear legal guidance on data-protection, and more…

In theory an RHIS could be constructed from a set of tools that are as simple as Excel files, Word documents and emails. Many of our clients collect, report and exchange health data in this manner. However, it is generally impractical to scale such a manual arrangement to a national or international level. Because of this, there are a large number of RHIS software solutions being developed, including several open source projects funded and developed for the international development sector.

<div class="wp-block-media-text is-stacked-on-mobile"><figure class="wp-block-media-text__media">![](https://www.fjelltopp.org/media/Portrait-Home-2-800x1200.jpg)</figure><div class="wp-block-media-text__content">The aim of these software systems is to improve…

- Timeliness
- Completeness
- Accuracy
- Consistency
- Practicality
- Auditability

…of routine health data collection.

In this article we will briefly outline a number of key open-source projects that are designed to deliver high-quality health information systems:

- DHIS2
- OpenEMR
- OpenMRS
- Fjelltopp’s health surveillance
- OpenLMIS
- OpenHIM

Now let’s dig a little deeper into what these health information systems can really do…

</div></div>## Health Information System 1: DHIS2

[DHIS2](https://dhis2.org/) stands for District Health Information Software. It is used to collect aggregated and individual data, to store data and to share it. It includes mobile data-collection applications (DHIS2 capture) with LMIS capabilities, charts and reports, and unlimited data sets and programs.

It’s widely used (in more than 80 countries) so has an incredibly strong support network and continues to be under active maintenance with updates published frequently. DHIS2 has many packages already available and custom web applications implemented, but you can also write new packages and web applications for the system.

This health information system is great for collecting, storing and sharing country data, and it is highly interoperable with other systems. It has become ubiquitous across low and middle income countries.

In Fjelltopp’s experience, despite the system’s popularity, it is not without fault. It was originally built for the purposes of collecting aggregated data; the solutions later put in place to manage individual data, especially over multiple appointments, are quite complex to configure and manage. The UI can be very clunky and the options for configuring the system “as code” are somewhat restrictive – much of the complex configurations have to be created/edited manually by hand in the UI, which is a laborious and fiddly process.

###Health Information System 2: OpenEMR

[OpenEMR](https://www.open-emr.org/) is an open-source cloud-based solution for “Electronic Medical Records”. It differs from DHIS2 in that its primary function is to support medical practices to manage and record the outcomes of their patient appointments. Medical records are the notes kept during a patient appointment for retrospective review in future appointments.

<div class="wp-block-media-text has-media-on-the-right is-stacked-on-mobile"><div class="wp-block-media-text__content">However, OpenEMR also includes tools to aid appointment scheduling, prescribing of medicines, billing, lab integration, implementation of clinical algorithms and more. The breadth of scope leads to a somewhat more complicated user experience.

Custom modules can be written for the system, and there are many pre-designed but customisable forms.

This health information system is a complex system with many great features for big organisations. It’s widely used, serving over 20,000 facilities and over 90,000,000 patients. For big facilities who want an all-in-one system to manage patients, billing, contact, notifications and more, this is the system for them.

</div><figure class="wp-block-media-text__media">![](https://www.fjelltopp.org/media/Street-US-Aditya-Chinchure-2-1200x800.jpg)</figure></div>## Health Information System 3: OpenMRS

[OpenMRS](https://openmrs.org/) is also an open-source medical records system. It’s used in over 40 countries with 16,600,000 patients and is well-maintained and documented. This health information system has a simpler scope than OpenEMR, but with it also a simpler, more intuitive user interface. Its use can be integrated into an organisation fairly seamlessly.

New modules and customisations can be written for OpenMRS and it can also integrate with OpenSHR (shared health record) within it.

This is the health information system for smaller organisations that only require a system to manage patient records.

###Health Information System 4: Fjelltopp’s Health Surveillance

The Fjelltopp team was founded to develop a health surveillance system for Jordan during the Syrian refugee crisis. We built a custom Python/Javascript solution which offered:

- Integrated case-based surveillance – collection of detailed health surveillance data at a patient level (not just an aggregated level).
- Mobile data collection – Using Open Data Kit (ODK) on tablet computers to implement easy-to-use multi-lingual data collection forms.
- Dashboard, analysis, mapping and reporting tools, including HTML and PDF reports generated and distributed automatically on pre-specified schedules.
- Compliance with international standards e.g. ICD and recognised clinical algorithms.
- Real-time analysis – Using message queues and asynchronous frameworks to process and aggregate each form immediately after submission.
- Completeness and timeliness monitoring – Cross checking case-based surveillance against aggregated data also submitted on a daily schedule.
- Implementations of event-based surveillance, indicator based surveillance and some logistics and supplies monitoring.

This low-cost rapidly deployable solution was also adopted as part of WHO’s response to endemic bubonic plague in Madagascar, the 2017 pre-famine warning in Somalia and the Central African Republic civil war. The solution was published open source on Fjelltopp’s Github page.

###Health Information System 5: OpenLMIS

<div class="wp-block-media-text has-media-on-the-right is-stacked-on-mobile"><div class="wp-block-media-text__content">[OpenLMIS](https://openlmis.org/) is a little different to the systems discussed so far. It is a logistics management system that is built specifically for the health sector. It helps tackle the complexity of managing health commodity supply chains. On this health information system, you can handle:

- Orders management
- Requisitions
- Supplies stock management (inventory)
- Cold chain equipment management

All with customisable forms and the possibility to write new modules if needed.

This is perfect for organisations needing supply management and cold chain equipment logistics solutions.

</div><figure class="wp-block-media-text__media">![](https://www.fjelltopp.org/media/Untitled-design-36-2.png)</figure></div>## Health Information System 6: OpenHIM

[OpenHIM](http://openhim.org/) stands for Open Health Information Mediator. It is very likely that at a national or international level, institutions will have many different routine health information systems in place. Open HIM is a “middleware component designed to ease interoperability between health systems”. That means it is a system primarily designed to be used by other systems, instead of end users. It offers a “translation service” to enable different health information systems to talk to each other and exchange data.

Pre-built open-source “mediator” components translate e.g. DHIS2 requests, or OpenLMIS requests, into a standardised language thereby aiding the exchange of information between systems. Tools are offered to enable system administrators to monitor the flow of these requests.

We include OpenHIM here Fjelltopp sees interoperability between health information systems as a matter of great importance and interest at this time. Also of note is the work of the OpenHIE community (Open Health Information Exchange) which is actively developing towards an open and standardised framework for health information exchange.

For those looking to smoothly make multiple health information systems, such as DHIS2, interoperable with each other – OpenHIM may be able to help.

###So how can we help?

There are too many systems to write about in a single blog post, but we hope we have given a flavour of the breadth of systems that exist. Now you know a bit more about these high-profile open-source health information systems, let’s take a look at how we can support you.

At Fjelltopp, we can support you with:

- Setup
- Training
- Writing new modules/customising existing ones
- Managing your important metadata
- Implementing system Monitoring/Integrity features
- Data analysis support

We don’t just set you up and go, we’ll stick around until you no longer need us.

So that’s a \*brief\* introduction to health information systems. Now it’s time to have a chat. Please don’t hesitate to get in touch for a free, no strings attached catch up. Let’s find a solution for you. Get in touch [here](https://www.fjelltopp.org/contact/).
