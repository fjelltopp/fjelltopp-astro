---
title: 'Principle #1 Centralise for Security AND Accessibility'
pubDate: 2023-06-19T13:50:08+01:00
author: 'Dr Jonathan Berry'
summary: 'Balancing data availability with data security is a real challenge.  We provide recommendations on overcoming this.'

guid: 'https://www.fjelltopp.org/?p=1512'
permalink: /data-management-principle-secure-but-accessible-data/
coverImage: ../../assets/dots/dots7.png
type: "Article"
language: "en"
tags:
    - 6Principles
    - DataManagement

authImage: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png'
---

*This is the second post in a series that outlines “[Six principles for sound data management](/six-principles-of-sound-data-management/)“.*

---

Balancing data availability with data security is a real challenge, especially for Fjelltopp’s clients in low and middle income countries (LMICs). The availability of accurate and up-to-date public health information is critical for good decision-making.

LMICs often work with multiple national and international partners all of whom require access to such data in order to support the country’s fight against diseases such as Tuberculosis, HIV, Malaria and Polio. On the other hand, health data, particularly patient-identifiable data, is highly sensitive and requires the highest levels of security.

###The Problem

<div class="wp-block-media-text alignwide has-media-on-the-right is-stacked-on-mobile is-image-fill" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;grid-template-columns:auto 37%"><div class="wp-block-media-text__content">We have been shocked at times by some of the security-practices observed in the international development sector, including institutionalised password-sharing, unencrypted data distribution, and security through obscurity to name just a few. Many institutions understand that their data is sensitive, but lack the technical and legal knowledge to develop data security protocols that balance availability and security.

There are generally two types of outcomes where institutions or sectors fail to give clarity on this matter.

- Either staff focus on availability, with data handled freely and little regard given to security.
- Or, they focus on security, locking data down and obstructing progress by making it extraordinarily hard for anyone to obtain access.

</div><figure class="wp-block-media-text__media" style="background-image:url(https://www.fjelltopp.org/media/Portrait-Home.jpg);background-position:50% 50%">![](https://www.fjelltopp.org/media/Portrait-Home.jpg)</figure></div>## The solution is not, first and foremost, a technical one…

With the [cyber security market valued at $140 billion in 2021](https://www.fortunebusinessinsights.com/industry-reports/cyber-security-market-101165), and expected to grow many times over in the coming years, there is no shortage of technology available to help resolve this problem. However, the decisions underpinning these technologies are deeply complex and political. How should data be classified? Who should be able to access different types of data and for what purposes? What level of protection should different data types be given?

The solution begins as a legal and political one, written up in policy, licences and data sharing agreements. One such example would be the EU’s GDPR regulations, or the UK Government’s Data Protection Act. Because the problem is so challenging, it gets neglected by many institutions and projects.

Our recommendation here is to write something down. Anything. Even if it only serves to reflect the status quo, however arbitrary that may feel. A written document creates clarity and facilitates review, discussion and development amongst stakeholders.

###But technology can and should help…

Many projects lack clear adherence to a data protection policy, meaning a pragmatic approach is required to be a responsible steward of data. Here are a few simple technical principles that you can use to help you steer your data management work towards a sound balance of *security* and *availability.*

<div aria-hidden="true" class="wp-block-spacer" style="height:23px"></div>- **Centralised storage** of data means that you can protect more data, more effectively, with fewer investments in security. It also simplifies the process of finding and accessing data. If your data is sitting on many private computers, or siloed systems, consider how you can bring it together in one place.
- **Individual user accounts** give you control over restricting and monitoring each individuals’ actions through your system. You should seek to remove all sharing of passwords or account access from your work. In our experience this is one of the most prevalent threats to cyber security in the international development sector.
- **Flexible access restriction** enables you to grant specific users the power to perform specific actions (read/write) upon specific data. As a general rule of thumb, users should never be granted more than the specific access they require to perform their designated task.
- **Popular and open security standards** are stress-tested and updated by a global community of experts. Tread carefully if your engineers propose their own designs for security and encryption. A good design should always be built from other widely-adopted security solutions.
- **Modern up-to-date software and standards.** There is a continuous battle to identify and fix security vulnerabilities in software. The software built for your project will depend upon many other third-party software modules. New versions of these “dependencies” are frequently released to fix recently identified vulnerabilities. It is important to ensure there is time and funding to keep these dependencies up-to-date, even though this work may yield no noticeable improvement to the user experience.
- **Use password and secret managers.** Strong passwords are long and random lists of upper and lower case letters, numbers and special characters. They are not memorable! Use a password manager, such as [Bitwarden](https://bitwarden.com/) or [Dashlane](https://www.dashlane.com/), to store a different strong password for every system you use. Never share passwords between systems. Your software engineers should be using a similar solution to store secrets for the software they are building e.g. encryption keys and database passwords. Fjelltopp uses and recommends [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/) for this purpose.

<div aria-hidden="true" class="wp-block-spacer" style="height:27px"></div>## Some questions to ponder:

<div class="wp-block-media-text alignwide has-media-on-the-right is-stacked-on-mobile is-image-fill" style="grid-template-columns:auto 33%"><div class="wp-block-media-text__content"><div aria-hidden="true" class="wp-block-spacer" style="height:21px"></div>- How sensitive is the data that you handle? What is an appropriate proportion of your resources to designate to data protection?
- Are there areas of your work where you know you are adopting poor practice? E.g. A password has been shared, a user granted wider access than they require, or an unencrypted file has been sent by email.
- Why are you adopting such poor practice? Is it a technical, political or financial limitation? Have you spoken to anyone about a possible solution?
- When designing new software features or systems, do you properly account for the cost of ongoing maintenance to fix security vulnerabilities?

Fjelltopp would be delighted to discuss any of the above questions with you. Set up a free meeting with us [here.](https://docs.google.com/forms/d/e/1FAIpQLSdzzKi5MGz4I45KUxFhOfdwXAr9gNzWs5CRi9REblm3LVI0Hg/viewform)

</div><figure class="wp-block-media-text__media" style="background-image:url(https://www.fjelltopp.org/media/Trees-US-Geran-De-Klerk-1-1200x900.jpg);background-position:50% 50%">![](https://www.fjelltopp.org/media/Trees-US-Geran-De-Klerk-1-1200x900.jpg)</figure></div><div aria-hidden="true" class="wp-block-spacer" style="height:63px"></div><div class="wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-2 wp-block-buttons-is-layout-flex"><div class="wp-block-button">[Read Principle #2 Maintain Metadata](/maintain-metadata/)</div></div>
