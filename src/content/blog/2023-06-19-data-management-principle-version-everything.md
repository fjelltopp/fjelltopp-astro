---
title: 'Principle #5 Version Everything'
pubDate: 2023-06-19T15:22:16+01:00
author: 'Dr Jonathan Berry'
summary: 'Without version control you risk losing everything. It ensures you have access to old versions of data and metadata. '

guid: 'https://www.fjelltopp.org/?p=1543'
permalink: /data-management-principle-version-everything/
image: /media/Fjelltopp-Home-1-1600x685.jpg
type: "Article"
language: "en"
tags:
    - 6Principles
    - DataManagement

authImage: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png'
---

*This is the fifth post in a series that outlines “[Six principles for sound data management](/six-principles-of-sound-data-management/)“.*

---

Without version control you risk losing everything.

Version control is a crucial (yet often overlooked) feature of any data management system. This essential tool can help you debug data-quality issues, base your decisions upon up-to-date data, and ensure that no data is ever lost.

In this article, we discuss the importance of maintaining a complete and clear history of all data *and* metadata changes – otherwise referred to as the dataset’s “audit trail”. We’ll show how Fjelltopp could help you implement this for your organisation’s data.

## What is version control?

Version control involves tracking and managing the changes made to your data over time. The term can encompass a wide range of features and tools but at the very least, version control should enable you to: review old revisions of your data, understand when they were made, who the author was and revert to them if necessary.

In software and data engineering the most popular tool used for this purpose is called [Git](https://git-scm.com/). This complex tool is the ‘gold standard’, providing a range of features that enable many people to work on many versions of the same data all at once. It is incredibly efficient in the way it stores each revision of the data. New versions can be branched from old versions and merged with other versions in a variety of ways. The date and author of each revision is recorded for the audit trail, which can often end up being more of a non-linear audit “network” over time.

Whilst Fjelltopp uses Git extensively, in our experience, many of our clients would not benefit from its complexity. For the most part a much simpler feature-set will suffice. We like how Google Drive/Docs does versioning. It records a linear list of revisions made to the document, including the author and time of the revision, allowing you to tag, filter and revert to revisions as desired. This is the approach we have implemented in our [CKAN](https://www.fjelltopp.org/service/ckan-support-service/) and [Health Data Hubs ](https://www.fjelltopp.org/service/data-hubs-for-health/)solutions.

## Why should you Version?

<div aria-hidden="true" class="wp-block-spacer" style="height:15px"></div><div class="wp-block-media-text alignwide has-media-on-the-right is-stacked-on-mobile is-image-fill" style="grid-template-columns:auto 41%"><div class="wp-block-media-text__content">- **Recovery –** If someone accidentally uploads a new version of the data that is completely wrong – maybe they selected the wrong file, or maybe the data became corrupted – versioning allows you to safely recover the previous version and ensure that all is not lost.
- **Debugging –** When there is a problem with your data, versioning will let you look back through your data’s history and understand where that problem came from. One problem in an early revision may have prompted other problems to appear in later revisions. Versioning will help you unpick this.
- **Accountability –** Where multiple people are working on the same data, it can be important to understand who made each change. If a particular data point doesn’t make sense, versioning will help you understand who is responsible for that data point, so that you can follow up directly with them.
- **Transparency –** Versioning increases the transparency of evidence based decision making, which is especially important in public health. Not only can you recall the exact version of the data used to make a given decision, but you can also understand how that data was formed.

</div><figure class="wp-block-media-text__media" style="background-image:url(https://www.fjelltopp.org/media/Portrait-Hiv-800x1200.jpg);background-position:50% 50%">![](https://www.fjelltopp.org/media/Portrait-Hiv-800x1200.jpg)</figure></div>## What should you version?

Everything!

Version your data, but also: your metadata, any software code that is touching your data and any system configurations that impact your data (the meta-metadata?!)

This may seem like a big ask, but all good software engineers should be versioning the software code that touches your data anyway. This is software 101. If they are not versioning the code, be very concerned! It is often very simple to version system configurations alongside this.

Version control for metadata is critical for accurate and efficient data management. As referred to in [our earlier article](/data-management-principle-maintain-metadata/), metadata is structured data that describes other data. In many cases, metadata can be just as important as the data itself. For example, it may provide information about the data’s purpose, scope, source, and bugs. A change in this metadata may affect how the data is used or interpreted.

Fjelltopp builds metadata version control into our data projects as a founding principle. We find this brings added value to Fjelltopp, our clients and the end users of our tools.

## How should you version?

<div aria-hidden="true" class="wp-block-spacer" style="height:36px"></div><div class="wp-block-media-text alignwide is-stacked-on-mobile is-image-fill" style="grid-template-columns:20% auto"><figure class="wp-block-media-text__media" style="background-image:url(https://www.fjelltopp.org/media/Untitled-design-36.png);background-position:49% 60%">![](https://www.fjelltopp.org/media/Untitled-design-36.png)</figure><div class="wp-block-media-text__content">**\[1\] Ensure you and your team are familiar with your versioning tools.**

*Are you using them correctly? Do they meet all your needs? Everyone should use the same system in the same way so that changes are tracked consistently.*

**\[2\] Reflect on your current version control practices.**

*What are you versioning? Data? Metadata? Code? Configurations? What are you not versioning? Why?*

**\[3\] Audit your version control system.**

*Ask questions concerning your data’s history and ensure that your version control can lead you to the answers. E.g. Who has made changes to your data? What changes have they made? Can I recall the data used on a particular date, or for a particular purpose?*

**\[4\] Improve your version control system.**

*If gaps are found, work with a development team (such as Fjelltopp!) to put a solution in place.*

</div></div><div aria-hidden="true" class="wp-block-spacer" style="height:52px"></div>---

Version control is a critical element of any data management system. It ensures that you have access to old versions of data *and* metadata, can track changes, restore old versions and create an audit trail. By implementing version control and these recommendations in your organisation, you can collaborate more effectively, maintain accountability, and make better decisions based on up-to-date data.

Fjelltopp would be delighted to discuss any of the above points with you – you can set up a free meeting with us [here. ](https://www.fjelltopp.org/contact/)

<div aria-hidden="true" class="wp-block-spacer" style="height:38px"></div><div class="wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-6 wp-block-buttons-is-layout-flex"><div class="wp-block-button">[Read Principle #6 Archive data upon each use](/data-management-principle-archive-data-upon-each-use)</div></div><div aria-hidden="true" class="wp-block-spacer" style="height:66px"></div>
