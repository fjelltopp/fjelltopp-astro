---
title: 'Principle #6 Archive data upon each use'
pubDate: 2023-06-19T15:33:31+01:00
author: 'Dr Jonathan Berry'
summary: 'Immutable data archives are essential for transparent evidence-based decision making. '

guid: 'https://www.fjelltopp.org/?p=1552'
permalink: /data-management-principle-archive-data-upon-each-use/
image: /media/Fjelltopp-Homepage-1-1600x685.jpg
type: "Article"
language: "en"
tags:
    - 6Principles
    - DataManagement

authImage: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png'
---

*This is the seventh and final post in a series that outlines “[Six principles for sound data management](/six-principles-of-sound-data-management/)“.*

---

In our sector, the primary purpose of data is to support transparent, evidence-based decision making. Decisions concerning a national health system are often highly political in nature and need to be defended in order to carry any impact. The evidence (i.e. data) should always be kept, in order to make such a defence or to re-interpret the decision in light of new information.

<div aria-hidden="true" class="wp-block-spacer" style="height:25px"></div>> **Each time data is used for a purpose with some lasting impact, an immutable snapshot of the data should be “archived” for the duration of that impact.**

This is good data stewardship. Let’s dig into this with a few questions and answers…

---

**What do we mean when we say a data *“use”*?**

A data *use* might be a research paper, a report, an interactive dashboard view, an analysis of the data, a model built with the data, or any decision that is based upon the data and carries a lasting impact.

**What should be archived?**

It is a good idea to archive BOTH the data and all relevant metadata. The metadata makes sense of the data and is also subject to change over time. You should also carefully consider how you will associate the archived data with the data *use*. This may be achieved through a consistent naming system, or the location of the archive, or the addition of other metadata to the archive.

**Where should the data be archived?**

The data should be archived and backed up to MULTIPLE trusted, secure and accessible locations. Where possible, Fjelltopp keeps encrypted archives in multiple AWS data centres located around the globe, and a further copy on an entirely different cloud-services platform.

**What do you mean by *“immutable”*?**

The archived data should be locked and not open to any further change. The degree to which you trust evidence is in part determined by the degree to which you trust it has not been tampered with. In some contexts, such as the financial sector, this is REALLY important! Encryption and other techniques may be considered to ensure the archive is not tampered with. This is, in essence, what [“blockchain”](https://en.wikipedia.org/wiki/Blockchain) is all about.

**How long should the archived data be kept?**

We suggest that the archived data should be kept for “the duration of the impact” of the data *use*. In many cases this can be literally interpreted as “indefinitely”, since one decision can impact many other decisions, which in turn will impact even more decisions etc… The good news is that cloud-based data storage is remarkably cheap these days, so budgeting for this may not be much of a concern (at first).

**But seriously, how long should the archived data be kept?**

Of course it is impractical to store every piece of data for all eternity. Budgeting and resource restrictions may necessitate devising policies for cleaning your archive. What these should look like will be very specific to your particular context, but they should be proportional to the impact of the data *use*. In the UK, the law protects people from needing to keep legal documents for longer than 6 years. Similar laws may be relevant to your context. You could consider compressing older archives so they still offer some evidence, but not at the same level of detail. You may identify some archives as more important than others because the data *use* has a further reaching impact.

**Keeping lots of archives feels a bit like versioning to me…**

Yes! There is a lot of overlap between good versioning and good archiving. With good versioning in place, the task of good archiving becomes the task of organising and securing the versioning metadata. You need to be able to recall specific revisions of interest and you need to trust that those revisions have not been tampered with.

**So, what should I do now?**

Consider the following questions:

- How do people *use* your data? What is the impact of that *use?*
- Can you recall an immutable copy of the data for each time it was *used*?
- Put yourself in the position of someone questioning a decision made with your data – what metadata do they need to retrace the decision making process?
- Is the availability of archived data proportional to the impact of that data’s *use*?

Fjelltopp would be delighted to discuss any of the above points with you – you can set up a free meeting with us [here. ](https://www.fjelltopp.org/contact/)

<figure class="wp-block-image size-large">![](https://www.fjelltopp.org/media/FjelltoppTeam-1200x682.jpg)</figure>
